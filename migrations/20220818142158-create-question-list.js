'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('question_list', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
      ownerId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('question_list');
  }
};
