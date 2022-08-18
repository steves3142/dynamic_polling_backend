'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Subject_List extends Model {
		static associate(models) {
			Subject_List.hasOne(models.Subject_List, {
				as: 'host',
				foreignKey: 'owner_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

            Subject_List.belongsTo(models.Question_Through_Table, )

		}
	}
	Subject_List.init(
		{
			subjectId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Subject_List',
			tableName: 'subject_lists',
		}
	)
	return Subject_List
}
