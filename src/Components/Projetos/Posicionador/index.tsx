import React from "react";
import { ELinks } from "../../../settings/constants.ts";
import Quadro from "../Projeto/index.tsx";
import Decoracao from "../../Decoracao/index.tsx";
import { EDeco } from "../../../settings/constants.ts";
function getLinksMap(){
    const projetosArray=[];
    const decoArray=[];
    for( let item = 1; item < ELinks.length+1; item++ ){
            projetosArray.push(<Quadro posicao={item}/>)
            decoArray.push(<Decoracao posicao={item} tipo={Math.floor(Math.random()*EDeco.length)}/>)
        
    }
    return [projetosArray,decoArray]
}
function Posicionador(){
    const [item,item2]= getLinksMap()
    return <div>
            {item}
            {item2}
        </div>
}
export default Posicionador