const cors = require("cors");
const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require ("bcrypt");
const saltRounds = 10;
const { sign, verify} = require('jsonwebtoken');
const {logDOM} = require("@testing-library/react");
const REACT_APP_JWT_SECRET = process.env;

router.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true
}

const createTokens = (user) => {
    console.log(REACT_APP_JWT_SECRET)
    const accessToken =  sign({username: user.username}, "GHyJikJKi987655yHyHHFfdsCb87654");
    // console.log(accessToken)
    return accessToken
}

const validateToken = (req, res, next ) => {
    const accessToken = req.cookies['access-token']
    console.log("accesstoken " , accessToken)

    if(!accessToken)
        return res.status(400).json({error : "User not AUth"})

    try {
        const validToken = verify(accessToken, "GHyJikJKi987655yHyHHFfdsCb87654")
        console.log(validToken)
        console.log("react-app-jwt-secret ",REACT_APP_JWT_SECRET)
        if(validToken){
            console.log("user authenticated")
            req.authenticated = true
            return next()
        }
    } catch (err){
        // console.log(accessToken)
        return res.status(400).json({error : err})
    }

}

router.options('/', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.setHeader("Access-Control-Allow-Credentials", 'true')
    next();
});

router.get("/" , cors(corsOptions), validateToken ,  async(req, res)=> {
    res.status(200).send("valid")
    console.log("valid")
})



module.exports = {createTokens, validateToken}






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
    const username = req.body.username
    const password = req.body.password
    console.log("username " , username)
    console.log("password " , password)
    const user = await Users.findOne({where: {username: username}})
    // console.log(user)
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
                    httpOnly: true
                })
                res.status(200).send({
                    user,
                    "access-token": accessToken
                })
                console.log(accessToken)
                console.log("you logged in")
            }
        })
}});

router.get("/logout", cors(corsOptions), async(req, res)=> {
    res.clearCookie("access-token").send()
    // res.cookie("access-token", "", {
    //     maxAge: 1
    // });
    // res.status(200).send({
    //     "access-token": ""
    // })
    // console.log(newCook)
    console.log(res.cookie["access-token"])
    console.log("done")
})
module.exports = router