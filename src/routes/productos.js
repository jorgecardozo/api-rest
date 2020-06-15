const express = require('express');
const router = express.Router();

const mongooseConnetion = require('../database');

const Producto = require('../../models/producto');
router.get('/producto',(request,response) => {
    response.send(200, {producto:[]});
});

router.get('/producto/:id',(request,response) => {
    
});

router.post('/producto',(request,response) => {
    console.log(request.body);
    let producto = new Producto();

    producto.nombre = request.body.nombre;
    producto.img = request.body.img;
    producto.precio = request.body.precio;
    producto.categoria = request.body.categoria;
    producto.descripcion = request.body.descripcion;
    producto.save((err,productoStored) => {
        if(err)
           response.status(500).send({message: `Error al guardar en la BD: ${err}`}); 
       
        response.status(200).send({product: productoStored}); 
    });

});

router.put('/producto/:id',(request,response) => {
    
});

router.delete('/producto/:id',(request,response) => {
    
});

module.exports = router;