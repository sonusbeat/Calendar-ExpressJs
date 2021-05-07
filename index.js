const express = require("express");
require("dotenv").config();

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static("public") );

// Rutas
// app.get("/", ( request, response ) => {
//   console.log("Se requiere el slash");
//   response.json({
//     ok: true
//   });
// });

// Escuchar Peticiones
app.listen( process.env.PORT, () => {
  console.log(`Server running on port: ${ process.env.PORT }`);
});