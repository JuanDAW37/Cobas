import {validarProducto} from '../schemas/producto.js';
import {ProductoModel} from '../models/productos.js';

export class ProductoController{

    getAll = async (request, response) => {
        const productos = await ProductoModel.getAllProductos();
        response.status(200).json(productos);
    }

    getById = async (request, response) => {
        const {id} = request.params;
        const [productos] = await ProductoModel.getProductoById({id});
        response.status(200).json(productos);
    }

    getByName = async (request, response) => {
        const {nombre} = request.params;
        const [productos] = await ProductoModel.getProductoByNombre({nombre});
        response.status(200).json(productos);
    }

    post = async (request, response) => {
        const validate = validarProducto(request.body);
        if(validate.success){
            const crearProducto = await ProductoModel.postProducto({input: validate.data});
            return response.status(201).json(crearProducto);
        }else{
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    put = async (request, response) => {
        const {id} = request.params;
        const validate = validarProducto(request.body);        
        if (validate.success) {
            const modificarProducto = await ProductoModel.putProducto({id, input: validate.data});
            return response.status(200).json(modificarProducto);
        } else {
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    delete = async (request, response) => {
        const {id} = request.params;
        const borraProducto = await ProductoModel.deleteProducto({id});
        borraProducto == true ? response.status(204).json({message:'Producto eliminado!!!'}) : response.status(400).json({message:'No se ha podido eliminar el Producto!!'});  
        return borraProducto;
    }
}
