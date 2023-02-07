import React from "react";
const Placa = (props :any) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../images/placa.png")})`,
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            backgroundPositionY:20,
            width:180,
            height:170,
            textAlign: "center",
            fontFamily:"VT323",
            fontSize:"1.7rem",
            color:"white",
            verticalAlign:"10px",
            order:props.posicao,
            alignSelf:"end"
        }}> <span style={{display:"inline-block",verticalAlign:"middle", marginTop:"35%"}}> {props.nome}</span></div>
    )
}
export default Placa