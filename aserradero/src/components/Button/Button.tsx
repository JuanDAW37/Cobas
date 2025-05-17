import React from 'react';
import "./Button.css";

interface Props{
    label:string
    parentMethod:(e:React.MouseEvent<HTMLButtonElement>)=>void,
    style:string
}

export const Button = ({label, parentMethod, style}:Props) => {
 
    return (
    <button className={style} onClick={parentMethod}>
    { label }
  </button> )
};