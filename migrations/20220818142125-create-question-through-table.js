'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('through_table', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
      questionListId: {
        type: Sequelize.INTEGER
      },
      questionLibraryId: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('through_table');
  }
};
