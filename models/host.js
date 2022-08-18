'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Host extends Model {
		static associate(models) {
			Host.belongsTo(models.Account, {
				as: 'host',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Host.hasMany(models.Room, {
				as: 'room_owner',
				foreignKey: 'owner_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Host.init(
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
		},
		{
			sequelize,
			modelName: 'Host',
			tableName: 'hosts',
		}
	)
	return Host
}
