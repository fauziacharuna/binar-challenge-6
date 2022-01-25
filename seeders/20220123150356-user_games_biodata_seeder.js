'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_game_biodata', [
      {
        user_game_id: 1,
        hobby: "Coding",
        favorite_game: "Call of Duty",

      },
      {
        user_game_id: 2,
        hobby: "Cooking",
        favorite_game: "Call of Duty",

      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_biodata', null, {});

  }
};
