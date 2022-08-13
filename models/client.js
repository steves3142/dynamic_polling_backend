'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Client extends Model {
		static associate(models) {
			Client.belongsTo(models.Account, {
				as: 'client_account',
				foreignKey: 'account_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Client.belongsTo(models.Room, {
				as: 'client',
				foreignKey: 'room_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
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
					onDelete: 'cascade',
					onUpdate: 'cascade',
				},
			},
			room_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'rooms',
					key: 'id',
					onDelete: 'cascade',
					onUpdate: 'cascade',
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
