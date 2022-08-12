'use strict';
const {
  Model
} = require('sequelize');
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
        foreignKey: 'questionId'
      })

      Room.belongsTo(models.Host, {
        as: 'host',
        foreignKey: 'account_id'
      })

      Room.hasMany(models.Client, {
        as: 'clients',
        foreignKey: 'student_id'
      })
    }
  }
  Room.init({
    owner_id: DataTypes.INTEGER,
    join_key: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms'
  });
  return Room;
};