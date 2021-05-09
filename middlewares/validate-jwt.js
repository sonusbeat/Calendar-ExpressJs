const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = ( req = request, res = response, next ) => {

  // x-token headers
  const token = req.header("x-token");

  // Validar token
  if ( !token ) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición"
    });
  }

  try {

    // Verificar token
    // una vez verificado destructurar el uid y el name
    const { uid, name } = jwt.verify(
      token, // <-- Token enviado por el ui
      process.env.SECRET_JWT_SEED // <-- Frase secreta
    );

    req.uid = uid; // <-- Asignar al request el uid destructurado
    req.name = name; // <-- Asignar al request el name destructurado

  } catch (error) {

    return res.status(401).json({
      ok: false,
      msg: "No estas autorizado para realizar esta acción. Token no válido"
    });

  }

  next();

};

module.exports = validateJWT;