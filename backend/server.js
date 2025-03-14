const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

//Puerto de escucha, en este caso, por defecto el 3000
const PUERTO = process.env.PORT || port;

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});

module.exports = {
    http: http,
    url: url
}