const express = require('express');
const app = express();
const port = 3000;
const os = require("os");
const http = require('http');
const {infoCursos} = require('../controllers/cursos');

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

//Ruta para obtener los cursos de programación
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
    res.end();
});

//Ruta para obtener un curso específico de programación
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje == lenguaje);
    if(resultados.length > 0){        
        // Parámetros query, en este caso el parámetro ordenar
        console.log(req.query.vistas);
        if(req.query.ordenar == 'vistas'){
            res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));   
        }else{
            res.status(200).send(JSON.stringify(resultados));
        }
    }else{
        res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    res.end();
});

//Ruta para obtener un curso específico de programación con 2 parámetros
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje == lenguaje && curso.nivel == nivel);
    if(resultados.length > 0){
        res.status(200).send(JSON.stringify(resultados));
    }else{
        res.status(404).send(`No se encontraron cursos de ${lenguaje} con nivel ${nivel}`);
    }
    res.end();
});

//Ruta para obtener los cursos de matemáticas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
    res.end();
});

//Ruta para obtener un curso específico de programación
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema == tema);
    if(resultados.length > 0){
        res.status(200).send(JSON.stringify(resultados));
    }else{
        res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.end();
});

//Puerto de escucha, en este caso, por defecto el 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});