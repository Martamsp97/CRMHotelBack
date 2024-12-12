const { getAll, create, getById, update, destroy } = require('../../controllers/habitacion.controller');
const { checkHabId } = require('../../middlewares/habitaciones.middleware');
const { checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

router.get('/', getAll);

router.get('/:roomId', checkHabId, getById);

router.post('/', checkAdmin, create);

router.put('/:roomId', checkAdmin, checkHabId, update);

router.delete('/:roomId', checkAdmin, checkHabId, destroy);




module.exports = router;
