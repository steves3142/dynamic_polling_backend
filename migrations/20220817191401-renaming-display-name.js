'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn('accounts', 'displayname', 'display_name')
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn('accounts', 'display_name', 'displayname')
	},
}
