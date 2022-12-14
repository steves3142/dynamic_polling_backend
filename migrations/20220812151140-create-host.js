'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('hosts', {
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
		await queryInterface.dropTable('hosts')
	},
}
