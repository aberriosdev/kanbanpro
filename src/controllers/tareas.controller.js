const { Tablero, Lista, Tarjeta } = require("../models");

const home = (req, res) => res.render("home");
const register = (req, res) => res.render("register");
const login = (req, res) => res.render("login");

const dashboard = async (req, res) => {
  try {
    const tableros = await Tablero.findAll({
      include: [{ model: Lista, include: [Tarjeta] }]
    });
    const tablerosPlain = tableros.map(t => t.get({ plain: true }));
    res.render("dashboard", { tableros: tablerosPlain });
  } catch (error) {
    res.status(500).send("Error al cargar datos");
  }
};

const nuevaTarea = async (req, res) => {
  try {
    await Tablero.create({ titulo: req.body.titulo });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const nuevaLista = async (req, res) => {
  try {
    const { tableroId, titulo } = req.body;
    await Lista.create({ titulo, TableroId: tableroId });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).send("Error al crear lista");
  }
};

const nuevaTarjeta = async (req, res) => {
  try {
    const { listaId, titulo } = req.body;
    await Tarjeta.create({ titulo, ListaId: listaId });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const editarTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarjeta.update({ titulo: req.body.nuevoTitulo }, { where: { id } });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const eliminarTarjeta = async (req, res) => {
  try {
    await Tarjeta.destroy({ where: { id: req.params.id } });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const getTablerosApi = async (req, res) => {
  try {
    const tableros = await Tablero.findAll({
      include: [{ model: Lista, include: [Tarjeta] }]
    });
    res.status(200).json(tableros);
  } catch (error) {
    res.status(500).json({ mensaje: "Error", error: error.message });
  }
};

const nuevaListaApi = async (req, res) => {
  try {
    const { tableroId } = req.params;
    const { titulo } = req.body;
    const lista = await Lista.create({ titulo, TableroId: tableroId });
    res.status(201).json(lista); 
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear lista vía API", error: error.message });
  }
};

const eliminarTarjetaApi = async (req, res) => {
  try {
    const deleted = await Tarjeta.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(204).send(); // 204 = No Content (Éxito en eliminación)
    }
    res.status(404).json({ mensaje: "Tarjeta no encontrada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error", error: error.message });
  }
};

module.exports = {
  home,
  register, 
  login, 
  dashboard,
  nuevaTarea, 
  nuevaLista, 
  nuevaTarjeta, 
  editarTarjeta, 
  eliminarTarjeta,
  getTablerosApi, 
  nuevaListaApi, 
  eliminarTarjetaApi 
};