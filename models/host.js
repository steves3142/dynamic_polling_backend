'use strict';
const {
  Model
} = require('sequelize');
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
        foreignKey: 'account_id'
      })

      Host.hasMany(models.Room, {
        as: 'room_owner',
        foreignKey: 'owner_id'
      })
    }
  }
  Host.init({
    account_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Host',
    tableName: 'hosts'
  });
  return Host;
};