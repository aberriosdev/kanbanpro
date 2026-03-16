const { sequelize, Usuario, Tablero, Lista, Tarjeta } = require('../src/models');

async function seed() {

  try {
    await sequelize.sync({ force: true });

    // usuarios
    const usuario1 = await Usuario.create({
      nombre: "Paulina",
      email: "paulina@kanban.com"
    });

    const usuario2 = await Usuario.create({
      nombre: "Bruno",
      email: "Bruno@kanban.com" 
    });

    // tableros
    const tablero1 = await Tablero.create({
      titulo: "Proyecto Kanban",
      UsuarioId: usuario1.id
    });

    const tablero2 = await Tablero.create({
      titulo: "Proyecto Marketing",
      UsuarioId: usuario1.id
    });

    const tablero3 = await Tablero.create({
      titulo: "Proyecto Desarrollo",
      UsuarioId: usuario2.id
    });

    // listas
    const lista1 = await Lista.create({
      titulo: "Pendientes",
      TableroId: tablero1.id
    });

    const lista2 = await Lista.create({
      titulo: "En progreso",
      TableroId: tablero1.id
    });

    // tarjetas
    await Tarjeta.create({
      titulo: "Configurar proyecto",
      descripcion: "Instalar dependencias",
      ListaId: lista1.id
    });

    await Tarjeta.create({
      titulo: "Diseñar base de datos",
      descripcion: "Crear modelos Sequelize",
      ListaId: lista2.id
    });
    console.log("Datos creados correctamente");

  } catch (error) {
    console.error("Error en el seed:", error);
  } finally {
    await sequelize.close();
  }
}

seed();