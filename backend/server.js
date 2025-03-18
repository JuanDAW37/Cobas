import express, { json } from 'express';
import {IvaModel} from './models/ivas.js';
import {FamiliaModel} from './models/familias.js';
const port = 3001;
import {IvaRoute} from './routers/ivas.js';
import { FamiliaRoute } from './routers/familias.js';

const app = express()

    app.use(json())

    app.disable('x-powered-by') // Deshabiliata la cabecera de express     

    app.use('/api', IvaRoute({ivaModel:IvaModel})); //Cuando accedo a /api, voy a cargar todas las rutas que haya en ivasRoute
    app.use('/api', FamiliaRoute({familiaModel:FamiliaModel}));

    //Puerto de escucha, en este caso, por defecto el 3001
    const PUERTO = process.env.PORT ?? port;
    
    app.listen(PUERTO, () => {
        console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});