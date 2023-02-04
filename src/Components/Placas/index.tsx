import React from "react";
const Placa = (props :any) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../images/placa.png")})`,
            position:"absolute",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            bottom:'15vh',
            width:180,
            height:180,
            left:(0.93*window.innerWidth)+(props.posicao-1)*0.7*window.innerWidth,
            zIndex:1,
            textAlign: "center",
            fontFamily:"VT323",
            fontSize:"1.7rem",
            paddingTop:37.5,
            color:"white",
        }}>  {props.nome}</div>
    )
}
export default Placa