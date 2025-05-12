import connection from '../connection/connection.js';

export class ProductoModel {

    static getAllProductos = async () => {
        const query = `SELECT productos.idproductos as id, productos.nombre as nombre, productos.precio1 as precio1,
            productos.precio2 as precio2, productos.precio3 as precio3, productos.precio4 as precio4, productos.precio5 as precio5,
            ivas.id as iva_id, ivas.tipo as iva_tipo, ivas.nombre as iva_nombre, familias.id as familia_id, familias.nombre as familia_nombre
            FROM productos
            INNER JOIN ivas ON ivas.id = productos.iva_id
            INNER JOIN familias ON familias.id = productos.familia_id;`;
        try {
            const [productos] = await connection.query(query);            
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