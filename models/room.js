'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Room extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Room.hasMany(models.Question, {
				as: 'questions',
				foreignKey: 'room_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Room.belongsTo(models.Host, {
				as: 'owner',
				foreignKey: 'owner_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})

			Room.hasMany(models.Client, {
				as: 'clients',
				foreignKey: 'room_id',
				onDelete: 'cascade',
				onUpdate: 'cascade',
			})
		}
	}
	Room.init(
		{
			owner_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'hosts',
					key: 'id',
					onDelete: 'cascade',
					onUpdate: 'cascade',
				},
			},
			join_key: DataTypes.STRING,
			isActive: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Room',
			tableName: 'rooms',
		}
	)
	return Room
}
