const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente, filterByFecha, destroyReserva } = require('../../controllers/reservas.controller');
const { checkFechasReserva } = require('../../middlewares/reservas.middleware');
const { checkUsuarioId, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> feature-middlewares
>>>>>>> 93db7e60de979a20f8db6f2b0b822eb49a26b179
router.get('/', getReservas)
router.get('/usuarios/:usuarioId', checkUsuarioId, filterByCliente)
router.get('/fecha/:fecha_entrada', checkFechasReserva, filterByFecha)
router.get('/:reservaId', checkToken, getReservaById)

<<<<<<< HEAD
module.exports = router

=======
router.post('/', checkToken, createReserva)

router.put('/:reservaId', checkAdmin, updateReserva)

router.delete('/:reservaId', checkToken, destroyReserva)

module.exports = router
>>>>>>> 93db7e60de979a20f8db6f2b0b822eb49a26b179
