const { response } = require("express");
const Event = require("../models/Event");

const getEvents = (request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Eventos obtenidos"
  });
};

const createEvent = async (request, res = response) => {

  // Verificar que tenga el evento
  const event = new Event( request.body );

  try {

    // Asignar el uid al user del evento
    event.user = request.uid;

    // Save to database
    const savedEvent = await event.save();

    res.status(200).json({
      ok: true,
      event: savedEvent
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Error, pongase en contacto con el administrador del sistema."
    });

  }

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