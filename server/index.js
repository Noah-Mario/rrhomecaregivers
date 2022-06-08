const express = require('express');
const cors = require('cors');
const mysql = require("mysql");
const db = require("mysql");


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "codeup",
    database: "rr_database",
});

con.connect();

// con.connect(function(err) {
//     console.log("Connected!");
// });


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

app.post('/create', function(req, res) {
    const newPosts = {
        Title: req.body.titleName,
        Review: req.body.review,
        ImageURL: req.body.imageURL,
    };
    const sqlInsert = "INSERT INTO posts (title, text, images) VALUES (?,?,?)"
    db.query(sqlInsert, [newPosts.Title, newPosts.Review, newPosts.ImageURL], (err, result) => {
        console.log(err)
        console.log(result);
    });
    posts.push(newPosts);
    console.log(posts);
});

//start your server on port 3001
app.listen(3306, () => {
    console.log('Server Listening on port 3306');
});


