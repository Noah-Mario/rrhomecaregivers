const express = require('express');
const router = express.Router();
const {Posts} = require("../models");
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

router.options('/:id', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

router.get('/',cors(corsOptions),async(req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts)
});

router.post('/',async(req,res)=> {
    const posts = req.body;
    await Posts.create(posts)

});

router.delete('/:id',cors(corsOptions),async(req,res) => {
    const id =req.params.id;
    await Posts.destroy({where : {id : id}})

})



module.exports = router