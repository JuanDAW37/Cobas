import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {HelperHttp} from '../../../helpers/HelperHttp';
import {Cliente} from '../../../Models/Cliente';
import { Button } from "../../../components";
import { Input } from "../../../components/Input/Input";
import { Message } from "../../../components/Message/Message";

export const FormAltaCli = () => {
    const styles = {
        fontWeight: "bold",
        color: "#dc3545",
    };    
    const navigate = useNavigate();
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
    const [error, setError] = useState(false);
    const [data, setData] = useState(false);

    const handleGoBack = () => {        
        navigate(-1);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>):void => {        
        e.preventDefault();
        if(!formData.nombreApellidos || !formData.nif || !formData.direccion || !formData.cp || !formData.provincia || !formData.pais){
            setError(true)
            return
        }else{
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
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        }            
        api.post(url, options).then((res)=>{            
            if (!res.error) {                
                console.log('Datos enviados', res);
                setFormData(initialData);
            }
        });
            setError(false);
            setData(true);
        }        
    }

    return (
    <div className="w-full max-w-3/4 mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Alta de Cliente</h2>
        <form onSubmit={handleSubmit} className="izquierda space-y-4">
        <div>
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>Nombre y apellidos</label>
            <Input type={"text"} name={"nombreApellidos"} formData={formData.nombreApellidos} method={handleChange}
            placeholder={"Nombre y apellidos..."} style={"ml-5 mt-1 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>NIF / CIF</label>            
            <Input type={"text"} name={"nif"} formData={formData.nif} method={handleChange}
            placeholder={"NIF ó CIF..."} style={"ml-5 mt-1 w-small rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>    
        <div>
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>Dirección</label>
            <Input type={"text"} name={"direccion"} formData={formData.direccion} method={handleChange}
            placeholder={"Dirección..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>Localidad</label>            
            <Input type={"text"} name={"localidad"} formData={formData.localidad} method={handleChange}
            placeholder={"Localidad..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>C.P.</label>            
            <Input type={"number"} name={"cp"} formData={formData.cp.toString()} method={handleChange}
            placeholder={"Código postal..."} style={"mt-1 ml-5 w-small rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>
        <div>
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>Provincia</label>            
            <Input type={"text"} name={"provincia"} formData={formData.provincia} method={handleChange}
            placeholder={"Provincia..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="w-md text-sm font-medium text-gray-700"><span style={styles}>*</span>País</label>
            <Input type={"text"} name={"pais"} formData={formData.pais} method={handleChange}
            placeholder={"Pais..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>                
        <div>
            <label className="w-md text-sm font-medium text-gray-700">Teléfonos</label>            
            <Input type={"tel"} name={"telefono1"} formData={formData.telefono1} method={handleChange}
            placeholder={"Primer teléfono..."} style={"mt-1 ml-5 w-small rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <Input type={"tel"} name={"telefono2"} formData={formData.telefono2} method={handleChange}
            placeholder={"Segundo teléfono..."} style={"mt-1 ml-5 w-small rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="text-sm font-medium text-gray-700">Fax</label>            
            <Input type={"tel"} name={"fax"} formData={formData.fax} method={handleChange}
            placeholder={"Fax..."} style={"mt-1 ml-5 w-small rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>        
        <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input type={"email"} name={"email"} formData={formData.email} method={handleChange}
            placeholder={"Email..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
            <label className="text-sm font-medium text-gray-700">Web</label>            
            <Input type={"text"} name={"web"} formData={formData.web} method={handleChange}
            placeholder={"Página web..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>        
        <div>
            <label className="text-sm font-medium text-gray-700">Contacto</label>            
            <Input type={"text"} name={"contacto"} formData={formData.contacto} method={handleChange}
            placeholder={"Persona de contacto..."} style={"mt-1 ml-5 w-md rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"} />
        </div>
        <div>
            <label className="text-sm font-medium text-gray-700">Fecha de alta:</label>            
            <Input type={"text"} name={"fechaAlta"} formData={formData.fechaAlta} method={handleChange}
            placeholder={"Fecha de alta..."} style={"mt-1 ml-5 w-small rounded-md shadow-sm"} />
        </div>
        <div className="botones">            
            <Button label="Guardar" style="w-20 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
            parentMethod={handleSubmit} />
            <Button style="w-20 bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition-colors" label="Volver"
            parentMethod={handleGoBack} />
        </div>
        {error && <Message message={'Faltan datos...'} bgColor={ '#C10007'} />}
        {!error && data && <Message message={'Datos guardados...'} bgColor={ '#1447E6'} />}
      </form>
    </div>
    )
}
