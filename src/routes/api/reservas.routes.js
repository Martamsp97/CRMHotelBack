const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente, filterByFecha, destroyReserva } = require('../../controllers/reservas.controller');
const { checkFechasReserva } = require('../../middlewares/reservas.middleware');
const { checkUsuarioId, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

<<<<<<< HEAD
=======



>>>>>>> feature-middlewares
router.get('/', getReservas)
router.get('/usuarios/:usuarioId', checkUsuarioId, filterByCliente)
router.get('/fecha/:fecha_entrada', checkFechasReserva, filterByFecha)
router.get('/:reservaId', checkToken, getReservaById)

router.post('/', checkToken, createReserva)

router.put('/:reservaId', checkAdmin, updateReserva)

router.delete('/:reservaId', checkToken, destroyReserva)

module.exports = router
