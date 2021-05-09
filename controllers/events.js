const { response } = require("express");

const getEvents = (request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Eventos obtenidos"
  });
};

const createEvent = (request, res = response) => {

  // Verificar que tenga el evento
  console.log(request.body);

  res.status(200).json({
    ok: true,
    mgs: "Evento Creado"
  });
};

const updateEvent = (request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Evento Actualizado"
  })
};

const deleteEvent = (request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Evento Eliminado"
  })
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}