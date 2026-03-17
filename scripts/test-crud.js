const { sequelize, Tablero, Lista, Tarjeta } = require("../src/models");

async function testCRUD() {
  try {
    console.log("PRUEBA CRUD INICIADA");

    // READ
    console.log("Leyendo tablero con listas y tarjetas...");
    const tablero = await Tablero.findByPk(1, {
      include: {
        model: Lista,
        include: [Tarjeta]
      }
    });
    console.log(JSON.stringify(tablero.toJSON(), null, 2));

    // CREATE
    console.log("Creando nueva tarjeta...");
    const nuevaTarjeta = await Tarjeta.create({
      titulo: "Nueva tarea CRUD",
      descripcion: "Creada desde test-crud.js",
      ListaId: 1
    });
    console.log("Tarjeta creada:", nuevaTarjeta.toJSON());

    // UPDATE
    console.log("Actualizando tarjeta...");
    nuevaTarjeta.titulo = "Tarea actualizada";
    await nuevaTarjeta.save();
    console.log("Tarjeta actualizada:", nuevaTarjeta.toJSON());

    // DELETE
    console.log("Eliminando tarjeta...");
    await nuevaTarjeta.destroy();
    console.log("Tarjeta eliminada correctamente");

    console.log("PRUEBA CRUD FINALIZADA");
  } catch (error) {
    console.error("Error en test CRUD:", error)
  } finally {
    await sequelize.close();
  }
}

testCRUD();