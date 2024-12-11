const { registro, login } = require('../../controllers/usuarios.controller');

const router = require('express').Router();




router.post('/registro', registro);
router.post('/login', login)

module.exports = router

