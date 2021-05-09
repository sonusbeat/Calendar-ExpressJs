/*
  Events Routes

  host + /api/events
*/

const { Router } = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const validateJWT = require("../middlewares/validate-jwt");
const router = Router();

// Todas tienen que esta validadas
router.use( validateJWT );

// Obtener eventos
router.get("/", getEvents);

// Obtener eventos
router.post("/", createEvent);

// Actualizar Evento
router.patch("/:id", updateEvent);

// Borrar Evento
router.delete("/:id", deleteEvent);

module.exports = router;