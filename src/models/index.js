const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Tablero = require('./Tablero');
const Lista = require('./Lista');
const Tarjeta = require('./Tarjeta');

Usuario.hasMany(Tablero, { foreignKey: "UsuarioId" });
Tablero.belongsTo(Usuario, { foreignKey: "UsuarioId" });

Tablero.hasMany(Lista, { foreignKey: "TableroId" });
Lista.belongsTo(Tablero, { foreignKey: "TableroId" });

Lista.hasMany(Tarjeta, { foreignKey: "ListaId" });
Tarjeta.belongsTo(Lista, { foreignKey: "ListaId" });

module.exports = {
    sequelize,
    Usuario,
    Tablero,
    Lista,
    Tarjeta
};