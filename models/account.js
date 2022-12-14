'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Account extends Model {
		static associate(models) {
			Account.hasOne(models.Host, {
				as: 'host',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})

			Account.hasOne(models.Client, {
				as: 'client',
				foreignKey: 'account_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		}
	}
	Account.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			passwordDigest: DataTypes.STRING,
			type: DataTypes.STRING,
			display_name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Account',
			tableName: 'accounts',
		}
	)
	return Account
}
