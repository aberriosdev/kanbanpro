const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lista = sequelize.define('Lista', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  TableroId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Lista;