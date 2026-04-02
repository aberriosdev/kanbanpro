require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const tareasRoutes = require("./src/routes/tareas.routes");
const apiRoutes = require("./src/routes/api.routes");

const { sequelize } = require("./src/models");

const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/", tareasRoutes);
app.use("/api", apiRoutes);

sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});