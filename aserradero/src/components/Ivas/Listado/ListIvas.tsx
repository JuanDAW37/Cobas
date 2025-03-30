import {useState, useEffect} from "react";
import "./ListIvas.css";

export function ListIvas() {
    const url = 'http://localhost:3001/api/iva';
    const [ivas, setIvas] = useState<{id:number; tipo:number; nombre:string }[]>([]);    
    
    useEffect(() => {                
        const getIvas = async (url:string) => {
            const res = (await fetch(url)),
                json = await res.json();            
            json.forEach(async (e: { id: number; tipo: number; nombre: string }) => {
                const iva: { id: number; tipo: number; nombre: string } = {
                    id: e.id,
                    tipo: e.tipo,
                    nombre: e.nombre
                }                        
                setIvas((ivas: { id: number; tipo: number; nombre: string }[]) => [...ivas, iva]);                        
            });                                                            
        }                
        getIvas(url);                               
    }, []);  
    
    return (
        <>
        <div className="container">
        <div><h1>Listado de Tipos de Iva</h1></div>        
        <div className="list">                      
        <div><button className="nuevo">Nuevo</button></div>
            <div className="list-item">            
                <table className="tabla">
                    <thead>
                        <tr>
                            <th className="titulos">Id</th>
                            <th className="titulos">Nombre</th>
                            <th className="titulos">Tipo %</th>
                            <th className="titulos" colSpan="2">Opciones</th>
                        </tr>
                    </thead>               
                    <tbody className="cuerpo">                        
                    {ivas.map((iva) => (                        
                        <>
                            <tr className="fila">
                                <td className="detalle" key={iva.id}>{iva.id}</td>
                                <td className="detalle">{iva.nombre}</td>
                                <td className="detalle">{iva.tipo}</td>
                                <td><button className="detalle modificar">Modificar</button></td>
                                <td><button className="detalle borrar">Borrar</button></td>
                            </tr>                            
                        </>
                    ))}
                    </tbody>                    
                </table>
            </div>
        </div>
        </div>
        </>
    );
}
