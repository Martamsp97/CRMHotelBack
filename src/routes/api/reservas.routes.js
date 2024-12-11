const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente, filterByFecha } = require('../../controllers/reservas.controller');

const router = require('express').Router();


<<<<<<< HEAD


=======
>>>>>>> c744a92cee970131f42c1d289a1ff6faaa2e3815
router.get('/', getReservas)
router.get('/:reservaId', getReservaById)
router.get('/usuarios/:usuarioId', filterByCliente)
router.get('/fecha/:fecha_entrada', filterByFecha)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)


module.exports = router

