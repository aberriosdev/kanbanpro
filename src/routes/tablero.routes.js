const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const tablerosController = require("../controllers/tablero.controller");

router.get("/", authMiddleware, tablerosController.obtenerTableros);
router.post("/", authMiddleware, tablerosController.crearTablero);
router.put("/:id", authMiddleware, tablerosController.actualizarTablero);
router.delete("/:id", authMiddleware, tablerosController.eliminarTablero);

module.exports = router;