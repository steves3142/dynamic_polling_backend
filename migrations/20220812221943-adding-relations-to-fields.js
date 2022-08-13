'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		//answers references
		await queryInterface.changeColumn('answers', 'student_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'clients',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		await queryInterface.changeColumn('answers', 'question_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'questions',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		//clients references
		await queryInterface.changeColumn('clients', 'account_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'accounts',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})
		await queryInterface.changeColumn('clients', 'room_id', {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'rooms',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		//room references
		await queryInterface.changeColumn('rooms', 'owner_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'hosts',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		//questions references
		await queryInterface.changeColumn('questions', 'room_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'rooms',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		//choices
		await queryInterface.changeColumn('choices', 'question_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'questions',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})

		//host references
		await queryInterface.changeColumn('hosts', 'account_id', {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'accounts',
				key: 'id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		})
	},

	async down(queryInterface, Sequelize) {
		//answers
		await queryInterface.changeColumn('answers', 'student_id', {
			type: Sequelize.INTEGER,
		})

		await queryInterface.changeColumn('answers', 'question_id', {
			type: Sequelize.INTEGER,
		})

		//clients
		await queryInterface.changeColumn('clients', 'account_id', {
			type: Sequelize.INTEGER,
		})
		await queryInterface.changeColumn('clients', 'room_id', {
			type: Sequelize.INTEGER,
		})

		//room references
		await queryInterface.changeColumn('rooms', 'owner_id', {
			type: Sequelize.INTEGER,
		})

		//questions references
		await queryInterface.changeColumn('questions', 'room_id', {
			type: Sequelize.INTEGER,
		})

		//choices
		await queryInterface.changeColumn('choices', 'question_id', {
			type: Sequelize.INTEGER,
		})

		//host references
		await queryInterface.changeColumn('hosts', 'account_id', {
			type: Sequelize.INTEGER,
		})
	},
}
