const express = require('express');
const routerMatematicas = express.Router();
const {matematicas} = require('../controllers/cursos.js').infoCursos;

//Ruta para obtener los cursos de matemáticas
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
    res.end();
});

//Ruta para obtener un curso específico de matemáticas
routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema == tema);
    if(resultados.length > 0){
        res.status(200).send(JSON.stringify(resultados));
    }else{
        res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.end();
});

module.exports = routerMatematicas;