import './Link.css';

interface LinkProps {
    label: string; // Aseguramos que 'label' sea siempre un string
    parentMethod: () => void; // Aseguramos que 'parentMethod' sea una función sin parámetros que no retorna nada
}

export const Link: React.FC<LinkProps> = ({label, parentMethod}) => {
    return (
        <a className="customLink" onClick={parentMethod}>{ label }</a> )};