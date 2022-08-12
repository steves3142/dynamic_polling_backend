'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Host extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Host.belongsTo(models.Account, {
				as: 'host',
				foreignKey: 'account_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Host.hasMany(models.Room, {
				as: 'room_owner',
				foreignKey: 'owner_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
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
					onDelete: 'cascade',
					onUpdate: 'cascade',
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
