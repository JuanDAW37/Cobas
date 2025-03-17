import mysql from 'mysql2/promise'
// Configuración de la conexión a la BBDD
const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'aserradero'    
}
// Conexión a la BBDD
const connection = await mysql.createConnection(config);
export default connection;


