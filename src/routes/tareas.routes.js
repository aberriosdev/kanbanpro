const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas.controller");
const authMiddleware = require("../middleware/auth.middleware"); 

router.get("/", tareasController.home);
router.get("/register", tareasController.register);
router.get("/login", tareasController.login);
router.get("/dashboard", tareasController.dashboard);

router.post("/nueva-tarea", tareasController.nuevaTarea); 
router.post("/nueva-lista", tareasController.nuevaLista); 
router.post("/nueva-tarjeta", tareasController.nuevaTarjeta); 
router.post("/editar-tarjeta/:id", tareasController.editarTarjeta);
router.post("/eliminar-tarjeta/:id", tareasController.eliminarTarjeta);

router.get("/api/tableros", authMiddleware, tareasController.getTablerosApi);
router.post("/api/tableros/:tableroId/listas", authMiddleware, tareasController.nuevaListaApi);
router.delete("/api/tarjetas/:id", authMiddleware, tareasController.eliminarTarjetaApi);

module.exports = router;