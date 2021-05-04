const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'fires';

const Fire = sequelize.define('Fire', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  month: {
    type: Sequelize.STRING,
  },

  admArea: {
    type: Sequelize.STRING,
  },
  calls: {
    type: Sequelize.STRING,
  },
 
  year: {
    type: Sequelize.STRING,
  },
  
  
  
}, { tableName });

module.exports = Fire;
