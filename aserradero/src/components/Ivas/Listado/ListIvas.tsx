import {useState, useEffect} from "react";
import "./ListIvas.css";
import {HelperHttp} from '../../../helpers/HelperHttp'

export function ListIvas() {
    const url = 'http://localhost:3001/api/iva';
    const [ivas, setIvas] = useState<{id:number; tipo:number; nombre:string }[]>([]);    
    
    useEffect(() => {
        HelperHttp().get(url).then((res)=>{            
            if (!res.err) {
                setIvas(res);
            } else {
                setIvas([]);
            }
        });        
    }, []);  
    
    return (
        <>              
        <main className="list">                      
        <article><button className="nuevo">Nuevo</button></article>
            <section className="list-item">            
                <table className="tabla">
                    <thead>
                        <tr>
                            <th className="titulos">Id</th>
                            <th className="titulos">Nombre</th>
                            <th className="titulos">Tipo %</th>
                            <th className="titulos" colSpan={2}>Opciones</th>
                        </tr>
                    </thead>               
                    <tbody>                        
                    {ivas.map((iva) => (                                                
                            <tr key={iva.id}>
                                <td className="detalle">{iva.id}</td>
                                <td className="detalle">{iva.nombre}</td>
                                <td className="detalle">{iva.tipo}</td>
                                <td className="detalle modificar"><button className="modificar">Modificar</button></td>
                                <td className="detalle borrar"><button className="borrar">Borrar</button></td>
                            </tr>                                                    
                    ))}
                    </tbody>                    
                </table>
            </section>
        </main>        
        </>
    );
}
