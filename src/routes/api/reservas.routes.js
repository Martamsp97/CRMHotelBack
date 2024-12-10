const { getReservas, getReservaById, createReserva, updateReserva, filterByCliente } = require('../../controllers/reservas.controller');

const router = require('express').Router();

<<<<<<< HEAD
module.exports = router;
=======
<<<<<<< HEAD
router.get('/', getReservas)
router.get('/:reservaId', getReservaById)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)


=======
>>>>>>> feature-controlleruser
module.exports = router
>>>>>>> a1957c907d39840e6c1938c561d7ee26039c3b37
