const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

// Sirve para renomrar las propiedad del objeto del modelo
EventSchema.method("toJSON", function() {

  // Se destructura la version __v, el _id y el resto de propiedades del objeto.
  const { __v, _id, ...object } = this.toObject();

  // Se rescribe como queremos que se llame el id
  object.id = _id;

  // Se retorna el objeto sin __v por que no lo necesitamos
  return object;

});

module.exports = model("Event", EventSchema);