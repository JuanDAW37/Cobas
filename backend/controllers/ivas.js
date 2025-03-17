import {validarIva} from '../schemas/iva.js';
import {IvaModel} from '../models/ivas.js'
export class IvaController{    

    getAll = async  (request, response) => {        
        const ivas = await IvaModel.getAllIvas();        
        response.status(200).json(ivas);
    }

    getById = async (request, response) => {
        const {id} = request.params;
        const iva = await IvaModel.getIvaById({id});
        response.status(200).json(iva);
    }

    post = async (request, response) => {                
        const validate = validarIva(request.body);
        if(validate.success){
            const crearIva = await IvaModel.postIva({input: validate.data});
            return response.status(201).json(crearIva);
        }else{
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }    
    }

    put = async (request, response) => {
        const {id} = request.params;
        const validate = validarIva(request.body);
        if (validate) {
            const modificarIva = await IvaModel.putIva({id, input: validate.data});
            return response.status(200).json(modificarIva);
        } else {
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    delete = async (request, response) => {
        const {id} = request.params;
        const borraIva = await IvaModel.deleteIva({id});
        borraIva == true ? response.status(204).json({message:'Iva eliminado!!!'}) : response.status(400).json({message:'No se ha podido eliminar el Iva!!'});  
        return borraIva;
    }
}