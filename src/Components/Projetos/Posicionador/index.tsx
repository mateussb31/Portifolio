import React from "react";
import { ELinks } from "../../../settings/constants.ts";
import Quadro from "../Projeto/index.tsx";
function getLinksMap(){
    const projetosArray=[];
    for( let item = 0; item < ELinks.length-2; item++ ){
        projetosArray.push(<Quadro posicao={item}/>)
    }
    return projetosArray
}
function Posicionador(){
    const items= getLinksMap()
    return <div>
            {items}
        </div>
}
export default Posicionador