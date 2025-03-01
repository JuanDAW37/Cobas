import './Link.css';

interface Props{
    label:string
    parentMethod:()=>void
}

export const Link = ({label, parentMethod}:Props) => {
    return (
        <a className="customLink" onClick={parentMethod}>{ label }</a> )};