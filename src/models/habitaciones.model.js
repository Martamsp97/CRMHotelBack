const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

const Habitacion = sequelize.define('habitaciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    piso: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    puerta: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true
    },
    mascotas: {
        type: DataTypes.TINYINT,
        allowNull: false
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
        type: DataTypes.STRING(45),
        allownull: false,
    },
    tamanho: {
        type: DataTypes.STRING(45),
        allownull: true,
    },
    ubicacion: {
        type: DataTypes.ENUM('ext', 'int'),
        allownull: false
    },
    cocina: {
        type: DataTypes.TINYINT,
        allownull: false
    }
}, {
    sequelize, tableName: 'habitaciones', timestamps: false
});

module.exports = Habitaciones;