const { Tarjeta } = require("../models");

const obtenerTarjetas = async (req, res) => {
  try {
    const tarjetas = await Tarjeta.findAll();
    res.json(tarjetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearTarjeta = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const { listaId } = req.params; 

    const nuevaTarjeta = await Tarjeta.create({
      titulo,
      descripcion,
      ListaId: listaId 
    });
    res.status(201).json(nuevaTarjeta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const tarjeta = await Tarjeta.findByPk(id);
    if (!tarjeta) {
      return res.status(404).json({ error: "Tarjeta no encontrada" });
    }
    tarjeta.titulo = titulo;
    tarjeta.descripcion = descripcion;
    await tarjeta.save();
    res.json(tarjeta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    const tarjeta = await Tarjeta.findByPk(id);
    if (!tarjeta) {
      return res.status(404).json({ error: "Tarjeta no encontrada" });
    }
    await tarjeta.destroy();
    res.json({ mensaje: "Tarjeta eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerTarjetas,
  crearTarjeta,
  actualizarTarjeta,
  eliminarTarjeta
};