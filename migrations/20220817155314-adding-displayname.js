module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.addColumn('accounts', 'displayname', {
		  type: Sequelize.STRING,
		})
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.removeColumn('accounts', 'displayname')
	}
};
