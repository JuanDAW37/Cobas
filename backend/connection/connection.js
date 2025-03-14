import mysql from 'mysql2'
// Configuración de la conexión a la BBDD
const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'moviesdb'    
}
// Conexión a la BBDD
const connection = await mysql.createConnection(config);

module.exports.connection = connection;

