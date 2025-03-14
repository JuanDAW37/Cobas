const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../controllers/cursos.js').infoCursos;
//Middelware
//Permite trabajar con formato json en el cuerpo de la solicitud para cualquier ruta de programación
//Si no se coloca, no se podrá enviar un curso en el body de la solicitud
//Se debe colocar antes de las rutas que lo necesiten
//Si se coloca en el index.js, se aplicará a todas las rutas
//Las funciones Middleware se ejecutan después de recibir una solicitud y antes de enviar una respuesta
//Tienen acceso al objeto de solicitud (req), al objeto de respuesta (res)
// y a la siguiente función middleware en el ciclo de solicitud/respuesta de la aplicación, que se realiza con next()
routerProgramacion.use(express.json()); 

//Ruta para obtener los cursos de programación
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
    res.end();
});

//Ruta para obtener un curso específico de programación
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje);
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
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje && curso.nivel == nivel);
    if(resultados.length > 0){
        res.status(200).send(JSON.stringify(resultados));
    }else{
        res.status(404).send(`No se encontraron cursos de ${lenguaje} con nivel ${nivel}`);
    }
    res.end();
});

//Ruta para agregar un curso de programación
routerProgramacion.post('/', (req, res) => {
    //Recupero el curso del body
    let curso = req.body;
    programacion.push(curso);
    //Se puede obviar el uso de JSON.stringify
    res.status(201).send(curso); 
});

//Ruta para modificar un curso de programación
routerProgramacion.put('/:id', (req, res) => {
    let id = req.params.id;
    let curso = req.body;
    let index = programacion.findIndex(curso => curso.id == id);
    if(index != -1){
        programacion[index] = curso;
        //Aquí obviaría el uso de JSON.stringify usando json en send
        res.status(204).json(curso);
    }else{
        res.status(404).send(`No se encontró el curso con id ${id}`);
    }
});

//Ruta para modificar parcialmente un curso de programación
routerProgramacion.patch('/:id', (req, res)=>{
    const id= req.params.id;
    const infoActualizada = req.body;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {
        const cursoAModificar = programacion[indice];
        //Se modifican sólo algunas propiedades del objeto usando Object.assign
        Object.assign(cursoAModificar, infoActualizada);
        res.status(204).send(JSON.stringify(programacion));
    }else{
        res.status(404).send(`No se encontró el curso con id ${id}`);
    }    
});

//Ruta para eliminar un curso de programación
routerProgramacion.delete('/:id', (req, res) => {
    let id = req.params.id;
    let index = programacion.findIndex(curso => curso.id == id);
    if (index >= 0) {
        programacion.splice(index, 1);
        res.status(204).send(JSON.stringify(programacion));
    }else{
        res.status(404).send(`No se encontró el curso con id ${id}`);
    }
})

module.exports = routerProgramacion;