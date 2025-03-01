import './Menu.css';
import {Link} from '../Link/Link.tsx'

const parentMethod = () => {    
    return (<a href="https://www.google.com"></a>);
}

export const Menu = () => {    
    return (
    <nav className={'main'}>
        <ul className={"menu"}>
            <li><Link label='Familias' parentMethod={parentMethod}/></li>
            <li><Link label='Ivas' parentMethod={parentMethod}/></li>
            <li><Link label='Productos' parentMethod={parentMethod}/></li>
            <li><Link label='Clientes' parentMethod={parentMethod}/></li>
            <li><Link label='Albaranes' parentMethod={parentMethod}/></li>
            <li><Link label='Facturas' parentMethod={parentMethod}/></li>
        </ul> 
    </nav>
    );
};