// Traer el modelo creado
const Habitacion = require("../models/habitaciones.model");

// Funciones para las rutas de pacientes
const getAll = async (req, res, next) => {
  try {
    const habitaciones = await Habitacion.findAll();
    res.json(habitaciones);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { roomId } = req.params;
  try {
    const habitacion = await Habitacion.findByPk(roomId);
    res.json(habitacion);
  } catch (error) {
    next(error);
  }
};

const getHabByPiso = async (req, res, next) => {
  const { piso } = req.params;
  try {

    const habitaciones = await Habitacion.findAll({
      where: {
        piso: piso
      }, include: ['reserva_habitaciones']
    });
    res.json(habitaciones);

  } catch (error) {
    next(error);
  }
}

const getHabByCategoria = async (req, res, next) => {
  const { categoria } = req.params;
  try {
    const habitaciones = await Habitacion.findAll({
      where: {
        categoria: categoria
      }
    });
    res.json(habitaciones);
  } catch (error) {
    next(error)
  }
}

const getHabByVista = async (req, res, next) => {
  try {
    const habitaciones = await Habitacion.findAll({
      where: {
        vista: req.params.vista
      }
    });
    res.json(habitaciones);
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const habitacion = await Habitacion.create(req.body);
    res.json(habitacion);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { roomId } = req.params;
  try {
    const habitacion = await Habitacion.findByPk(roomId);
    await habitacion.update(req.body);
    res.json(habitacion);
  } catch (error) {
    next(error);
  }
};

//Delete

const destroy = async (req, res, next) => {
  const { roomId } = req.params;
  try {
    const habitacion = await Habitacion.findByPk(roomId);
    await habitacion.destroy();
    res.json(habitacion);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  getHabByPiso,
  getHabByCategoria,
  getHabByVista,
  create,
  update,
  destroy,
};
