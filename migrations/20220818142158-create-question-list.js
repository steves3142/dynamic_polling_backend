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
      owner_id: {
        type: Sequelize.INTEGER,
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
