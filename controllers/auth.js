const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (request, res = response) => {
  const { name, email, password } = request.body;

  // Manejo de errores

  const errors = validationResult( request );

  if( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  // Si no hay errores proceder con el registro
  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password
  });
};


const loginUsuario = (request, res = response) => {
  const { email, password } = request.body;

  // Manejo de errores
  const errors = validationResult( request );

  if( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  // Si no hay errores proceder con el login
  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password
  });
};

const revalidarToken = (request, res = response) => {
  res.json({
    ok: true,
    msg: "renew"
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};