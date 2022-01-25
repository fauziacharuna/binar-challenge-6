'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_game_biodata extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    user_game_biodata.init({
        user_game_id: DataTypes.INTEGER,
        hobby: DataTypes.STRING,
        favorite_game: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'user_game_biodata',
        timestamps: false
    });
    // user_game_biodata.associate = function (models) {
    //     user_game_biodata.belongsTo(models.user_game, {as: "user"})
    // }
    // user_game_biodata.user_game = user_game_biodata.belongsTo(user_game, {foreignKey: "user_game_id", as: "user"})
    return user_game_biodata;
};