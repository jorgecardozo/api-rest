const Producto = require('../models/producto');

function getProducto(request,response){
    let productoId = request.params.id;
    Producto.findById(productoId, (err,producto) => {
        if(err)
            return response.status(500).send({message: `Error al obtener el producto de la BD: ${err}`});   
        if(!producto)
            return response.status(404).send({message: `El producto no existe`});  
        
        return response.status(200).send({producto: producto});
    });
}

function getProductos(request,response){
    Producto.find({}, (err,productos) => {
        if(err)
            return response.status(500).send({message: `Error al obtener el producto de la BD: ${err}`});   
        if(!productos)
            return response.status(404).send({message: `El producto no existe`});  
        
        return response.status(200).send({producto: productos});
    });
}

function updateProducto(request,response){
    let productoId = request.params.id;
    let update = request.body;
    Producto.findByIdAndUpdate(productoId, update, (err,productoUpdate) => {
        if(err)
            return response.status(500).send({message: `Error al obtener el producto de la BD: ${err}`});   
        
            response.status(200).send({product: productoUpdate}); 
    });
}

function deleteProducto(request,response){
    let productoId = request.params.id;
    Producto.findById(productoId, (err,producto) => {
        if(err)
            return response.status(500).send({message: `Error al obtener el producto de la BD: ${err}`});   
        producto.remove(err => {
            if(err)
                response.status(500).send({message: `Error al borra el producto de la BD: ${err}`}); 
            
            response.status(200).send({message: `El producto ha sido eliminado`});
        }); 
    });
}

function seveProducto(request,response){
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
}

module.exports = {
    getProducto,
    getProductos,
    updateProducto,
    deleteProducto,
    seveProducto
}