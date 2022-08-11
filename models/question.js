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
        as: 'current_question',
        foreignKey: room_id
      })

      Question.hasMany(models.Answer, {
        as: 'answer',
        foreignKey: 'answer_id'
      })

      Question.hasMany(models.Choice, {
        as: 'current_choice',
        foreignKey: 'choice_id'
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