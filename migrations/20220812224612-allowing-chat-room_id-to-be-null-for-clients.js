'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('clients', 'room_id', {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'hosts',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('clients', 'room_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'hosts',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})
	},
}
