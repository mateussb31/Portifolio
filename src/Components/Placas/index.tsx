import React from "react";
const Placa = (props) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../images/placa.png")})`,
            position:"absolute",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            bottom:'15vh',
            width:120,
            height:120,
            left:(0.8*window.innerWidth)+(props.posicao-1)*0.6*window.innerWidth,
            zIndex:1,
            textAlign: "center",
            fontFamily:"VT323",
            fontSize:"1rem",
            paddingTop:25,
            color:"white",
        }}>  {props.nome}</div>
    )
}
export default Placa