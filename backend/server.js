import express, { json } from 'express';
import {IvaModel} from './models/ivas.js';
const port = 3001;
import http from 'http';
import {IvaRoute} from './routers/ivas.js';

const app = express()

    app.use(json())

    app.disable('x-powered-by') // Deshabiliata la cabecera de express     

    app.use('/api', IvaRoute({ivaModel:IvaModel})); //Cuando accedo a /api, voy a cargar todas las rutas que haya en ivasRoute

    //Puerto de escucha, en este caso, por defecto el 3001
    const PUERTO = process.env.PORT ?? port;
    
    app.listen(PUERTO, () => {
        console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});