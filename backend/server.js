import express, { json } from 'express'
const app = express();
const port = 3000;
import http from 'http';
import {ivasRoute} from './routers/ivas.js';

app.use('/iva', ivasRoute);

//Puerto de escucha, en este caso, por defecto el 3000
const PUERTO = process.env.PORT || port;

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}...`);
});

