'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.addColumn('rooms', 'name', {
			type: Sequelize.STRING,
		})
	},

	async down(queryInterface, Sequelize) {
		queryInterface.removeColumn('rooms', 'name')
	},
}
