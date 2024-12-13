<<<<<<< HEAD
const { DataTypes } = require('sequelize')

const sequelize = require('../config/db')
=======
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { Reserva } = require('./reservas.model');
const Habitacion = require('./habitaciones.model');
>>>>>>> 93db7e60de979a20f8db6f2b0b822eb49a26b179


const Usuario = sequelize.define('Usuario', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER

    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    apellidos: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(9),
        allownull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(45),
        allownull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(200),
        allownull: false
    },
    rol: {
        type: DataTypes.STRING(45),
        allownull: false
    },
    sexo: {
        type: DataTypes.ENUM('MASC', 'FEM'),
        allownull: true
    },
    telefono: {
        type: DataTypes.INTEGER,
        allownull: false
    },
    pais: {
        type: DataTypes.STRING(45),
        allownull: false
    },
    direccion: {
        type: DataTypes.STRING(45),
        allownull: true
    },
    ciudad: {
        type: DataTypes.STRING(45),
        allownull: false
    },
    cod_postal: {
        type: DataTypes.STRING(10),
        allownull: false
    }


}, {
    sequelize, tableName: 'usuarios', timestamps: false
});
Usuario.hasMany(Reserva, { as: 'reservas', foreignKey: 'usuario_id' });
Usuario.hasMany(Habitacion, { as: "habitaciones", foreignKey: 'usuario_id' });

module.exports = Usuario