import express, { json } from 'express';
import {IvaModel} from './models/ivas.js';
import {IvaRoute} from './routers/ivas.js';
import {FamiliaModel} from './models/familias.js';
import { FamiliaRoute } from './routers/familias.js';
import { ClienteModel } from './models/clientes.js';
import { ClienteRoute } from './routers/clientes.js';
import { ProductoModel } from './models/productos.js';
import { ProductoRoute } from './routers/productos.js';
import { corsMiddleware } from './middlewares/cors.js';

const port = 3001;

const app = express()

    app.use(json());
    app.use(corsMiddleware()); // Permite solicitudes desde esta dirección

    app.disable('x-powered-by') // Deshabiliata la cabecera de express     

    app.use('/api', IvaRoute({ivaModel:IvaModel})); //Cuando accedo a /api, voy a cargar todas las rutas que haya en ivasRoute
    app.use('/api', FamiliaRoute({familiaModel:FamiliaModel}));
    app.use('/api', ClienteRoute({clienteModel:ClienteModel}));
    app.use('/api', ProductoRoute({productoModel:ProductoModel}));

    //Puerto de escucha, en este caso, por defecto el 3001
    const PUERTO = process.env.PORT ?? port;
    
    app.listen(PUERTO, () => {
        console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});