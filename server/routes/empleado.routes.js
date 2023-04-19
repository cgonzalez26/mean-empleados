const express = require('express');
//Objeto de rutas
const router = express.Router();
//Controller de Objeto de datos
const empleadoCtrl = require('../controllers/empleado.controller');


//get all
/*router.get('/', (req, res) =>{
    //res.send('hola'); ok
    //Aqui vamos a llamar los Metodos definidos en los Controllers
    res.json(
        {
            status: 'Hola nuevo'
        }); //Esto devuelve un Objeto Javascript  
 });*/

 //get todos
router.get('/', empleadoCtrl.getEmpleados);

//Guardar datos de Empleados->post:Agregar
router.post('/',empleadoCtrl.addEmpleado);

//get un Empleado
router.get('/:id', empleadoCtrl.getEmpleado);

//Actualizar un Empleado->put: permite actualizar
router.put('/:id',empleadoCtrl.updateEmpleado);

//Elimiar un Empleado
router.delete('/:id',empleadoCtrl.deleteEmpleado);

//exporamos el Objeto
module.exports = router;