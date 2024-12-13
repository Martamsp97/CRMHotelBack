const { registro, login, getUsuarioByDni } = require('../../controllers/usuarios.controller');
const { checkBodyUsuario, checkToken } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

router.post('/registro', checkBodyUsuario, registro);
router.post('/login', login)
router.get('/:usDni', getUsuarioByDni);

module.exports = router

