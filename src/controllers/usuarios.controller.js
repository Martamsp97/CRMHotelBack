const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios.model');
const createToken = require('../../utils/helpers');



const registro = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const usuario = await Usuario.findOne({ where: { email: email } });
        console.log(usuario)
        if (!usuario) {
            res.status(403).json({ message: "Error en el email y/o en la contraseña" })
        }
        const passwordsIguales = await bcrypt.compare(password, usuario.password);
        if (!passwordsIguales) {
            res.status(403).json({ message: "Error en el email y/o en la contraseña" })
        }
        res.json({ message: "¡Login correcto", token: createToken(usuario) })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    registro, login
}
