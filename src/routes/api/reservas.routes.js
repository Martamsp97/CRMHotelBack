const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente, filterByFecha, filterByFechaEntradaySalida } = require('../../controllers/reservas.controller');

const router = require('express').Router();


router.get('/', getReservas)
router.get('/:reservaId', getReservaById)
router.get('/usuarios/:usuarioId', filterByCliente)
router.get('/fecha/:fecha_entrada', filterByFecha)
router.get('/fecha/:fecha_entrada/:fecha_salida', filterByFechaEntradaySalida)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)


module.exports = router

