import connection from "../connection/connection.js";

export class FamiliaModel {

    static getAllFamilias = async () => {
        const query = `SELECT id, nombre FROM familias;`;
        try {
            let familias = await connection.query(query);
            familias = familias.length > 2 ? familias : familias[0]            
            return familias;
        } catch (error) {
            throw new Error(`Error recuperando Familias ${error.message}`);
        }
    }

    static getFamiliaById = async ({id}) => {
        const query = `SELECT  id, nombre FROM familias WHERE id = ?`;
        try {
            const [familias] = await connection.query(query, [id]);
            return familias;
        } catch (error) {
            throw new Error(`Error recuperando la Familia ${error.message}`)
        }
    }

    static getFamiliaByNombre = async ({nombre}) => {
        const query = `SELECT id, nombre FROM familias WHERE nombre = ?`;
        try {
            const [familias] = await connection.query(query, [nombre]);
            return familias;
        } catch (error) {
            throw new Error(`Error recuperando la Familia ${error.message}`)
        }
    }

    static postFamilia = async ({input}) => {
        const {
            nombre
        } = input
        const query = `INSERT INTO familias(nombre) VALUES (?);`;
        try {
            return await connection.query(query, [nombre]);
        } catch (error) {
            throw new Error('Error creando la Familia');
        }
    }

    static putFamilia = async ({id, input}) => {
        const {
            nombre
        } = input
        const query = `UPDATE familias SET nombre = ? WHERE id = ?;`;
        try {
            await connection.query(query, [nombre, id]);
        } catch (error) {
            throw new Error("Error modificando la Familia");
        }
    }

    static deleteFamilia = async ({id}) => {
        const query = `DELETE FROM familias WHERE id = ?;`;
        try {
            await connection.query(query, [id]);
            return true
        } catch (error) {
            throw new Error('Error al eliminar la Familia');
        }
    }
}