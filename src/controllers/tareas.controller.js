const fs = require("fs");

const home = (req, res) => {
  res.render("home");
};

const register = (req, res) => {
  res.render("register");
};

const login = (req, res) => {
  res.render("login");
};

const dashboard = (req, res) => {
  const data = fs.readFileSync("data.json", "utf8");
  const dataObject = JSON.parse(data);
  res.render("dashboard", dataObject);
};

const nuevaTarea = (req, res) => {
  const nuevaTarea = req.body.titulo;
  const data = fs.readFileSync("data.json", "utf8");
  const dataObject = JSON.parse(data);
  dataObject.tareas.push({ titulo: nuevaTarea });
  fs.writeFileSync("data.json", JSON.stringify(dataObject, null, 2));
  res.redirect("/dashboard");
};

module.exports = {
  home,
  register,
  login,
  dashboard,
  nuevaTarea
};