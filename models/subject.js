'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Subject extends Model {
		static associate(models) {
			Subject.hasOne(models.Host, {
				as: 'owner',
				foreignKey: 'owner_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Subject.init(
		{
			subject_name: DataTypes.STRING,
			owner_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'hosts',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				}
			} 
		},
		{
			sequelize,
			modelName: 'Subject',
			tableName: 'subjects',
		}
	)
	return Subject
}
