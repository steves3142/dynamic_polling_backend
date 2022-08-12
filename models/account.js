'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasOne(models.Host, {
        as: 'host',
        foreignKey: 'account_id'
      })

      Account.hasOne(models.Client, {
        as: 'client',
        foreignKey: 'account_id'
      })
    }
  }
  Account.init({
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts'
  });
  return Account;
};