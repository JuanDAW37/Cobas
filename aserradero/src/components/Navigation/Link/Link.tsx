import './Link.css';

export const Link = ({label, parentMethod}) => {
    return (
        <a className="customLink" onClick={parentMethod}>{ label }</a> )};