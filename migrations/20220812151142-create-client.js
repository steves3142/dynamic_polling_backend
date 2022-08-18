'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('clients', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			account_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'accounts',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			room_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'rooms',
					key: 'id',
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('clients')
	},
}
