import React from "react";
import { EDeco } from "../../settings/constants.ts";
const Decoracao = (props) => {

    return (
        <div style={{
            backgroundImage:`url(${require("../../Components/images/"+EDeco[props.tipo].url)})`,
            position:"absolute",
            backgroundRepeat:"no-repeat",
            backgroundSize:EDeco[props.tipo].tamanho,
            bottom:EDeco[props.tipo].margem,
            width:EDeco[props.tipo].width,
            height:EDeco[props.tipo].height,
            left:(EDeco[props.tipo].distancia*window.innerWidth)+(props.posicao-1)*0.6*window.innerWidth,
            zIndex:EDeco[props.tipo].zindex
        }}></div>
    )
}
export default Decoracao