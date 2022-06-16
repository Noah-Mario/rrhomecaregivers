const express = require('express');
const cors = require('cors');
const bodyParser = require ("body-parser")
const mysql = require("mysql");
const bcrypt = require ("bcrypt");
const saltRounds = 10;
const cookieParser = require ("cookie-parser");
const expressSession = require("express-session");
// const router = express.Router();
// router.use(cors)

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession({
    key: "userId",
    secret: "yo",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))
// app.use(cors)

app.get("/create", (req, res) => {
    res.send("hi");
});

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

//use cors to allow cross origin resource sharing
app.options('/create', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

app.options('/register', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

app.options('/login', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.options('*', function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.get('/get', cors(corsOptions), function(req, res ){
    const sqlGet = "SELECT * FROM posts"
    con.query(sqlGet, (err, result) => {
        if(!err){
            console.log("big buncha success over here " + result)
            res.send(result)
        }else{
            console.log("you're a failure " + err)
        }
    })
})


app.delete('/delete/:id', cors(corsOptions), function(req, res){
    const id = req.params.id
    const sqlDelete = "DELETE FROM posts WHERE id = ?"
    con.query(sqlDelete, id, (err, result) => {
        if(!err){
            console.log("Deleted and defeated. " + result)
        }else{
            console.log("delete failed... nerd. " + err)
        }
    })
})

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
            console.log("Get Inserted On! " + result)
        }else{
            console.log("didn't work loser! " + err);
        }

    });
});

app.post('/register', cors(), function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err, hash) => {
        if(err){
            console.log(err)
        }
        con.query("INSERT INTO users (username,password) VALUES (?,?)",[username,hash], (err, result) => {
            console.log(err)
        })
    })

})

app.get('/login', cors(corsOptions), (req, res) => {
    console.log("get request")
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.post('/login', cors(corsOptions), function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const sqlLogin = "SELECT * FROM users WHERE username = ?"
    con.query(sqlLogin,[username,password], (err, result) => {
        if(err){
            res.send({err: err})
        }

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (err, response) => {
                if(response){
                    req.session.user = result
                    console.log(req.session.user)
                    res.send(result)
                }else{
                    res.send({message: "Wrong username and password"})
                }
            })
        }else{
            res.send({message: "user doesn't exist"})

        }
    })
})

//start your server on port 3306
app.listen(3306, () => {
    console.log('Server Listening on port 3306');
});


// CREATE TABLE posts(
//     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     title VARCHAR(100),
//     text TEXT NOT NULL,
//     images VARCHAR(10000),
//     PRIMARY KEY (id)
// );

