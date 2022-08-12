'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Answer.belongsTo(models.Question, {
				as: 'student_answer',
				foreignKey: 'question_id',
			})

			Answer.belongsTo(models.Client, {
				as: 'answers',
				foreignKey: 'student_id',
			})
		}
	}
	Answer.init(
		{
			student_id: DataTypes.INTEGER,
			question_id: DataTypes.INTEGER,
			response: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Answer',
			tableName: 'answers',
		}
	)
	return Answer
}
