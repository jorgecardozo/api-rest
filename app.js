const express = require('express');
const app = express();
var bodyParser = require('body-parser');

//Middleware, funciones que se ejecutan antes de las rutas
app.use(bodyParser.urlencoded({ extended: true })); // para que me acepte los parametros BODY por POSTMAN
app.use(express.json());

//Routes
app.use(require('./src/routes/productos'));

module.exports = app;