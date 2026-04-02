const express = require("express");
const router = express.Router({ mergeParams: true });

const tarjetaController = require("../controllers/tarjeta.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, tarjetaController.crearTarjeta);
router.get("/", authMiddleware, tarjetaController.obtenerTarjetas);
router.put("/:id", authMiddleware, tarjetaController.actualizarTarjeta);
router.delete("/:id", authMiddleware, tarjetaController.eliminarTarjeta);

module.exports = router;