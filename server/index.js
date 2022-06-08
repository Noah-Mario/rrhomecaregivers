
/*
const bodyParser = require('body-parser');
const cors = require('cors');
let mysql = require('mysql');
const express = require('express');
const con = require("mysql");
const app = express();
// const con = require('mysql');


let db = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host: "localhost",
    user: "root",
    password: "codeup",
    database: "rr_database"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });


app.use(bodyParser.urlencoded({extended: true}))
app.use(cors);
app.use(express.json())
app.post("/api/insert", (req,res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001/api/insert');
    const title = req.body.titleName
    const text = req.body.review
    const image = req.body.imageURL

    const sqlInsert = "INSERT INTO posts (title, text, images) VALUES (?,?,?)"
    // res.send("hi")
    db.query(sqlInsert, [title,text,image], (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
})*/

const express = require('express');
const cors = require('cors');


const app = express();

//use cors to allow cross origin resource sharing
app.options('/create', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let posts = [];

/*app.get('/testimonials', function(req, res) {
    console.log('Inside Home Login');
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    console.log('Books : ', JSON.stringify(books));
    res.end(JSON.stringify(books));
});*/

app.post('/create', function(req, res) {
    const newPosts = {
        BookID: req.body.titleName,
        Title: req.body.review,
        Author: req.body.imageURL,
    };

    posts.push(newPosts);
    console.log(posts);
});

//start your server on port 3001
app.listen(3001, () => {
    console.log('Server Listening on port 3001');
});
