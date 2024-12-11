const { registro, login } = require('../../controllers/usuarios.controller');

const router = require('express').Router();

<<<<<<< HEAD



=======
>>>>>>> c744a92cee970131f42c1d289a1ff6faaa2e3815
router.post('/registro', registro);
router.post('/login', login)

module.exports = router

