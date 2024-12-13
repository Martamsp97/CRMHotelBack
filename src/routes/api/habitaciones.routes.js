const { getAll, create, getById, update, destroy } = require('../../controllers/habitacion.controller');
const { checkHabId } = require('../../middlewares/habitaciones.middleware');
const { checkAdmin, checkToken } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

router.get('/', getAll);

router.get('/:roomId', checkHabId, getById);

router.post('/', checkToken, checkAdmin, create);

router.put('/:roomId', checkToken, checkAdmin, checkHabId, update);

router.delete('/:roomId', checkToken, checkAdmin, checkHabId, destroy);




module.exports = router;
