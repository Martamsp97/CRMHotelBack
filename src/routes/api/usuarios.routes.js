const { registro, login } = require('../../controllers/usuarios.controller');
const { checkBodyUsuario, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 93db7e60de979a20f8db6f2b0b822eb49a26b179
router.post('/registro', registro);
router.post('/login', login)
=======
router.post('/registro', checkBodyUsuario, registro);
router.post('/login', checkToken, login)
>>>>>>> feature-middlewares

module.exports = router
<<<<<<< HEAD
=======


>>>>>>> 93db7e60de979a20f8db6f2b0b822eb49a26b179
