const { getAll, create, getById, update, destroy } = require('../../controllers/habitacion.controller');

const router = require('express').Router();

router.get('/', getAll);

router.get('/:roomId', getById);

router.post('/', create);

router.put('/:roomId', update);

router.delete('/:roomId', destroy);




module.exports = router;
