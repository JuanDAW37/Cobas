import React, {useState, useEffect} from "react";
import "./ListFam.css";
import {HelperHttp} from '../../../helpers/HelperHttp';

export function ListFam() {
    const url = 'http://localhost:3001/api/familias';
    const [familias, setFamilias] = useState<{id:number; nombre:string }[]>([]);    
    
    useEffect(() => {                
        HelperHttp().get(url).then((res)=>{            
            if (!res.err) {
                setFamilias(res);
            } else {
                setFamilias([]);
            }
        });                              
    }, []);  

    return (
        <>                   
            <main className="list">                      
                <article><button className="nuevo">Nueva</button></article>
                <section className="list-item">            
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th className="titulos">Id</th>
                                <th className="titulos">Nombre</th>                              
                                <th className="titulos" colSpan={2}>Opciones</th>
                            </tr>
                        </thead>               
                        <tbody className="cuerpo">                        
                            {familias.map((familia) => (                                                        
                                    <tr key={familia.id}>
                                        <td className="detalle">{familia.id}</td>
                                        <td className="detalle">{familia.nombre}</td>                                  
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