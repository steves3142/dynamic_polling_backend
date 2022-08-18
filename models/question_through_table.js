'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Question_Through_Table extends Model {
		static associate(models) {
			Question_Through_Table.hasOne(models.Subject_List, {
				as: 'host',
				foreignKey: 'owner_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

            Question_Through_Table.belongsTo(models.Question_Through_Table, )
			Account.hasOne(models.Client, {
				as: 'client',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Question_Through_Table.init(
		{
			subjectId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Question_Through_Table',
			tableName: 'question_through_table',
		}
	)
	return Question_Library
}
