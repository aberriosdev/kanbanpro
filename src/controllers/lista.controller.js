const { Lista } = require("../models");

const obtenerListas = async (req, res) => {
    try {
        const listas = await Lista.findAll();
        res.json(listas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearLista = async (req, res) => {
    try {
        const { titulo } = req.body;
        const { tableroId } = req.params; 

        const nuevaLista = await Lista.create({
            titulo,
            TableroId: tableroId 
        });
        res.status(201).json(nuevaLista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarLista = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo } = req.body;
        const lista = await Lista.findByPk(id);
        if (!lista) {
            return res.status(404).json({ error: "Lista no encontrada" });
        }
        lista.titulo = titulo;
        await lista.save();
        res.json(lista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarLista = async (req, res) => {
    try {
        const { id } = req.params;
        const lista = await Lista.findByPk(id);
        if (!lista) {
            return res.status(404).json({ error: "Lista no encontrada" });
        }
        await lista.destroy();
        res.json({ mensaje: "Lista eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    obtenerListas,
    crearLista,
    actualizarLista,
    eliminarLista
};