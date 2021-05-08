const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateJWT = require("../helpers/jwt");

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

    // Generar JWT
    const token = await generateJWT( user.id, user.name );

    // Si no hay errores proceder con el registro
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "No se pudo crear el usuario."
    });

  }
};

const loginUsuario = async (request, res = response) => {
  const { email, password } = request.body;

  try {

    // Buscar el usuario en la base de datos con el email
    const user = await User.findOne({ email });

    if ( !user ) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con el email administrado",
      });
    }

    // Confirmar passwords
    // Comparar el password de base de datos con el administrado por el ui
    const validPassword = bcrypt.compareSync( password, user.password )

    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña no válida"
      });
    }

    // Generar JWT
    const token = await generateJWT( user.id, user.name );

    // Si no hay errores entonces proceder con el login
    res.status(200).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores encontrados, pongase en contacto con el administrador del sistema"
    });
  }
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