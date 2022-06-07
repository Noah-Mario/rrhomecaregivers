const bodyParser = require('body-parser');
const cors = require('cors');
let mysql = require('mysql');
const express = require('express');
const app = express();


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

// mysql.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     // con.query( function (err, result) {
//     //     if (err) throw err;
//     //     console.log("Table created");
//     // });
// });


app.use(bodyParser.urlencoded({extended: true}))
app.use(cors);
app.use(express.json())
app.post("/api/insert", (req,res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3306');
    const title = req.body.titleName
    const text = req.body.review
    const image = req.body.imageURL

    const sqlInsert = "INSERT INTO posts (title, text, images) VALUES (?,?,?)"
    // res.send("hi")
    db.query(sqlInsert, [title,text,image], (err, result) => {
        console.log(err)
    })
})

app.listen(3306, () => {
    console.log("running on port 3001");
})