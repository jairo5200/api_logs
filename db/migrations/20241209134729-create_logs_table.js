'use strict';
const {LOG_TABLE,logSchema} = require('../models/log.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(LOG_TABLE, logSchema); 
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable(LOG_TABLE);
  }
};
