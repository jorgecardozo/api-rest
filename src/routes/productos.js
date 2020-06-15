const express = require('express');
const router = express.Router();
const mongooseConnetion = require('../database');
const ProductoCtrl = require('../../controllers/producto');
const UserCtrl = require('../../controllers/user');
const auth = require('../../middlewares/auth');

router.get('/producto',ProductoCtrl.getProductos);
router.get('/producto/:id',ProductoCtrl.getProducto);
router.post('/producto',ProductoCtrl.seveProducto);
router.put('/producto/:id',ProductoCtrl.updateProducto);
router.delete('/producto/:id',ProductoCtrl.deleteProducto);
router.post('/signup',UserCtrl.signUp);
router.post('/signin',UserCtrl.signIn);
router.get('/private', auth,function(request, response){
    response.status(200).send({message: `Tienes acceso.`});
})

module.exports = router;