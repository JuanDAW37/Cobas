import { NavLink } from 'react-router-dom';
import './Menu.css';

interface Active{
    isActive:boolean;
}

export const Menu = () => {        
    return (        
    <>
    <nav className={'main'}>
        <section className={"menu"}>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/">Home</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/ivas">Ivas</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/familias">Familias</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/productos">Productos</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/clientes">Clientes</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/albaranes">Albaranes</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/facturar">Facturar</NavLink></li>
            <li><NavLink className={ ( { isActive }:Active ) => ( isActive ? "active-link" : undefined ) } to="/facturas">Facturas</NavLink></li>
        </section> 
    </nav>            
    </>
    );
};