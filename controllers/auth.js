const { response } = require("express");

const crearUsuario = (request, response = response) => {
  const { name, email, password } = request.body;

  if ( name.length < 3 ) {
    return response.status(400).json({
      ok: false,
      msg: "El nombre debe ser mayor a 2 caracteres",
    });
  }

  response.json({
    ok: true,
    msg: "register",
    name,
    email,
    password
  });
};


const loginUsuario = (request, response = response) => {
  const { email, password } = request.body;

  response.json({
    ok: true,
    msg: "login",
    email,
    password
  });
};

const revalidarToken = (request, response = response) => {
  response.json({
    ok: true,
    msg: "renew"
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};