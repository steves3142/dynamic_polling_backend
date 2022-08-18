'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('answers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			student_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'clients',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			question_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'questions',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			response: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable('answers')
	},
}
