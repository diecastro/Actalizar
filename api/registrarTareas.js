var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const app = express();
app.use(express.json());



//Creacion del servicio
var tarea = require('../schemas/registrarTarea');
router.post('/insertarTareas', function (req, res) {
  const { entregaTarea, descripcionTarea, prioridadTarea, nombre, encargadoTarea } = req.body;

  var tareaNueva = new tarea({
    _id: new mongoose.Types.ObjectId(),
    entregaTarea: new Date(entregaTarea),
    nombre: nombre,
    descripcionTarea: descripcionTarea,
    prioridadTarea: prioridadTarea,
    encargadoTarea: encargadoTarea
  });

  tareaNueva.save()
    .then(function (result) {
      res.json(result);
    })
    .catch(function (error) {
      console.log(error);
    })
});




//Extraer base de datos a html
router.get("/mostrarTareas", function (req, res) {
  tarea.find().exec()
      .then(function (result) {
          res.json(result);
      })

      .catch(function (err) {
          console.log(err);
      });
});


//ACTUALIZAR
router.put("/actualizar/:nombre", function (req, res) {
  var nombre = req.params.nombre;

  var tareaPorActualizar = tarea.findOneAndUpdate({nombre:nombre},{ nombre: Math.random() }).exec();
  tareaPorActualizar.then(function (doc) {
    res.json(doc)
  }).catch(function(err){
    res.reject(err)
  });
});




module.exports = router;
