'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('choices', 'student_id')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('choices', 'student_id', Sequelize.integer)
  }
};
