'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			room_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'rooms',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			question: {
				type: Sequelize.STRING,
			},
			type: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('questions')
	},
}
