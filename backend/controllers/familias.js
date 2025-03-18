import {validarFamilia} from '../schemas/familia.js';
import {FamiliaModel} from '../models/familias.js'
import { response } from 'express';

export class FamiliaController{

    getAll = async (request, response) => {
        const [familias] = await FamiliaModel.getAllFamilias();
        response.status(200).json(familias);
    }

    getById = async (request, response) => {
        const {id} = request.params;
        const [familias] = await FamiliaModel.getFamiliaById({id});
        response.status(200).json(familias);
    }

    getByName = async (request, response) => {
        const {nombre} = request.params;
        const [familias] = await FamiliaModel.getFamiliaByNombre({nombre});
        response.status(200).json(familias);
    }

    post = async (request, response) => {
        const validate = validarFamilia(request.body);
        if(validate.success){
            const crearFamilia = await FamiliaModel.postFamilia({input: validate.data});
            return response.status(201).json(crearFamilia);
        }else{
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    put = async (request, response) => {
        const {id} = request.params;
        const validate = validarFamilia(request.body);
        if (validate) {
            const modificarFamilia = await FamiliaModel.putFamilia({id, input: validate.data});
            return response.status(200).json(modificarFamilia);
        } else {
            return response.status(400).json({error:JSON.parse(validate.error.message)});
        }
    }

    delete = async (request, response) => {
        const {id} = request.params;
        const borraFamilia = await FamiliaModel.deleteFamilia({id});
        borraFamilia == true ? response.status(204).json({message:'Familia eliminada!!!'}) : response.status(400).json({message:'No se ha podido eliminar la Familia!!'});  
        return borraFamilia;
    }
}
