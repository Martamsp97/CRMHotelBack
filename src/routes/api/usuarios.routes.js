const { registro, login, getUsuarioByDni } = require('../../controllers/usuarios.controller');
const { checkBodyUsuario, checkToken } = require('../../middlewares/usuarios.middlewares');

const router = require('express').Router();

<<<<<<< HEAD


router.post('/registro', checkBodyUsuario, registro);
=======
router.post('/registro', registro);
>>>>>>> feature-movidongos
router.post('/login', login)

router.get('/:usDni', getUsuarioByDni);

module.exports = router

