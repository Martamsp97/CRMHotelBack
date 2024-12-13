<<<<<<< HEAD
const { DataTypes, HasMany } = require("sequelize");
const sequelize = require("../config/db");
const { Reserva } = require("./reservas.model");
const Usuario = require("./usuarios.model");
=======
const { DataTypes, HasMany } = require('sequelize');
const sequelize = require('../config/db');
/* const { Reserva } = require('./reservas.model');
const Usuario = require('./usuarios.model'); */
>>>>>>> develop

const Habitacion = sequelize.define(
  "habitaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    piso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    puerta: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    mascotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    num_camas: {
      type: DataTypes.STRING(45),
      allownull: false,
    },
    categoria: {
      type: DataTypes.STRING(45),
      allownull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    tamanho: {
      type: DataTypes.STRING(45),
      allownull: true,
    },
    vista: {
      type: DataTypes.STRING(45),
      allownull: false,
    },
    cocina: {
      type: DataTypes.STRING(45),
      allownull: false,
    },
  },
  {
    sequelize,
    tableName: "habitaciones",
    timestamps: false,
  }
);

/* Habitacion.belongsToMany(Reserva, { through: 'HabitacionReservas', foreignKey: 'habitacion_id' });
Reserva.belongsToMany(Habitacion, { through: 'HabitacionReservas', foreignKey: 'reserva_id' }); */

module.exports = Habitacion;
