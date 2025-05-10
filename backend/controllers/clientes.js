import {validarCliente} from '../schemas/cliente.js';
import {ClienteModel} from '../models/clientes.js'

export class ClienteController{

    getAll = async (request, response) => {
        const clientes = await ClienteModel.getAllClientes();
        response.status(200).json(clientes);
    }

    getById = async (request, response) => {
        const {id} = request.params;
        const [clientes] = await ClienteModel.getClienteById({id});
        response.status(200).json(clientes);
    }

    getByName = async (request, response) => {
        const {nombreApellidos} = request.params;
        const [clientes] = await ClienteModel.getClienteByNombre({nombreApellidos});
        response.status(200).json(clientes);
    }

    getByNif = async (request, response) => {
        const {nif} = request.params;
        const [clientes] = await ClienteModel.getClienteByNif({nif});
        response.status(200).json(clientes);
    }

    post = async (request, response) => {
        const validate = validarCliente(request.body);
        if(validate.success){
            const crearCliente = await ClienteModel.postCliente({input: validate.data});
            return response.status(201).json(crearCliente);
        }else{
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    put = async (request, response) => {
        const {id} = request.params;
        const validate = validarCliente(request.body);        
        if (validate.success) {
            const modificarCliente = await ClienteModel.putCliente({id, input: validate.data});
            return response.status(200).json(modificarCliente);
        } else {
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    delete = async (request, response) => {
        const {id} = request.params;
        const borraCliente = await ClienteModel.deleteCliente({id});
        borraCliente == true ? response.status(204).json({message:'Cliente eliminado!!!'}) : response.status(400).json({message:'No se ha podido eliminar el Cliente!!'});  
        return borraCliente;
    }
}