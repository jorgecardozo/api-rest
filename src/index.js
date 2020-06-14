const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// Serttings
app.set('port', process.env.PORT || 5000);
//Middleware, funciones que se ejecutan antes de las rutas
app.use(bodyParser.urlencoded({ extended: true })); // para que me acepte los parametros BODY por POSTMAN
app.use(express.json());

//Routes
app.use(require('./routes/productos'));

app.listen(app.get('port'), () => {
    console.log("escuchando por el puerto:",app.get('port'));
});
