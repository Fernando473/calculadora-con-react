import React from "react";
import "../estilos/Pantalla.css"
 
const Pantalla = ({ input }) => {
    return (
        <div className="input">
            {input}
        </div>
    );
}

export default Pantalla;