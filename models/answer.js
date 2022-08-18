'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Answer extends Model {
		static associate(models) {
			Answer.belongsTo(models.Question, {
				as: 'student_answer',
				foreignKey: 'question_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
			Answer.belongsTo(models.Client, {
				as: 'answerer',
				foreignKey: 'student_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Answer.init(
		{
			student_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'clients',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
			},
			question_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'questions',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
			},
			response: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Answer',
			tableName: 'answers',
			freezeTableName: true,
		}
	)
	return Answer
}
