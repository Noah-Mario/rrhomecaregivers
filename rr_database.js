// const bodyParser = require('body-parser');
// const cors = require('cors');
// let mysql = require('mysql');
//
// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "codeup",
//     database: "rr_database"
// });
//
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     let posts = "CREATE TABLE posts (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100), text VARCHAR(255), images VARCHAR(255))";
//     con.query(posts, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });
//
// const express = require('express');
// const db = require("mysql");
// const app = express()
//
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors);
// app.use(express.json())
// app.post("/api/insert", (req,res) => {
//
//     const title = req.body.titleName
//     const text = req.body.review
//     const image = req.body.imageURL
//
//     const sqlInsert = "INSERT INTO posts (title, text, images) VALUES (?,?,?)"
//     db.query(sqlInsert, [title,text,image], (err, result) => {
//         console.log(err)
//     })
// })
//
// app.listen(3001, () => {
//     console.log("running on port 3001");
// })

