import connection from '../connection/connection.js';

export class IvaModel{
    static async getAllIvas(){        
        const query = `SELECT id, tipo FROM ivas;`;
        try{
            const [ivas] = await connection.query(query);        
            return ivas;                
        }catch(error){
            throw new Error(`Error recuperando Iva ${error.message}`);
        }        
    }

    static async getIvaById({id}){
        const query = `SELECT id , tipo FROM ivas WHERE id = ?`;
        try{
            console.log({id})
            const [ivas]  = await connection.query(query, [id]);
            return ivas;
        }catch(error){
            throw new Error(`Error recuperando el tipo de Iva ${error.message}`)
        }
    }

    static async postIva({input}){
        const {
            tipo
        } = input
        const query = `INSERT INTO ivas(tipo) VALUES (?);`;
        try{
            return await connection.query(query, [tipo]);
        }catch(error){
            throw new Error('Error creando el tipo de IVA');
        }
    }

    static async putIva({id, input}){
        const {
            tipo
        } = input
        const query = `UPDATE ivas SET tipo = ? WHERE id = ?;`;
        try{
            await connection.query(query, [tipo, id]); 
        }catch(error){
            throw new Error("Error modificando el tipo de IVA");            
        }        
    }

    static async deleteIva({id}){
        const query = `DELETE FROM ivas WHERE id = ?;`;
        try{
            await connection.query(query, [id]);
            return true
        }catch(error){
            throw new Error('Error al eliminar el IVA');            
        }
    }
}