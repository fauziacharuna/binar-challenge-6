var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const axios = require('axios');
const models = require("./models")
const userModel = models.user_game;
const userGameModel = models.user_game_biodata;
const userHistoryModel = models.user_game_history;



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userGamesRouter = require('./routes/userGames');
const {response} = require("express");

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))

app.get('/login', function (req, res) {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, password);
    res.render('login');
});
app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    res.redirect('/dashboard')
});
// index page
app.get('/', function (req, res) {
    res.render('index');
});
app.get(`/dashboard`, async function (req, res) {
    const usersApi = await axios.get('http://localhost:3000/users');
    console.log(usersApi.data)
    res.render('dashboard', {users: usersApi.data.data});
})
app.get(`/user/create`, async function (req, res) {
    // const usersApi = await axios.get('http://localhost:3000/users');
    // console.log(usersApi.data);
    res.render('create', {user: null});
})
app.post(`/user/create`, async function (req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;
    const hobby = req.body.hobby;
    const favorite_game = req.body.favorite_game;
    const skor = req.body.skor;

    userGameSave = await userModel.create({
        name: name
    });
    const userGameId = userGameSave.id;
    const userGameBiodataSave = await userGameModel.create({
        user_game_id: userGameId,
        age,
        address,
        hobby,
        favorite_game,
    })
    const userGameHistorySave = await userHistoryModel.create({
        user_game_id: userGameId,
        skor

    })
    // const user = await userModel.findByPk(userGameId, {
    //     include: [
    //         "user_game_biodata"
    //     ]
    // })

    // let data = res.data.json(res.user.data)
    // console.log(data)
    res.redirect('/dashboard')
})
app.get('/user/:id', async function (req, res) {
    console.log(req.params.id)
    const user = await userModel.findOne({
        where: {
            id: req.params.id
        }, include:
            ['user_game_biodata', 'user_game_history']

    })
    res.render('create', {user: user});
})
app.post(`/user/update/:id`, async function (req, res) {
    const userId = req.params.id;

    console.log("test")

    const {
        name, address, age, hobby, favorite_game
    } = req.body;
    console.log(name)
    const user = await userModel.update({
        name: name,
        address: address,
        age: age,
    }, {
        where: {
            id: userId
        }
    });
    const userBiodata = await userGameModel.update({
        hobby: hobby,
        favorite_game: favorite_game,
    }, {
        where: {
            user_game_id: userId
        }
    });
    notification = {
        message: "Success udate Data"
    }

    // let data = res.data.json(res.user.data)
    // console.log(data)
    res.redirect('/dashboard')
})
app.get("/user/delete/:id", async function (req, res){
    const userId = req.params.id;
    const userBiodataDelete = await userGameModel.destroy({
        where: {
            user_game_id : userId
        }
    })
    const userDelete = await userModel.destroy({
        where:{
            id: userId
        }
    })
    res.redirect('/dashboard')

})

// about page
app.get('/suwit', function (req, res) {
    res.render('suwit');
});
app.use('/users', usersRouter);
app.use('/user_games', userGamesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
