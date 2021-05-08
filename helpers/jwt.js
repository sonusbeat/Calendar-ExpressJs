const jwt = require("jsonwebtoken");

/**
 * Generate a new Json Web token
 * and it will expire in 2 hours
 * @param {String} uid User Id
 * @param {String} name User name
 * @returns {Promise<String>} Token Generated
 */
const generateJWT = ( uid, name ) => {

  return new Promise( ( resolve, reject ) => {

    const payload = { uid, name };

    jwt.sign( payload, process.env.SECRET_JWT_SEED, {

      // Options
      expiresIn: "2h"

    }, ( error, token ) => {

      if( error ) {

        console.log( error );
        reject( "No se pudo generar el token" );

      }

      resolve( token );

    });

  });

};

module.exports = generateJWT;