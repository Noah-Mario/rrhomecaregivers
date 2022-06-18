const cors = require("cors");
const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require ("bcrypt");
const saltRounds = 10;
const { sign, verify} = require('jsonwebtoken');
const REACT_APP_JWT_SECRET = process.env;
const cookieParser = require('cookie-parser');
router.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,

}

const createTokens = (user) => {
    console.log(REACT_APP_JWT_SECRET)
    const accessToken = sign({username: user.username, id: user.id}, "GHyJikJKi987655yHyHHFfdsCb87654");
    return accessToken;
}

const validateToken = (req, res, next ) => {
    const accessToken = req.cookies["accessToken"];

    if(!accessToken)
        return res.status(400).json({error : "User not AUth"})

    try {
        const validToken = verify(accessToken, "GHyJikJKi987655yHyHHFfdsCb87654")
        console.log(REACT_APP_JWT_SECRET)
        if(validToken){
            req.authenticated = true
            return next()
        }
    } catch (err){
        return res.status(400).json({error : err})
    }

}

router.get("/", cors(corsOptions), async(req, res)=> {
    const {token } = req.cookies;
    console.log(token)
})



module.exports = {createTokens}


router.options('/', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});



// router.post("/", cors(corsOptions), (req, res)=> {
//     const {username, password} = req.body
//     bcrypt.hash(password, saltRounds).then((hash) => {
//         Users.create({
//             username: username,
//             password:  hash
//         }).then(() => {
//             console.log("YEah Buddy")
//         }).catch((err) => {
//             if(err) {
//                 res.status(400).json({error : err})
//             }
//         })
//     })
// });

router.post("/", cors(corsOptions), async(req, res)=> {
    const {username, password} = req.body
    const user = await Users.findOne({where: {username: username}})
    if (!user) {
        console.log("no user")
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match){
                console.log('wrong username and password')
            }else{
                const accessToken = createTokens(user)
                res.cookie("access-token", accessToken, {
                    maxAge : 60 * 60 * 24 * 30 * 1000,
                    httpOnly: true,
                })

                console.log("you logged in")
            }
        })
}});

module.exports = router