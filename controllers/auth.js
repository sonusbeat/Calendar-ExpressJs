const { response } = require("express");

const crearUsuario = (request, response = response) => {
  response.json({
    ok: true,
    msg: "register"
  });
};


const loginUsuario = (request, response = response) => {
  response.json({
    ok: true,
    msg: "login"
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