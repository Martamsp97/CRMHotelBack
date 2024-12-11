const { getAll, create, getById, update, destroy } = require('../../controllers/habitacion.controller');

const router = require('express').Router();

router.get('/', getAll);

router.get('/:roomId', getById);

router.post('/', create);

router.put('/:roomId', update);

router.delete('/:roomId', destroy);




module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> c744a92cee970131f42c1d289a1ff6faaa2e3815
