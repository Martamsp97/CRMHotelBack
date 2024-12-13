<<<<<<< HEAD
const {
  getAll,
  create,
  getById,
  update,
  destroy,
} = require("../../controllers/habitacion.controller");
const { checkHabId } = require("../../middlewares/habitaciones.middleware");
const {
  checkAdmin,
  checkToken,
} = require("../../middlewares/usuarios.middlewares");
=======
const { getAll, create, getById, update, destroy, getHabByPiso } = require('../../controllers/habitacion.controller');
const { checkHabId } = require('../../middlewares/habitaciones.middleware');
const { checkAdmin, checkToken } = require('../../middlewares/usuarios.middlewares');
>>>>>>> develop

const router = require("express").Router();

router.get("/", getAll);

<<<<<<< HEAD
router.get("/:roomId", getById);
=======
router.get('/piso/:piso', getHabByPiso);

router.get('/:roomId', checkHabId, getById);

router.post('/', checkToken, checkAdmin, create);

router.put('/:roomId', checkToken, checkAdmin, checkHabId, update);

router.delete('/:roomId', checkToken, checkAdmin, checkHabId, destroy);
>>>>>>> develop

router.post("/", create);

router.put("/:roomId", update);

router.delete("/:roomId", destroy);

module.exports = router;
