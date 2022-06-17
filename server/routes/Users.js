const cors = require("cors");
const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require ("bcrypt");
const saltRounds = 10;

router.options('/', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,

}

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
                console.log("you logged in")
            }
        })
}});

module.exports = router