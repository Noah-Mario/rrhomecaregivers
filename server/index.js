const express = require('express');
const cors = require('cors');
const bodyParser = require ("body-parser")
const mysql = require("mysql");
// const router = express.Router();
// router.use(cors)

const app = express();
// const corsOptions = {
//     origin: "*",
//     optionsSuccessStatus: 200
// }
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors)

// app.get("/create", (req, res) => {
//     res.send("hi");
// });

let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "codeup",
    database: "rr_database",
    port: 3306
});

con.connect((err) => {
    if(!err){
        console.log('connected!')
    }else{
        console.log('connection failed.' + err)
    }
});

// con.connect(function(err) {
//     console.log("Connected!");
// });




//use cors to allow cross origin resource sharing
app.options('/create', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// let posts = [];

app.post('/create', cors(), function(req, res) {
        const title = req.body.titleName
        const review = req.body.review
        const imageURL = req.body.imageURL

    console.log(title)
    console.log(review)
    console.log(imageURL)
    const sqlInsert = "INSERT INTO posts (title, text, images) VALUES (?,?,?)";
    con.query(sqlInsert, [title, review, imageURL], (err, result) => {
        if (!err){
            console.log("success")
        }else{
            console.log("did not work");
        }

    });
});

//start your server on port 3001
app.listen(3306, () => {
    console.log('Server Listening on port 3306');
});


