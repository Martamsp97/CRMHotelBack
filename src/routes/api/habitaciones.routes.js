

const router = require("express").Router();

const { getAll, create, getById, update, destroy, getHabByPiso, getHabByCategoria, getHabByVista } = require("../../controllers/habitacion.controller");

const { checkHabId } = require("../../middlewares/habitaciones.middleware");

const { checkAdmin, checkToken } = require("../../middlewares/usuarios.middlewares");

router.get("/", getAll);
router.get('/piso/:piso', getHabByPiso);
router.get('/categoria/:categoria', getHabByCategoria);
router.get('/vista/:vista', getHabByVista);
router.get('/:roomId', checkHabId, getById);

router.post('/', checkToken, checkAdmin, create);

router.put('/:roomId', checkToken, checkAdmin, checkHabId, update);

router.delete('/:roomId', checkToken, checkAdmin, checkHabId, destroy);


module.exports = router;
