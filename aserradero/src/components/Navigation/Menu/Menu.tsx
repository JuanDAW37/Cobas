import { useState } from 'react';
import './Menu.css';
import {Link} from '../Link/Link.tsx'
import {Headers} from '../../Headers/Headers.tsx';

export const Menu = () => {    
    let select=1;

    const familias = () => {        
        select = 1;
        Label();
    }

    const ivas = () => {
        select = 2;
        Label();
    }
    
    const productos = () => {
        select = 3;
        Label();
    }

    const clientes = () => {
        select = 4;
        Label();
    }

    const albaranes = () => {
        select = 5;
        Label();
    }

    const facturas = () => {
        select = 6;
        Label();
    }

    // eslint-disable-next-line prefer-const    
    let [titulo, setTitulo] = useState('Familias');
    // eslint-disable-next-line prefer-const
    let [opcion, setOpcion] = useState(1);

    const Label = () => {
        switch(select){
            case 1:
                setTitulo(titulo = 'Familias');            
                setOpcion(opcion = 1);        
                break;
            case 2:
                setTitulo(titulo = 'Ivas');            
                setOpcion(opcion = 2);        
                break;
            case 3:
                setTitulo(titulo = 'Productos');            
                setOpcion(opcion = 3);        
                break;
            case 4:
                setTitulo(titulo = 'Clientes');            
                setOpcion(opcion = 4);        
                break;
            case 5:
                setTitulo(titulo = 'Albaranes');            
                setOpcion(opcion = 5);        
                break;
            case 6:
                setTitulo(titulo = 'Facturas');            
                setOpcion(opcion = 6);        
                break;
        }       
    }
    return (        
    <>
    <nav className={'main'}>
        <ul className={"menu"}>
            <li><Link label='Familias' parentMethod = {familias} /></li>
            <li><Link label='Ivas' parentMethod = {ivas} /></li>
            <li><Link label='Productos' parentMethod = {productos} /></li>
            <li><Link label='Clientes' parentMethod = {clientes} /></li>
            <li><Link label='Albaranes' parentMethod = {albaranes} /></li>
            <li><Link label='Facturas' parentMethod = {facturas} /></li>
        </ul> 
    </nav>    
        <Headers titulo={titulo} opcion={opcion}/>   
    </>
    );
};