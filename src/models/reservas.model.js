const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Usuario = require('../models/usuarios.model')

const Reserva = sequelize.define('Reserva', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    fecha_entrada: {
        allowNull: false,
        type: DataTypes.DATE
    },
    fecha_salida: {
        allowNull: false,
        type: DataTypes.DATE
    },
    puntuacion: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    num_personas: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    regimen: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    tipo_cancelacion: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    aparcamiento: {
        allowNull: true,
        type: DataTypes.STRING(45)
    },
    desayuno: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    spa: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    gimnasio: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    piscina: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    precio: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    metodo_pago: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING(45)
    },
    usuarios_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}
    , {
        sequelize, tableName: 'reservas', timestamps: false
    })

Usuario.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarios_id' })

module.exports = Reserva