const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "public/images" });

<<<<<<< HEAD
const {
  create,
  getById,
  update,
  destroy,
  getHabByPiso,
  getAll,
  deleteImagen,
  createImagen
} = require("../../controllers/habitacion.controller");
=======
const multer = require('multer');
const upload = multer({ dest: 'public/images' });


const { getAll, create, getById, update, destroy, getHabByPiso, getHabByCategoria, getHabByVista, createImagen, getHabByFecha } = require("../../controllers/habitacion.controller");

>>>>>>> feature-reservas
const { checkHabId } = require("../../middlewares/habitaciones.middleware");
const {
  checkAdmin,
  checkToken,
} = require("../../middlewares/usuarios.middlewares");

router.get("/", getAll);
<<<<<<< HEAD
=======
router.get('/piso/:piso', getHabByPiso);
router.get('/categoria/:categoria', getHabByCategoria);
router.get('/vista/:vista', getHabByVista);
router.get('/:roomId', checkHabId, getById);
router.get('/busqueda/:fecha_entrada/:fecha_salida', getHabByFecha);
>>>>>>> feature-reservas

router.get("/piso/:piso", getHabByPiso);

router.get("/:roomId", checkHabId, getById);

router.post("/", checkToken, checkAdmin, create);
router.post('/imagenes/:roomId', checkToken, checkAdmin, checkHabId, upload.single("imagen"), createImagen);

router.delete("/imagen/:imagenId", checkToken, checkAdmin, deleteImagen);

router.put("/:roomId", checkToken, checkAdmin, checkHabId, update);

router.delete("/:roomId", checkToken, checkAdmin, checkHabId, destroy);



module.exports = router;
