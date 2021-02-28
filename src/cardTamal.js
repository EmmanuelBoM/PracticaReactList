import React from 'react';
import './cardTamal.css';

function Card(props){
    
    //Comprobacion de detalles. Si es dulce, se le asigna la clase pink-tag. Si es picante, se le asigna la clase red-tag
    const isDulce = ()=>{
        return(props.details=="dulce");
    }
    const clasif = isDulce() ? 'pink-tag' : 'red-tag';

    return(
        <div className="contenedor">
            <div className="header">
                <h4 className="nombre">{props.name}</h4>
                <div className={clasif}><p>{props.details}</p></div>
            </div>
            <p className="precio">{props.price}</p>
        </div>
    )
}

export default Card;