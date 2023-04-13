const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//puerto de servicio de la nube: process.env.PORT
//npm i nodemon->permite no reiniciar todo el tiempo el server
//npm i nodemon -D-> instala en modo Desarrollo
//npm run dev->permite ejecutar la aplicacion
//npm i mongoose-> permite conectar el Server con la BD Mondogdb y modelar los datos

//Middlewares
//Nos permites que el server entiendan las Peticiones
//Morgan nos permite ver por consola que es lo que el Usuarioesta pidiendo
//parametro: dev-> como queremos ver los msjes
app.use(morgan('dev'));
//express.json()->modulo de express que permite que el Server entienda el formato Json
//permite usar request.body
app.use(express.json());

//Routes

//Start app
app.listen(app.get('port'), () => {
    console.log("Server MEAN en el puerto 3000");
});