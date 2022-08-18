'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class QuestionList extends Model {
		static associate(models) {
			// QuestionList.hasOne(models.Subject_List, {
			// 	as: 'host',
			// 	foreignKey: 'owner_id',
			// 	onDelete: 'CASCADE',
			// 	onUpdate: 'CASCADE',
			// })

            // QuestionList.belongsTo(models.Question_Through_Table, )
			// Account.hasOne(models.Client, {
			// 	as: 'client',
			// 	foreignKey: 'account_id',
			// 	onDelete: 'CASCADE',
			// 	onUpdate: 'CASCADE',
			// })
		}
	}
	QuestionList.init(
		{
			owner_id: DataTypes.INTEGER,
            allowNull: false,
            references: {
                models: 'hosts',
                key: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }
		},
		{
			sequelize,
			modelName: 'QuestionList',
			tableName: 'question_list',
		}
	)
	return QuestionList
}
