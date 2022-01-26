var express = require('express');
var router = express.Router();
const models = require("../models")
const userModel = models.user_game;
const userGameModel = models.user_game_biodata;
const userHistoryModel = models.user_game_history;
/* GET users listing. */
router.get('/', async function (req, res, next) {
    // res.send('respond with a resource');
    const user = await userModel.findAll({
        include: [
            "user_game_biodata", "user_game_history"
        ]
    })
    const userMapped = user.map((Item) => {
        return {
            id: Item.id,
            name: Item.name,
            age: Item.age,
            address: Item.address,
            hobby: Item.user_game_biodata?.hobby,
            favorite_game: Item.user_game_biodata?.favorite_game,
            skor: Item.user_game_history?.skor

        }
    })
    res.json({
        message: "Test",
        data: userMapped
    })
});
router.post("/biodata", async function (req, res) {
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
    const user = await userModel.findByPk(userGameId, {
        include: [
            "user_game_biodata"
        ]
    })
    // const userMapped = user.map((Item) => {
    //     return {
    //         id: Item.id,
    //         name: Item.name,
    //         age: Item.age,
    //         address: Item.address,
    //         hobby: Item.user_game_biodata.hobby,
    //         favorite_game: Item.user_game_biodata.favorite_game
    //
    //     }
    // })

    // const newUserGame = await userGameModel.findByPk(userGameBiodataSave.id, {
    //     include: ["user_game_biodata"]
    // })
    res.json({
        message: "Test",
        data: user
    })
})

router.put("/biodata/:id", async function (req, res) {
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
    res.json({
        message: "Success Update data",
    })
})
router.delete("/biodata/:id", async function (req, res) {
    const userId = req.params.id;
    const userBiodataDelete = await userGameModel.destroy({
        where: {
            user_game_id: userId
        }
    })
    const userDelete = await userModel.destroy({
        where: {
            id: userId
        }
    })
    res.json({
        message: "Success delete data",
    })

})
module.exports = router;
