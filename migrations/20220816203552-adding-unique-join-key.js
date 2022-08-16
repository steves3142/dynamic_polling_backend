'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
		return queryInterface.changeColumn('rooms', 'join_key', {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		})
	},

  async down (queryInterface, Sequelize) {
		return queryInterface.changeColumn('rooms', 'join_key', {
			type: Sequelize.STRING,
			allowNull: true,
			unique: false,
		})
  }
};
