const express = require("express");
const router = express.Router({ mergeParams: true }); 

const listaController = require("../controllers/lista.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, listaController.crearLista);
router.get("/", authMiddleware, listaController.obtenerListas);
router.put("/:id", authMiddleware, listaController.actualizarLista);
router.delete("/:id", authMiddleware, listaController.eliminarLista);

module.exports = router;