const fs = require('fs');
const datos = require('./datos.json');
const EventEmitter = require('events');//Clase EventEmmitter

function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "Hola Mundo";
}
//module.exports.saludar = saludar; //Exportación de la función saludar, valdría también module.exports = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo; //Exportación de la función saludarHolaMundo, valdría también module.exports = saludarHolaMundo; 

//Exportar varias funciones a la vez
module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo
}

//Módulo fs, son todos métodos asíncronos

// Leer archivos. El tercer parámetro es un callback quee recibe o un error o el contenido del archivo
fs.readFile('./index.html','utf-8', (err, contenido) => {
    if(err){
        console.log(err)
    }else{
        console.log(contenido)
    }
});

//Cambiar el nombre de un archivo
/*fs.rename('./index.html', './main.html', (err) => {
    if(err){
        console.log(err)
    }
    console.log('Nombre cambiado con éxito!')
});

fs.rename('./main.html', './index.html', (err) => {
    if(err){
        console.log(err)
    }
    console.log('Nombre cambiado con éxito!')
});*/

//Agregar contenido al final del archivo, si el archivo no existe, crea uno nuevo
/*fs.appendFile('./index.html', '<p>Hola</p>', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Archivo creado o actualizado!')
})*/

//Reemplazar todo el contenido del archivo
/*fs.writeFile('./index.html', 'Contenido nuevo', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Contenido reemplazado con éxito!')
})*/

//Eliminar un archivo
/*fs.unlink('./main.html', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Archivo eliminado con éxito!')
})*/

console.log("Título: ", datos.titulo)

//Objeto de JavaScript a JSON
const datosCurso = {
    titulo:"Curso de Node.js",
    numVisitas:5000,
    numLikes:4000,
    temas:["Node.js", "JavaScript"],
    esPublico:true
}
console.log(typeof(datosCurso))
let datosCursoJSON = JSON.stringify(datosCurso);
console.log("Objeto de JavaScript a JSON", datosCursoJSON, typeof(datosCursoJSON));

//Cadena de caracteres en JSON a objeto de JavaScript
let objetoJavaScript = JSON.parse(datosCursoJSON);
console.log("JSON a objeto de JavaScript", objetoJavaScript, typeof(objetoJavaScript));

const emisorProductos = new EventEmitter(); //Se instancia un objeto, emisor de evento, de la clase EventEmitter

//Cuando ocurra una compra, se ejecuta lo de dentro de la función flecha.
// Lo que va dentro de los paréntesis, total, es el parámetro que recibe.
emisorProductos.on('compra', (total, producto) => {
    console.log(`Se realizó una compra por ${total}, de ${producto} productos`)    
});

//Cuando se vende un producto, se emite el evento, en este caso emisorProductos
//Se enví como argumento un importe de 1550
emisorProductos.emit('compra', 1550, 5);

//TODO: P R O M E S A S
const promesaCumplida = false;

//resolve y reject son funciones que se pasan como parámetro (callback)
const miPromesa = new Promise((resolve, reject)=>{
    //Al ser asíncrono, podemos darle un retraso para que espere
    setTimeout(() =>{   
        if (promesaCumplida) {
            resolve('Promesa cumplida')    
        }else{
            reject('Promesa rechazada')    
        }
        
    }, 2000)
});

//Ahora vemos si la promesa fue cumplida o no. Con then manejamos el éxito de la respuesta
//El problema de hacerlo así, es que no podemos controlar en caso de que se dé un error
/*miPromesa.then((valor)=>{
    console.log(valor)
});*/

const cumplida = ((valor)=>{
    console.log(valor)
});

const rechazada = ((rechazo)=>{
    console.log(rechazo)
})

//Con then controlamos el cumplimiento o no de la promesa, enviando como argumento las funciones en modo callback
//Un CALLBACK, es una función que se pasa como argumento a otra función y se ejecuta dentro de ésta última.
miPromesa.then(cumplida, rechazada);

//TODO: Práctica de pedido, con sintaxis alternativa.
const estadoPedido = () => {
    return Math.random() < 0.8;    
}

/*const miPedido = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(estadoPedido()){
            console.log('Pedido realizado con éxito...');
        }else{
            console.log('Pedido erróneo...')
        }
    },3000)
});

miPedido.then((exito) => {//TODO: Procesa el éxito de la promesa
    console.log(exito);
})
.catch((error) => { //TODO: Con catch procesamos el error de la promesa
    console.log(error);
});*/

//TODO: Usando promesas y async await

//TODO: P R O M E S A S
function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando ${producto} nº`);
        setTimeout(()=>{
            if(producto=="taza"){
                resolve('Ordenando una taza');
            }else{
                reject('Este producto no está disponible')
            }
        },2000)
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log(`Procesando respuesta...`);
        console.log(`La respuesta fue "${respuesta}" `);
        setTimeout(()=>{
            resolve('Gracias por tu compra');            
        },4000)
    });
}

//TODO: Ahora, encadenamos las dos promesas, primera ordenarProducto y después procesarPedido
//TODO: Con esto, se convierten procesos asíncronos en asíncronos secuenciales.
/*ordenarProducto('lapiz')
    .then(respuesta => {//En caso de que producto no sea  taza, saltará al catch()
        console.log('respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta); //Encadenamiento de las 2 promesas
    })
        .then(respuestaProcesada => {
            console.log(respuestaProcesada);
        })
            .catch(err => {
                console.log(err);
            });*/

//TODO: A S Y N C  A W A I T
//Con async indicamos que ésta función tiene código asíncrono y que retornará una promesa
//Con await simulamos la llamada de forma síncrona a funciones asíncronas
//De esta forma, nos evitamos tener que escribir todo el código de arriba para el caso de que 
// necesitemos combinar funciones síncronas con asíncronas
async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log(`Respuesta recibida ${respuesta}`);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(`Respuesta..: ${respuestaProcesada}`);
    }catch(e){
        console.log(e);
    }    
}

realizarPedido('taza');