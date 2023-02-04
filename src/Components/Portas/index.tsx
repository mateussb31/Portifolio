import React from "react";
const Porta = (props : any) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../images/porta.png")})`,
            position:"absolute",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            bottom:'22vh',
            width:375,
            height:375,
            left:(0.7*window.innerWidth)*props.posicao
        }}></div>
    )
}
export default Porta