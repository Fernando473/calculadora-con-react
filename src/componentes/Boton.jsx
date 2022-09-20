import React from "react";
import "../estilos/Boton.css"





const Boton = (props) => {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== ".") && (valor !== "=")
    };

    
    if(esOperador(props.children)){
        return (
            <div
                className="boton-contenedor operador"
                onClick={() => props.manejarClick(props.children)}>  {/* Siempre se debe hacer un llamado a una funcion, no a su valor */}
                {props.children}
            </div>
        );
    }else{
        return (
            <div
                className="boton-contenedor"
                onClick={() => props.manejarClick(props.children)}>  {/* Siempre se debe hacer un llamado a una funcion, no a su valor */}
                {props.children}
            </div>
        );
    }
}

export default Boton;