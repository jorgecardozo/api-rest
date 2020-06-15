const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    nombre: String,
    img: String,
    precio: {type: Number, default: 0},
    categoria: {type: String, enum: ['computadoras','telefonos','accesorios']},
    descripcion: String
});

module.exports = mongoose.model('Producto',ProductoSchema);