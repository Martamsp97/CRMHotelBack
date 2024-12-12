const { registro, login } = require('../../controllers/usuarios.controller');
const { checkBodyUsuario, checkToken, checkAdmin } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

router.post('/registro', checkBodyUsuario, registro);
router.post('/login', checkToken, login)

module.exports = router

