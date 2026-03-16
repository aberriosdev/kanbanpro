const express = require("express");
const router = express.Router();

const tareasController = require("../controllers/tareas.controller");

router.get("/", tareasController.home);

router.get("/register", tareasController.register);

router.get("/login", tareasController.login);

router.get("/dashboard", tareasController.dashboard);

router.post("/nueva-tarea", tareasController.nuevaTarea);

module.exports = router;