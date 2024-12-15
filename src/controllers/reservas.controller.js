const { Reserva } = require('../models/reservas.model')
const Usuario = require('../models/usuarios.model')
const { Op } = require('sequelize')

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

const updateReserva = async (req, res, next) => {
    const { reservaId } = req.params
    try {
        const reserva = await Reserva.findByPk(reservaId)
        reserva.update(req.body)
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}

const createReserva = async (req, res, next) => {
    console.log(req.body)
    try {
        const reserva = await Reserva.create(req.body)
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}

const filterByCliente = async (req, res, next) => {
    try {
        const { clienteId } = req.params
        const reserva = await Reserva.findAll({
            where: {
                clienteId
            }
        })
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}

const filterByFecha = async (req, res, next) => {
    try {
        const { fecha_entrada } = req.params
        const reserva = await Reserva.findAll({
            where: {
                fecha_entrada
            }
        })
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}

const destroyReserva = async (req, res, next) => {
    const { reservaId } = req.params
    try {
        const reserva = await Reserva.findByPk(reservaId)
        reserva.destroy()
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}


const filterByFechaEntradaySalida = async (req, res, next) => {
    try {
        const { fecha_entrada, fecha_salida } = req.params
        const reserva = await Reserva.findAll({
            where: {
                fecha_entrada: {
                    [Op.gte]: fecha_entrada
                },
                fecha_salida: {
                    [Op.lte]: fecha_salida
                }
            }
        })
        res.json(reserva)
    } catch (error) {
        next(error)
    }
}

const filterByDni = async (req, res, next) => {
    try {

        const { usuarioDni } = req.params;
        const reservas = await Reserva.findAll({
            include: [
                {
                    model: Usuario, //union con el modelo de usuario
                    as: 'usuario', // alias usado en la union del model
                    where:
                        { dni: usuarioDni }, // comparamos el campo de la tabla usuarios con lo que le pasamos por params

                    attributes: [],
                },
            ],
        });

        res.json(reservas);
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getReservas,
    getReservaById,
    updateReserva,
    createReserva,
    filterByCliente,
    filterByFecha,
    destroyReserva,
    filterByFechaEntradaySalida,
    filterByDni
}