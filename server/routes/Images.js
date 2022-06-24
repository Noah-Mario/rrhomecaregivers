const express = require('express');
const router = express.Router();
const {Images, Posts} = require("../models");
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,

}

router.options('/', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});


router.post('/',cors(corsOptions),async(req,res)=> {
    const images = req.body;
    await Images.create(images)
});

router.get('/',cors(corsOptions),async(req, res) => {
    const listOfImages = await Images.findAll();
    res.json(listOfImages)
});






module.exports = router;