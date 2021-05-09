/*
  Events Routes

  host + /api/events
*/

const { Router } = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const isDate = require("../helpers/isDate");
const validateJWT = require("../middlewares/validate-jwt");
const router = Router();

// Todas tienen que esta validadas
router.use( validateJWT );

// Obtener eventos
router.get("/", getEvents);

// Obtener eventos
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria ó es inválida").custom( isDate ),
    check("end",   "La fecha final es obligatoria ó es inválida").custom( isDate ),
    validateFields
  ],
  createEvent
);

// Actualizar Evento
router.patch("/:id", updateEvent);

// Borrar Evento
router.delete("/:id", deleteEvent);

module.exports = router;