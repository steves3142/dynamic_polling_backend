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
				foreignKey: 'question_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})
		}
	}
	Choice.init(
		{
			question_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'questions',
					key: 'id',
					onDelete: 'cascade',
					onUpdate: 'cascade',
				},
			},
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
