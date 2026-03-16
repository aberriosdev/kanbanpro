require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const tareasRoutes = require("./src/routes/tareas.routes");

const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));      

app.use("/", tareasRoutes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});