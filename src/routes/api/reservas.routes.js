const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente } = require('../../controllers/reservas.controller');

const router = require('express').Router();

<<<<<<< HEAD
router.get('/', getReservas)
router.get('/:reservaId', getReservaById)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)


=======
>>>>>>> feature-controlleruser
module.exports = router