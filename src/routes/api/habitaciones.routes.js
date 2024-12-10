const { getAll, create, getById, update, destroy } = require('../../controllers/habitacion.controller');

const router = require('express').Router();

<<<<<<< HEAD
router.get('/', getAll);

router.get('/:roomId', getById );

router.post('/', create);

router.put('/:roomId', update );

router.delete('/:roomId', destroy);




module.exports = router;
=======
module.exports = router
>>>>>>> a1957c907d39840e6c1938c561d7ee26039c3b37
