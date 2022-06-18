
const postRouter = require('./routes/Posts')
const userRouter = require('./routes/Users')
const express = require('express');
const bodyParser = require ("body-parser")
const db = require('./models')
const cookieParser = require('cookie-parser');
const {createTokens} =require('./routes/Users')
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use("/posts", postRouter)

app.use("/users", userRouter)


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


db.sequelize.sync().then(() => {
    app.listen(3306, () => {
        console.log('Server Listening on port 3306');
    });
})


