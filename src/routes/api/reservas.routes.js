const { checkFechasReserva } = require('../../middlewares/reservas.middleware');
const { checkUsuarioId, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');
const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente, filterByFecha, filterByFechaEntradaySalida } = require('../../controllers/reservas.controller');

const router = require('express').Router();



router.get('/', getReservas)
router.get('/usuarios/:usuarioId', checkUsuarioId, filterByCliente)
router.get('/fecha/:fecha_entrada', checkFechasReserva, filterByFecha)
router.get('/:reservaId', checkToken, getReservaById)
router.get('/fecha/:fecha_entrada/:fecha_salida', filterByFechaEntradaySalida)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)


router.post('/', checkToken, createReserva)

router.put('/:reservaId', checkToken, checkAdmin, updateReserva)

router.delete('/:reservaId', checkToken, destroyReserva)

module.exports = router

