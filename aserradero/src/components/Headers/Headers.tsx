import React from "react";
import "./Headers.css";

export function Headers({titulo, opcion}) {  return (
    <div className="container">
      <h1 className="header">{titulo}</h1>
      <div className="list">
        <div className="list-item">          
          {opcion}   
        </div>        
      </div>
    </div>
  );
}