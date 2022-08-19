'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Question extends Model {
		static associate(models) {
			Question.belongsTo(models.Room, {
				as: 'questions',
				foreignKey: 'room_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Question.hasMany(models.Answer, {
				as: 'answers',
				foreignKey: 'question_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				hooks: true,
			})

			Question.hasMany(models.Choice, {
				as: 'choices',
				foreignKey: 'question_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				hooks: true,
			})
		}
	}
	Question.init(
		{
			room_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'rooms',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
			},
			question: DataTypes.STRING,
			type: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Question',
			tableName: 'questions',
		}
	)
	return Question
}
