//import {validarIva} from '../Schemas/iva.js';

export class IvaController{
    constructor ({ivaModel}){
        this.ivaModel = ivaModel;
    }

    getAll = async (request, response) =>{
        const ivas = await this.ivaModel.getAll();
        response.status(200).send(JSON.stringify(ivas));
    }
}