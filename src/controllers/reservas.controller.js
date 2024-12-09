const Reserva = require('../models/reservas.model')

const getReservas = async (req, res, next) => {
    try {
        const reservas = await Reserva.findAll()
        res.json(reservas)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getReservas
}