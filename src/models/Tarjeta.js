const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarjeta = sequelize.define('Tarjeta', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ListaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Tarjeta;