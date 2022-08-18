'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Client extends Model {
		static associate(models) {
			Client.belongsTo(models.Account, {
				as: 'client_account',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Client.hasMany(models.Answer, {
				as: 'answers',
				foreignKey: 'student_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Client.belongsTo(models.Room, {
				as: 'client',
				foreignKey: 'room_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}

	Client.init(
		{
			account_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'accounts',
					key: 'id',
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
			},
			room_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'rooms',
					key: 'id',
					onDelete: 'SET NULL',
					onUpdate: 'SET NULL',
				},
			},
		},
		{
			sequelize,
			modelName: 'Client',
			tableName: 'clients',
			freezeTableName: true,
		}
	)
	return Client
}
