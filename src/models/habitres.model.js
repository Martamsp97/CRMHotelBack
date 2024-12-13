const sequelize = require('../config/db');

const { DataTypes } = require('sequelize');



const ReservaHabitacion = sequelize.define(
    'reserva_habitaciones',
    {

        reservas_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        habitaciones_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'reserva_habitaciones',
        timestamps: false
    }
)




module.exports = ReservaHabitacion;