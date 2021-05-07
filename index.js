const express = require("express");

// Crear el servidor de express
const app = express();

// Rutas
app.get("/", ( request, response ) => {
  console.log("Se requiere el slash");
  response.json({
    ok: true
  });
});

// Escuchar Peticiones
app.listen( 8000, () => {
  console.log(`Server running on port: ${ 8000 }`);
});