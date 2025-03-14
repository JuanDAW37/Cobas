const express = require('express');
const app = express();
const port = 3000;
const os = require("os");
const http = require('http');
const {infoCursos} = require('../controllers/cursos');
const routerProgramacion = require('../routers/programacion.js');
const routerMatematicas = require('../routers/matematicas.js');

app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);


//Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
    res.end();
});

//Ruta para obtener todos los cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
    res.end();
});

//Puerto de escucha, en este caso, por defecto el 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});