var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
//Modulos imagenes
const body_parser = require("body-parser");
const cors = require("cors");


mongoose.connect('mongodb+srv://pablo:pablo2018@practica1-nuvxo.mongodb.net/Examen?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); //Habilito carpeta public
app.use('/registrarTareas', require('./api/registrarTareas')); //Creo servicio
app.listen(8090, function () {
    console.log("Servidor corriendo en puerto 8090");
});