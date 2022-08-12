'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Room, {
        as: 'questions',
        foreignKey: 'room_id'
      })

      Question.hasMany(models.Answer, {
        as: 'answers',
        foreignKey: 'question_id'
      })

      Question.hasMany(models.Choice, {
        as: 'choices',
        foreignKey: 'question_id'
      })
    }
  }
  Question.init({
    room_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions'
  });
  return Question;
};