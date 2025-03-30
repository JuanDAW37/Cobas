/**
 * El código define una función de middleware CORS que permite solicitudes de orígenes específicos. Aquí hay un desglose del código:

El middleware cors se importa del paquete cors.
La constante ACCEPTED_ORIGINS se define como un array que contiene los orígenes permitidos. En este caso, está configurado en ['http://localhost:8080'].
Se exporta la función corsMiddleware, que toma un parámetro acceptedOrigins opcional. Si no se proporciona, el valor predeterminado es la constante ACCEPTED_ORIGINS.
El middleware cors se llama con un objeto de opciones que especifica la función de origen.
La función origen se llama con dos argumentos: origin y callback (devolución de llamada) y comprueba las siguientes condiciones:
Si el origen está incluido en la matriz ACCEPTED_ORIGINS, devuelve un callback(devolución de llamada), (null, true), lo que permite la solicitud.
Si el origen es falsy (es decir, undefined o Null), devuelve una devolución de llamada (null, true), lo que permite la solicitud. Es probable que esto admita solicitudes del mismo origen o de un contexto de representación del lado del servidor.
Si el origen no cumple con las condiciones anteriores, devuelve una devolución de llamada ('No permitido por CORS', false), rechazando la solicitud con un mensaje de error de CORS.
Al utilizar este middleware, puede restringir las solicitudes CORS para permitir solo solicitudes de orígenes específicos, en este caso, http://localhost:8080.
 */

import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:5173', 'http://localhost:3001']
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin)){
            return callback(null, true)
        }
        if (!origin){ 
            return callback(null, true)
        }
        return callback('No permitido, intercambio de recursos de origen cruzado (CORS)', false)
    }
})