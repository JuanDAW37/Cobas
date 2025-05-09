import {useState, useEffect} from "react";
import {HelperHttp} from '../../../helpers/HelperHttp';

interface Clientes {
    id:number,
    nombreApellidos:string,
    nif:string,
    direccion:string,
    localidad:string,
    cp:number,
    provincia:string
}

export const ListClientes = () => {
    const url = 'http://localhost:3001/api/clientes';
    const [clientes, setClientes] = useState<Clientes[]>([]);    
    
    useEffect(() => {                
        HelperHttp().get(url).then((res)=>{            
            if (!res.err) {                
                setClientes(res);
            } else {
                setClientes([]);
            }
        });                              
    }, []);
    return (
        <main className="bg-gray-100 flex justify-center min-h-screen">              
        <main className="w-full mt-6 max-w-6xl px-6">
            <section className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Lista de Familias</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 
                    rounded-full font-semibold shadow-lg flex items-center gap-2 transition">        
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Alta Familia
                </button>
            </section>
            <section className="overflow-x-auto bg-white rounded-3xl shadow-2xl">
            <table className="w-full text-base text-left text-gray-800">
                <thead className="bg-gray-200 text-sm uppercase text-gray-600">
                    <tr>
                        <th className="px-6 py-4 text-center">Id</th>
                        <th className="px-6 py-4 text-center">Nombre y Apellidos</th>
                        <th className="px-6 py-4 text-center">NIF</th>
                        <th className="px-6 py-4 text-center">Dirección</th>
                        <th className="px-6 py-4 text-center">Localidad</th>
                        <th className="px-6 py-4 text-center">C.P.</th>
                        <th className="px-6 py-4 text-center">Provincia</th>
                        <th className="px-6 py-4 text-center">Acciones</th>
                    </tr>
                </thead>               
                <tbody className="divide-y divide-gray-300">                        
                    {clientes.map((cliente) => (  
                        
                        <tr key={cliente.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-5">{cliente.id}</td>
                            <td className="px-6 py-5 font-medium">{cliente.nombreApellidos}</td>
                            <td className="px-6 py-5 font-medium">{cliente.nif}</td>
                            <td className="px-6 py-5 font-medium">{cliente.direccion}</td>
                            <td className="px-6 py-5 font-medium">{cliente.localidad}</td>
                            <td className="px-6 py-5 font-medium">{cliente.cp}</td>
                            <td className="px-6 py-5 font-medium">{cliente.provincia}</td>
                            <td className="px-6 py-5 flex justify-center gap-3">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5
                                    rounded-full text-sm font-semibold shadow flex items-center gap-1">                  
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M15.232 5.232l3.536 3.536M9 13.5V21h7.5L21 16.5l-7.5-7.5L9 13.5z" />
                                    </svg>
                                    Modificar
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 
                                    rounded-full text-sm font-semibold shadow flex items-center gap-1">                
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Borrar
                                </button>
                            </td>
                        </tr>                                                    
                    ))}
                </tbody>                    
            </table>
            </section>                                  
        </main>        
      </main>
    )
}
