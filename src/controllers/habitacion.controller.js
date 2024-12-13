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
  create,
  update,
  destroy,
};
