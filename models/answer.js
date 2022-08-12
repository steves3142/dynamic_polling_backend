'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Answer extends Model {
		static associate(models) {
			Answer.belongsTo(models.Client, {
				as: 'answerer',
				foreignKey: 'student_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})
			Answer.belongsTo(models.Question, {
				as: 'student_answer',
				foreignKey: 'question_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
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
				},
			},
			question_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'questions',
					key: 'id',
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
