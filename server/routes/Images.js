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

router.options('/:postId', function (req, res,next) {
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


router.post('/',cors(corsOptions),async(req,res)=> {
    const imagesUrl2 = req.body.url2
    const imagesUrl = req.body.url;
    const postId = req.body.postId;
    await Images.bulkCreate([{url: imagesUrl, PostId: postId},
        {url: imagesUrl2, PostId: postId}]).then((err) => {
            console.log(err)
    })
    // console.log(imagesUrl)
    // await Images.create({url: imagesUrl, PostId: postId})
});

// router.get('/',cors(corsOptions),async(req, res) => {
//     // const postId = req.params.postId
//     // const listOfImages = await Images.findAll({where: {postId: postId}});
//     const listOfImages = await Images.findAll();
//     res.json(listOfImages)
// });
router.delete('/:id',cors(corsOptions),async(req,res) => {
    const id =req.params.id;
    await Images.destroy({where : {PostId : id}})

})

router.get('/:postId',cors(corsOptions),async(req, res) => {
    const postId = req.params.postId
    console.log(postId)
    const listOfImages = await Images.findAll({where: {postId: postId}});
    // const listOfImages = await Images.findAll();
    res.send(listOfImages)
});






module.exports = router;