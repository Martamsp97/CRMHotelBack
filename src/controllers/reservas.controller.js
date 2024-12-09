const Reserva = require('../models/reservas.model')

const getReservas = async (req, res, next) => {
    try {
        const reservas = await Reserva.findAll()
        res.json(reservas)
    } catch (error) {
        next(error)
    }
}

const getReservaById = async (req, res, next) => {
    const { reservaId } = req.params
    try {
        const reserva = await Reserva.findByPk(reservaId)
        if (!reserva) {
            return res.status(404).json({ message: 'La reserva no existe' })
        }
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getReservas,
    getReservaById
}