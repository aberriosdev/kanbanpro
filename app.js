const express = require("express");
const hbs = require("hbs");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));        


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});


app.get("/dashboard", (req, res) => {
  const data = fs.readFileSync("data.json", "utf8");
  const dataObject = JSON.parse(data);
  res.render("dashboard", dataObject);
});

app.post("/nueva-tarea", (req, res) => {
  const nuevaTarea = req.body.titulo;

  const data = fs.readFileSync("data.json", "utf8");
  const dataObject = JSON.parse(data);
 
  dataObject.tareas.push({ titulo: nuevaTarea });
 
  fs.writeFileSync("data.json", JSON.stringify(dataObject, null, 2));
  res.redirect("/dashboard");
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});