const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios.model')



const registro = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const usuarioId = await Usuario.create()
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}


module.exports = {
    registro, login
}
