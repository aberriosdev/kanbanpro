const { Tablero } = require("../models");

const obtenerTableros = async (req, res) => {
  try {
    const tableros = await Tablero.findAll();
    res.json(tableros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearTablero = async (req, res) => {
  try {
    const { titulo } = req.body;
    const nuevoTablero = await Tablero.create({
      titulo,
      UsuarioId: req.user.id
    });
    res.status(201).json(nuevoTablero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarTablero = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo } = req.body;
    const tablero = await Tablero.findByPk(id);
    if (!tablero) {
      return res.status(404).json({ error: "Tablero no encontrado" });
    }
    tablero.titulo = titulo;
    await tablero.save();
    res.json(tablero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarTablero = async (req, res) => {
  try {
    const { id } = req.params;
    const tablero = await Tablero.findByPk(id);
    if (!tablero) {
      return res.status(404).json({ error: "Tablero no encontrado" });
    }
    await tablero.destroy();
    res.json({ mensaje: "Tablero eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerTableros,
  crearTablero,
  actualizarTablero,
  eliminarTablero
};