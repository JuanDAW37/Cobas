import connection from '../connection/connection.js';

export class IvaModel{
    static async getAllIvas(){        
        const query = `SELECT id, tipo, nombre FROM ivas;`;
        try{
            const [ivas] = await connection.query(query);                                    
            return ivas
        }catch(error){
            throw new Error(`Error recuperando Iva ${error.message}`);
        }        
    }

    static async getIvaById({id}){
        const query = `SELECT id, tipo, nombre FROM ivas WHERE id = ?`;
        try{            
            const [ivas]  = await connection.query(query, [id]);
            return ivas;
        }catch(error){
            throw new Error(`Error recuperando el tipo de Iva ${error.message}`)
        }
    }

    static async postIva({input}){
        const {
            tipo,
            nombre
        } = input
        const query = `INSERT INTO ivas(tipo, nombre) VALUES (?, ?);`;
        try{
            return await connection.query(query, [tipo, nombre]);
        }catch(error){
            throw new Error('Error creando el tipo de IVA');
        }
    }

    static async putIva({id, input}){
        const {
            tipo,
            nombre
        } = input
        const query = `UPDATE ivas SET tipo = ?, nombre = ? WHERE id = ?;`;
        try{
            await connection.query(query, [tipo, nombre, id]); 
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