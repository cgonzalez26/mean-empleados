// configuracion de la DB
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-empleados';

//then es una promesa para ver cuando se conecta
mongoose.connect(URI)
    .then(db => {
        console.log('DB is conect');
    });

module.exports = moongose;