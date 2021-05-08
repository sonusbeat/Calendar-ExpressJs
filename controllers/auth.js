const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const crearUsuario = async (request, res = response) => {
  const { email, password } = request.body;

  try {

    // Buscar un usuario con el siguiente email
    let user = await User.findOne({ email: email });

    // Si existe el usuario retorna un mensaje de error.
    if ( user ) {
      return res.status(400).json({
        ok: false,
        msg: `Un usuario ya utilizó <${ email }>, ¡ Elija otro !`,
      });
    }

    // Crear una instancia nueva y rescribir la variable user
    user = new User( request.body );

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync(); // <-- Crear el salt con 10 iteraciones de seguridad
    user.password = bcrypt.hashSync( password, salt ); // <-- Se almacena la contraseña de la instancia

    // Guardar usuario en la base de datos
    await user.save();

    // Si no hay errores proceder con el registro
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
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