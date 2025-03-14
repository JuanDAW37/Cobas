const connection = require('../connection/connection.js');
console.log(connection);

export class IvaModel{
    static async getAllIvas(){
        const query = 'SELECT aserradero.id as id, aserradero.tipo FROM aserradero.ivas';
        const [ivas] = await connection.promise().query(query);
        return ivas;
    }

    static async getIvaById({id}){
        const query = 'SELECT aserradero.id as id, aserradero.tipo FROM aserradero.ivas WHERE aserradero.id = ?'
        const [ivas]  = await connection.promise().query(query, [id]);
        return ivas;
    }

    static async postIva({input}){
        const {
            tipo
        } = input
        const query = 'INSERT INTO aserradero.ivas(tipo) VALUES (?)';
        try{
            await connection.promise().query(query, [tipo]);
        }catch(error){
            throw new Error('Error creando el tipo de IVA');
        }
    }

    static async putIva({id, input}){
        const {
            tipo
        } = input
        const query = 'UPDATE aserradero.ivas SET aserradero.ivas.tipo = ? WHERE aserradero.ivas.id = ?';
        try{
            await connection.promise().query(query, [tipo, id]); 
        }catch(error){
            throw new Error("Error modificando el tipo de IVA");
            
        }        
    }

    static async deleteIva({id}){
        const query = 'DELETE FROM aserradero.ivas WHERE aserradero.ivas.id = ?';
        try{
            await promise().query(query, [id]);
        }catch(error){
            throw new Error('Error al eliminar el IVA');
        }
    }
}