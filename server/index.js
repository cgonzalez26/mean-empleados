const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//puerto de servicio de la nube: process.env.PORT
//npm i nodemon->permite no reiniciar todo el tiempo el server
//npm i nodemon -D-> instala en modo Desarrollo
//npm run ->permite ejecutar la aplicacion

//Middlewares

//Routes

//Start app
app.listen(app.get('port'), () => {
    console.log("Server MEAN en el puerto 3000");
});