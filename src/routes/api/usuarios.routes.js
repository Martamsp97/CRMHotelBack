const { registro, login } = require('../../controllers/usuarios.controller');

const router = require('express').Router();

<<<<<<< HEAD
=======
router.post('/registro', registro);
router.post('/login', login)

>>>>>>> feature-controlleruser
module.exports = router