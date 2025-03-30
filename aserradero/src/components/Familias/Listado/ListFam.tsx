import React, {useState, useEffect} from "react";
import "./ListFam.css";

export function ListFam() {
  const url = 'http://localhost:3001/api/familias';
      const [familias, setFamilias] = useState<{id:number; nombre:string }[]>([]);    
      
      useEffect(() => {                
          const getFamilias = async (url:string) => {
              const res = (await fetch(url)),
                  json = await res.json();            
              json.forEach(async (e: { id: number; nombre: string }) => {
                  const familia: { id: number; nombre: string } = {
                      id: e.id,                      
                      nombre: e.nombre
                  }                        
                  setFamilias((familias: { id: number; nombre: string }[]) => [...familias, familia]);                        
              });                                                            
          }                
          getFamilias(url);                               
      }, []);  
      
      return (
          <>
          <div className="container">
          <div><h1>Listado de Familias</h1></div>        
          <div className="list">                      
          <div><button className="nuevo">Nueva</button></div>
              <div className="list-item">            
                  <table className="tabla">
                      <thead>
                          <tr>
                              <th className="titulos">Id</th>
                              <th className="titulos">Nombre</th>                              
                              <th className="titulos" colSpan="2">Opciones</th>
                          </tr>
                      </thead>               
                      <tbody className="cuerpo">                        
                      {familias.map((familia) => (                        
                          <>
                              <tr className="fila">
                                  <td className="detalle" key={familia.id}>{familia.id}</td>
                                  <td className="detalle">{familia.nombre}</td>                                  
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