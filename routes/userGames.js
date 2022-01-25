var express = require('express');
var router = express.Router();
const models = require("../models")
const userGameModel = models.user_game;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const userGame = await userGameModel.findAll();
  res.json({
    message: "Get All User Games",
    data: userGame
  })
});

module.exports = router;
