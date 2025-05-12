import { useState } from "react"
import {HelperHttp} from '../../../helpers/HelperHttp';
import {Cliente} from '../../../Models/Cliente'

export const FormAltaCli = () => {
    const hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth()+1;    
    const anio = hoy.getFullYear().toString();
    dia = dia < 10 ? '0'+(dia.toString()) : dia.toString();
    mes = mes < 10 ? '0'+(mes.toString()) : mes.toString();
    const initialData = {
        nombreApellidos: "",
        nif:"",
        direccion:"",
        localidad:"",
        cp:0,
        provincia:"A Coruña",
        pais:"España",
        telefono1:"",
        telefono2:"",
        fax:"",
        email:"",
        web:"",
        contacto:"",
        fechaAlta:`${dia}-${mes}-${anio}`
    }
    const api = HelperHttp();
    const url = 'http://localhost:3001/api/clientes';

    const [formData, setFormData] = useState<Cliente>(initialData);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value,})        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nombreApellidos:formData.nombreApellidos,
            nif:formData.nif,
            direccion:formData.direccion,
            localidad:formData.localidad,
            cp:parseInt(formData.cp.toString()),
            provincia:formData.provincia,
            pais:formData.pais,
            telefono1:formData.telefono1,
            telefono2:formData.telefono2,
            fax:formData.fax,
            email:formData.email,
            web:formData.web,
            contacto:formData.contacto,
            fechaAlta:formData.fechaAlta,            
        }                   
        data.fechaAlta = `${data.fechaAlta.substring(6)}-${data.fechaAlta.substring(3,5)}-${data.fechaAlta.substring(0,2)}`;
        console.log(data.fechaAlta);
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        }            
        api.post(url, options).then((res)=>{            
            if (!res.error) {                
                console.log('Datos enviados', res);
            }
        });
    }

    return (
    <div className="w-full max-w-9/10 mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Alta de Cliente</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="w-md text-sm font-medium text-gray-700">Nombre y apellidos</label>
            <input
                type="text"
                name="nombreApellidos"
                value={formData.nombreApellidos}
                onChange={handleChange}
                required
                className="ml-1 md-1 mt-1 w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="w-md text-sm font-medium text-gray-700">NIF / CIF</label>
            <input
                type="text"
                name="nif"
                value={formData.nif}
                onChange={handleChange}
                required
                className="ml-1 mt-1 w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>        
        <div>
            <label className="w-md text-sm font-medium text-gray-700">Dirección</label>
            <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                className="mt-1 w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="w-md text-sm font-medium text-gray-700">Localidad</label>
            <input
                type="text"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                required
                className="mt-1 w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="w-md text-sm font-medium text-gray-700">C.P.</label>
            <input
                type="number"
                name="cp"
                value={formData.cp}
                onChange={handleChange}
                required
                className="mt-1 w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="block w-md text-sm font-medium text-gray-700">Provincia</label>
            <input
                type="text"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                required
                className="mt-1 w-md block rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="block w-md text-sm font-medium text-gray-700">País</label>
            <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                required
                className="mt-1 w-md block rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>                
        <div>
            <label className="block w-md text-sm font-medium text-gray-700">Teléfonos</label>
            <input
                type="tel"
                name="telefono1"
                value={formData.telefono1}
                onChange={handleChange}
                className="mt-1 block w-md rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="tel"
                name="telefono2"
                value={formData.telefono2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Fax</label>
            <input
                type="tel"
                name="fax"
                value={formData.fax}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Web</label>
            <input
                type="text"
                name="web"
                value={formData.web}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Contacto</label>
            <input
                type="text"
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de alta</label>
            <input
                type="text"
                name="fechaAlta"
                value={formData.fechaAlta}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
        >
            Guardar
        </button>
        <button
            type="reset"
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition-colors"
        >
            Volver
        </button>
      </form>
    </div>
    )
}
