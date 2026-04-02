const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const tableroRoutes = require("./tablero.routes");
const listaRoutes = require("./lista.routes");
const tarjetaRoutes = require("./tarjeta.routes");

router.use("/auth", authRoutes);
router.use("/tableros", tableroRoutes);
router.use("/tableros/:tableroId/listas", listaRoutes);
router.use("/listas/:listaId/tarjetas", tarjetaRoutes);

module.exports = router;