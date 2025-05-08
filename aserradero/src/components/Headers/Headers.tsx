import React from "react";
import "./Headers.css";
import { ListFam } from '../Familias/Listado/ListFam.tsx';
import { ListIvas } from '../Ivas/Listado/ListIvas.tsx';

interface HeadersProps {
  titulo: string;
  opcion: number;
}

export function Headers({titulo, opcion}: HeadersProps) {  return (
    <main className="container">
      <h1 className="header">{titulo}</h1>
      <section className="list">
        <article className="list-item">          
          {opcion == 1 && <ListFam />}   
          {opcion == 2 && <ListIvas />}   
        </article>        
      </section>
    </main>
  );
}