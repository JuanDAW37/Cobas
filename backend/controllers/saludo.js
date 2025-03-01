const { time } = require("console");
const saludo = require("./app.js");
const http = require('../server.js');
const url = require('../server.js');
const cursos = require('./cursos.js');

console.log(saludo.saludar("Pepe")); // Hola Pepe
console.log(saludo.saludarHolaMundo()); // Hola Mundo

//Desestructuración de objetos
const {saludar, saludarHolaMundo} = require("./app.js");
console.log(saludarHolaMundo()); // Hola Mundo
console.log(saludar("Pepe")); // Hola Pepe

//console es un módulo de Node.js, por lo que no es necesario instalarlo con npm
console.log("Módulo console de Node.js usando log");
console.error("Módulo console de Node.js usando error");
console.warn("Módulo console de Node.js usando warn");
console.info("Módulo console de Node.js usando info");
console.debug("Módulo console de Node.js usando debug");

//Módulo proccess de Node.js
console.log("CON ENV ",process.env); //Muestra las variables de entorno
console.log("CON ARGV ",process.argv); //Muestra los argumentos de la línea de comandos
console.log("CON PID ",process.pid); //Muestra el PID del proceso
console.log("CON TITLE ",process.title); //Muestra el título del proceso
console.log("CON PLATFORM ",process.platform); //Muestra la plataforma del sistema
console.log("CON VERSION ",process.version); //Muestra la versión de Node.js
console.log("CON MEMORY USAGE ",process.memoryUsage()); //Muestra el uso de memoria

//Módulo os de Node.js
const os = require("os");//Es necesario importarlo con require
console.log("OS ",os.type()); //Muestra el tipo de SO
console.log("OS ",os.platform()); //Muestra la plataforma del SO
console.log("OS ",os.arch()); //Muestra la arquitectura del SO
console.log("OS ",os.release()); //Muestra la versión del SO
console.log("OS ",os.hostname()); //Muestra el nombre del host
console.log("OS ",os.homedir()); //Muestra el directorio home
console.log("OS ",os.tmpdir()); //Muestra el directorio temporal
console.log("OS ",os.cpus()); //Muestra información de los procesadores
console.log("OS ",os.freemem()); //Muestra la memoria libre
console.log("OS ",os.totalmem()); //Muestra la memoria total
console.log("OS ",os.networkInterfaces()); //Muestra las interfaces de red

//Módulo timer de Node.js
function mostrarTema(tema){
    console.log(`El tema es ${tema}`);
}

setTimeout(mostrarTema, 2000, "Node.js");//Muestra el tema después de 2 segundos
mostrarTema("Node.js");
console.log('Antes de setImmediate()');
setImmediate(mostrarTema,"mostrarTema con setImmediate()");//Con esto se ejecutará el código síncrono que haya antes de la función mostrarTema, e inmediatamente después mostrarTema
console.log('Depués de setImmediate()')

//setInterval(mostrarTema, 2000, 'NodeJs');//La función se ejecuta un número infinito de veces

const servidor = http.http.createServer((req, res) => {
    const metodo = req.method;
    switch(metodo) {
        case 'GET':            
            return manejarSolicitudGet(req, res);               
        case 'POST':
            return manejarSolicitudPost(req, res);            
        case 'PUT':
            return manejarSolicitudPut(req, res);            
        case 'DELETE':
            return manejarSolicitudDelete(req, res);            
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${metodo}`);
        }
});

const PORT = 3000;

function manejarSolicitudGet(req, res){
    const path = req.url;
    if (path === '/'){
        res.statusCode = 200;        
        return res.end('Bienvenido a la página principal');        
    }else if(path === '/cursos'){
        res.statusCode = 200;        
        return res.end(JSON.stringify(cursos.infoCursos));//Convierte los cursos a una cadena de caracteres en formato JSON y lo envía al cliente
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));//Convierte los cursos a una cadena de caracteres en formato JSON y lo envía al cliente
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;        
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));//Convierte los cursos a una cadena de caracteres en formato JSON y lo envía al cliente
    }else{
        res.statusCode = 404;
        return res.end('Página no encontrada');
    }
}

function manejarSolicitudPost(req, res){
    const path = req.url;
    if (path === '/cursos'){
        res.statusCode = 200;                
        return res.end('Se ha creado un nuevo curso');
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        let cuerpoData = '';
        req.on('data', (data) => {//Data es lo que llega del cliente
            cuerpoData += data.toString(); 
        });
        req.on('end', () => {
            console.log(cuerpoData);            
            console.log(typeof(cuerpoData));
            cuerpoData = JSON.parse(cuerpoData);//Convierte la cadena de caracteres en formato JSON a un objeto de JavaScript
            console.log(cuerpoData.titulo);
            console.log(typeof(cuerpoData));            
            return res.end('Nuevo curso de programacion creado');
        });        
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end('Se ha creado un nuevo curso de matemáticas');
    }else{
        res.statusCode = 404;
        return res.end('Página no encontrada');
    }
}

function manejarSolicitudPut(req, res){
    const path = req.url;
    if (path === '/cursos'){
        res.statusCode = 200;
        return res.end('Se ha actualizado un curso');
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('Se ha actualizado un curso de programación');
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end('Se ha actualizado un curso de matemáticas');
    }else{
        res.statusCode = 404;
        return res.end('Página no encontrada');
    }
}

function manejarSolicitudDelete(req, res){
    const path = req.url;
    if (path === '/cursos'){
        res.statusCode = 200;
        return res.end('Se ha eliminado un curso');
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('Se ha eliminado un curso de programación');
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end('Se ha eliminado un curso de matemáticas');
    }else{
        res.statusCode = 404;
        return res.end('Página no encontrada');
    }
}

servidor.listen(PORT, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});


