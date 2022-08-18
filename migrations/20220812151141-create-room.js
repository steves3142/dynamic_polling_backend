'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('rooms', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			owner_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'hosts',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			join_key: {
				type: Sequelize.STRING,
			},
			isActive: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable('rooms')
	},
}
