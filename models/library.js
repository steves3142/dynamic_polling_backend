'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Library extends Model {
		static associate(models) {
			Library.hasOne(models.Subject, {
				as: 'subject',
				foreignKey: 'subject_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Library.belongsToMany(models.question)
		}
	}
	Library.init(
		{
			subject_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					models: 'subjects',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				}
			},
			question: {
				type: DataTypes.STRING,
			},
			type: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: 'Library',
			tableName: 'libraries',
		}
	)
	return Library
}
