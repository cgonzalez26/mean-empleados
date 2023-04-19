const mongoose = require('mongoose');
//Definidmos el Esquema de Datos para Mongodb
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    posicion: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
});

//Pasamos el Esquema a un modelo de Datos Mongo
//Exportamos el modelo
module.exports = mongoose.model('Empleado', EmpleadoSchema);