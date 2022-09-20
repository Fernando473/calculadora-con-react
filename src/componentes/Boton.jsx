import React from "react";
import "../estilos/Boton.css"

const esOperador = (valor) => {
    return isNaN(valor) && (valor != ".") && (valor != "=")
};

const Boton = (props) => {
    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? "operador":"".trimEnd()}`}
            onClick={() => props.manejarClick(props.children)}>  {/* Siempre se debe hacer un llamado a una funcion, no a su valor */}
            {props.children}
        </div>
    );
}

export default Boton;