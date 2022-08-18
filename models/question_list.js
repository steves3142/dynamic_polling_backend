'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Question_Library extends Model {
		static associate(models) {
			Question_Library.hasOne(models.Subject_List, {
				as: 'host',
				foreignKey: 'owner_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

            Question_Library.belongsTo(models.Question_Through_Table, )
			Account.hasOne(models.Client, {
				as: 'client',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Question_Library.init(
		{
			subjectId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Question_Library',
			tableName: 'question_libraries',
		}
	)
	return Question_Library
}
