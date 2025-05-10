import connection from "../connection/connection.js";

export class ClienteModel {
    
    static getAllClientes = async () => {
        const query = `SELECT id, nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta FROM clientes;`;
        try {
            const [clientes] = await connection.query(query);                                  
            return clientes;
        } catch (error) {
            throw new Error(`Error recuperando Clientes ${error.message}`);
        }
    }

    static getClienteById = async ({id}) => {
        const query = `SELECT id, nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta FROM clientes WHERE id = ?`;
        try {
            const [clientes] = await connection.query(query, [id]);
            return clientes;
        } catch (error) {
            throw new Error(`Error recuperando el Cliente ${error.message}`)
        }
    }

    static getClienteByNombre = async ({nombreApellidos}) => {
        const query = `SELECT id, nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta FROM clientes WHERE nombreApellidos = ?`;
        try {
            const [clientes] = await connection.query(query, [nombreApellidos]);
            return clientes;
        } catch (error) {
            throw new Error(`Error recuperando el Cliente ${error.message}`)
        }
    }

    static getClienteByNif = async ({nif}) => {
        const query = `SELECT id, nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta FROM clientes WHERE nif = ?`;
        try {
            const [clientes] = await connection.query(query, [nif]);
            return clientes;
        } catch (error) {
            throw new Error(`Error recuperando el Cliente ${error.message}`)
        }
    }

    static postCliente = async ({input}) => {
        const {
            nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta
        } = input
        const query = `INSERT INTO clientes(nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        try {
            return await connection.query(query, [nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
                telefono2, fax, email, web, contacto, fechaAlta]);
        }
        catch (error) {
            throw new Error('Error creando el Cliente');
        }
    }

    static putCliente = async ({id, input}) => {        
        const {
            nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
            telefono2, fax, email, web, contacto, fechaAlta
        } = input
        const query = `UPDATE clientes SET nombreApellidos = ?, nif = ?, direccion = ?, localidad = ?, cp = ?, provincia = ?, pais = ?, telefono1 = ?,
            telefono2 = ?, fax = ?, email = ?, web = ?, contacto = ?, fechaAlta = ? WHERE id = ?;`;
        try {
            await connection.query(query, [nombreApellidos, nif, direccion, localidad, cp, provincia, pais, telefono1,
                telefono2, fax, email, web, contacto, fechaAlta, id]);
        } catch (error) {
            throw new Error("Error modificando el Cliente");
        }
    }

    static deleteCliente = async ({id}) => {
        const query = `DELETE FROM clientes WHERE id = ?;`;
        try {
            await connection.query(query, [id]);
            return true
        } catch (error) {
            throw new Error(`Error eliminando el Cliente ${error.message}`);
        }
    }
}