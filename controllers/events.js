const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async (request, res = response) => {

  // Obtener los eventos
  const events = await Event.find().populate("user", "name");

  res.status(200).json({
    ok: true,
    events
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

const updateEvent = async (request, res = response) => {
  const eventId = request.params.id;
  const uid = request.uid;

  try {
    const event = await Event.findById( eventId );

    // Verficar si existe el evento con id administrado
    if ( !event ) {
      res.status(404).json({
        ok: false,
        msg: "El evento no existe con ese id"
      });
    }

    // Verificar que sea la misma persona que quiere editar el evento
    if(event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No estas autorizado para editar este evento."
      });
    }

    // Crear un objeto con los parametros del body del cliente
    // el uid del usuario
    const newEvent = {
      ...request.body,
      user: uid
    };

    // Actualizar en la base de datos
    // new: true // <-- Nos regresa un nuevo
    const UpdatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    return res.status(200).json({
      ok: true,
      event: UpdatedEvent
    });

  } catch (error) {

    console.log();

    res.status(500).json({
      ok: false,
      msg: "Error, pongase en contacto con el administrador del sistema."
    });

  }
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