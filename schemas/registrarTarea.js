var mongoose = require("mongoose");
var tareasSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    entregaTarea: Date,
    nombre: String,
    descripcionTarea: String,
    prioridadTarea: String,
    encargadoTarea: String,
  });
  
  module.exports = mongoose.model( "tareas", tareasSchema,"Tareas");