const { response } = require("express");
const User = require("../models/User");

const crearUsuario = async (request, res = response) => {
  // const { name, email, password } = request.body;

  try {
    // Crear una instancia nueva
    const user = new User( request.body );

    // Guardar usuario en la base de datos
    await user.save();

    // Si no hay errores proceder con el registro
    res.status(201).json({
      ok: true,
      msg: "Usuario creado",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "No se pudo crear el usuario."
    });
  }
};

const loginUsuario = (request, res = response) => {
  const { email, password } = request.body;

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