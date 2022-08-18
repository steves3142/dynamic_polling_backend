'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('question_library', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
      ownerId: {
        type: Sequelize.STRING
      }
      subjectId: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('question_library');
  }
};
