<<<<<<< HEAD
const {
  getAll,
  create,
  getById,
  update,
  destroy,
} = require("../../controllers/habitacion.controller");
=======
const router = require("express").Router();

const multer = require('multer');
const upload = multer({ dest: 'public/images' });


const { getAll, create, getById, update, destroy, getHabByPiso, getHabByCategoria, getHabByVista, createImagen } = require("../../controllers/habitacion.controller");

>>>>>>> c44d5e88c1b323f9d23224d88250656f536510cd
const { checkHabId } = require("../../middlewares/habitaciones.middleware");
const {
  checkAdmin,
  checkToken,
} = require("../../middlewares/usuarios.middlewares");

router.get("/", getAll);
<<<<<<< HEAD

// router.get("/piso/:piso", getHabByPiso);
=======
router.get('/piso/:piso', getHabByPiso);
router.get('/categoria/:categoria', getHabByCategoria);
router.get('/vista/:vista', getHabByVista);
router.get('/:roomId', checkHabId, getById);

router.post('/', checkToken, checkAdmin, create);
router.post('/imagenes/:roomId', checkToken, checkAdmin, checkHabId, upload.single("imagen"), createImagen);

router.put('/:roomId', checkToken, checkAdmin, checkHabId, update);

router.delete('/:roomId', checkToken, checkAdmin, checkHabId, destroy);
>>>>>>> c44d5e88c1b323f9d23224d88250656f536510cd

router.get("/:roomId", checkHabId, getById);

<<<<<<< HEAD
router.post("/", checkToken, checkAdmin, create);

router.put("/:roomId", checkToken, checkAdmin, checkHabId, update);

router.delete("/:roomId", checkToken, checkAdmin, checkHabId, destroy);

router.post("/", create);

router.put("/:roomId", update);

router.delete("/:roomId", destroy);

=======
>>>>>>> c44d5e88c1b323f9d23224d88250656f536510cd
module.exports = router;
