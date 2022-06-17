
// const mysql = require("mysql");
// const bcrypt = require ("bcrypt");
// const saltRounds = 10;

const express = require('express');
const cors = require('cors');
const bodyParser = require ("body-parser")
const db = require('./models')
const {Users} = require('./models')
const postRouter = require('./routes/Posts')
const {Posts} = require("./models");
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
app.use(bodyParser.urlencoded({extended:true}));
app.use("/posts", postRouter)

// // use cors to allow cross origin resource sharing
// app.options('/create', function (req, res,next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
//     next();
// });
//
// app.options('/posts', function (req, res,next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
//     next();
// });
//
// app.options('/register', function (req, res,next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
//     next();
// });
//
// app.options('/login', function (req, res,next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
//     res.setHeader('Access-Control-Allow-Credentials', "true");
//     next();
// });
//
app.options('/posts',function (req, res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();

});

app.options('/posts', (_, res) => {
    res.sendStatus(200);
});


app.options('*', (req, res) => {
    res.sendStatus(200);
});

// app.post("/register", cors(), (req, res)=> {
//     const {username, password} = req.body
//     bcrypt.hash(password, saltRounds).then((hash) => {
//         Users.create({
//             username: username,
//             password:  hash
//         }).then(() => {
//             res.json("User Registered")
//         }).catch((err) => {
//             if(err) {
//                 res.status(400).json({error : err})
//             }
//         })
//
//     })
//     res.json("/register");
// });
//
// app.post("/login", (req, res)=> {
//     res.json("/login");
// });
//
// app.get("/profile", (req, res)=> {
//     res.json("/profile");
// });


// app.post('/register', cors(), function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//
//     bcrypt.hash(password,saltRounds, (err, hash) => {
//         if(err){
//             console.log(err)
//         }
//         con.query("INSERT INTO users (username,password) VALUES (?,?)",[username,hash], (err, result) => {
//             console.log(err)
//         })
//     })
//
// })
//
// app.get('/login', cors(corsOptions), (req, res) => {
//     console.log("get request")
//     if (req.session.user) {
//         res.send({loggedIn: true, user: req.session.user})
//     }else{
//         res.send({loggedIn: false})
//     }
// })
//
// app.post('/login', cors(corsOptions), function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;
//
//     const sqlLogin = "SELECT * FROM users WHERE username = ?"
//     con.query(sqlLogin,[username,password], (err, result) => {
//         if(err){
//             res.send({err: err})
//         }
//
//         if(result.length > 0){
//             bcrypt.compare(password, result[0].password, (err, response) => {
//                 if(response){
//                     req.session.user = result
//                     console.log(req.session.user)
//                     res.send(result)
//                 }else{
//                     res.send({message: "Wrong username and password"})
//                 }
//             })
//         }else{
//             res.send({message: "user doesn't exist"})
//
//         }
//     })
// })

db.sequelize.sync().then(() => {
    app.listen(3306, () => {
        console.log('Server Listening on port 3306');
    });
})


