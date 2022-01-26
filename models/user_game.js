'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_game extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            user_game.hasOne(models.user_game_biodata, {foreignKey: "user_game_id", as: "user_game_biodata"})
            user_game.hasOne(models.user_game_history, {foreignKey: "user_game_id", as: "user_game_history"})

            // define association here
        }
    }

    user_game.init({
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'user_game',
        timestamps: false,
    });


    return user_game;
};