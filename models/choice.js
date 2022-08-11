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
			// define association here
		}
	}
	Choice.init(
		{
			student_Id: DataTypes.INTEGER,
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
