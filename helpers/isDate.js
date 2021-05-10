const moment = require("moment");

/**
 * Validate is the date submited is valid
 * @param {Number} value Date value in milliseconds
 * @returns {Boolean} true or false
 */
const isDate = ( value ) => {

  // Si no hay valor retorna falso
  if ( !value ) return false;

  // Si no es una fecha valida retorta verdadero, caso contrario retorna falso
  return moment( value ).isValid() ? true : false;

}

module.exports = isDate;