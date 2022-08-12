'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Choice extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Choice.belongsTo(models.Question, {
				as: 'choices',
				foreignKey: 'question_id'
			})
		}
	}
	Choice.init(
		{
			question_id: DataTypes.INTEGER,
			choice: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Choice',
			tableName: 'choices',
		}
	)
	return Choice
}
