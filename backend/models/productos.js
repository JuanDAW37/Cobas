import connection from '../connection/connection.js';

export class ProductoModel {

    static getAllProductos = async () => {
        const query = `SELECT idproductos, nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id FROM productos;`;
        try {
            let productos = await connection.query(query);
            productos = productos.length > 2 ? [productos] : productos
            return productos;
        } catch (error) {
            throw new Error(`Error recuperando Productos ${error.message}`);
        }
    }

    static getProductoById = async ({id}) => {
        const query = `SELECT idproductos, nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id FROM productos WHERE idproductos = ?`;
        try {
            const [productos] = await connection.query(query, [id]);
            return productos;
        } catch (error) {
            throw new Error(`Error recuperando el Producto ${error.message}`)
        }
    }

    static getProductoByNombre = async ({nombre}) => {
        const query = `SELECT idproductos, nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id FROM productos WHERE nombre = ?`;
        try {
            const [productos] = await connection.query(query, [nombre]);
            return productos;
        } catch (error) {
            throw new Error(`Error recuperando el Producto ${error.message}`)
        }
    }

    static postProducto = async ({input}) => {
        const {
            nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id
        } = input
        const query = `INSERT INTO productos(nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
        try {
            return await connection.query(query, [nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id]);
        }
        catch (error) {
            throw new Error(`Error insertando el Producto ${error.message}`);
        }
    }

    static putProducto = async ({id, input}) => {
        const {
            nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id
        } = input
        const query = `UPDATE productos SET nombre = ?, precio1 = ?, precio2 = ?, precio3 = ?, precio4 = ?, precio5 = ?, iva_id = ?, familia_id = ? WHERE idproductos = ?;`;
        try {
            return await connection.query(query, [nombre, precio1, precio2, precio3, precio4, precio5, iva_id, familia_id, id]);
        }
        catch (error) {
            throw new Error(`Error modificando el Producto ${error.message}`);
        }
    }

    static deleteProducto = async ({id}) => {
        const query = `DELETE FROM productos WHERE idproductos = ?;`;
        try {
            await connection.query(query, [id]);
            return true;
        }
        catch(error){
            throw new Error(`Error eliminando el Producto ${error.message}`);
        }   
    }
}