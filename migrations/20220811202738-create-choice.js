'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('choices', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			student_id: {
				type: Sequelize.INTEGER,
			},
			question_id: {
				type: Sequelize.INTEGER,
			},
			choice: {
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
		await queryInterface.dropTable('choices')
	},
}
