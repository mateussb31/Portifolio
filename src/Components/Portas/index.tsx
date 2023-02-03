import React from "react";
const Porta = (props) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../images/porta.png")})`,
            position:"absolute",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            bottom:'20vh',
            width:300,
            height:300,
            left:(0.6*window.innerWidth)*props.posicao
        }}></div>
    )
}
export default Porta