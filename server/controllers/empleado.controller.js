//Definimos Metodos que pueden ser usadas en las rutas
const express = require('express');
//get Empleado model
const Empleado = require('../models/empleado');
//creamos un objeto Controller
const empleadoCtrl = {};

//Metodos
empleadoCtrl.getEmpleados = async (req, res) =>{
    //Esta funcion lleva tiempo, entonces 2 formas de trabajar con consultas a la BD
    //1-los callbaks
    //2-las promesas - mas modernas ->mas nuevo son: asyn await    
        /*Empleado.find()
            .then()
            .catch()*/
    const empleados = await Empleado.find();
    //enviar al Navegador    
    res.json(empleados);
    /*res.json(
        {
            status: 'Lista de empleados'
        }); */
}

empleadoCtrl.addEmpleado = async (req, res) =>{
    //console.log(req.body);
    //guardar el Parametro recibido
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        status: 'Empleado guardado'
    }); 
}

empleadoCtrl.getEmpleado = async (req, res) =>{
    //req.params.id ->parametro enviado por url
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado); 
}

empleadoCtrl.updateEmpleado = async (req, res) =>{
    const { id } = req.params; 
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        posicion: req.body.posicion,
        salario: req.body.salario
    };   
    //console.log('para update ',req.body,'object',empleado);
    
    //especificar que quiero actualizar {$set: }
    //sino existe especificamos que lo cree: new :true
    await Empleado.findByIdAndUpdate(id, {$set: empleado},{
        new: true
    });
    res.json(
        {
            status: 'Empleado actualizado'
        }); 

}

empleadoCtrl.deleteEmpleado = async (req, res) =>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json(
        {
            status: 'Empleado borrado'
        }); 

}

module.exports = empleadoCtrl;