const express = require('express');
const router = express.Router();

//const mysqlConnection = require('../database');

router.get('/producto',(request,response) => {
    response.send(200, {producto:[]});
});

router.get('/producto/:id',(request,response) => {
    
});

router.post('/producto',(request,response) => {
    console.log(request.body);
    response.send(200, {message: 'El producto se ha recibido'});
});

router.put('/producto/:id',(request,response) => {
    
});

router.delete('/producto/:id',(request,response) => {
    
});

module.exports = router;