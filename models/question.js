'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Question extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Question.belongsTo(models.Room, {
				as: 'questions',
				foreignKey: 'room_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Question.hasMany(models.Answer, {
				as: 'answers',
				foreignKey: 'question_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Question.hasMany(models.Choice, {
				as: 'choices',
				foreignKey: 'question_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
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
					onDelete: 'cascade',
					onUpdate: 'cascade',
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
