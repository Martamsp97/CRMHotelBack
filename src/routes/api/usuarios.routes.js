const { registro, login } = require('../../controllers/usuarios.controller');
const { checkBodyUsuario, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

<<<<<<< HEAD

router.post('/registro', registro);
router.post('/login', login)
=======
router.post('/registro', checkBodyUsuario, registro);
router.post('/login', checkToken, login)
>>>>>>> feature-middlewares

module.exports = router


