import React from "react";
import { ELinks } from "../../settings/constants";
import Porta from "../../Components/Portas/index";
import Decoracao from "../../Components/Decoracao/index";
import Placa from "../../Components/Placas/index";
import { EDeco } from "../../settings/constants";

export function GetLinksMap() {


    const elementosArray = []
    for (let item = 1; item < (ELinks.length + 1) * 2; item++) {
        if (item % 2 === 0) {
            elementosArray.push(<Porta key={item} posicao={item} />)

            elementosArray.push(<Placa posicao={item + 1} nome={ELinks[item / 2 - 1]?.nome} />)
        }
        else
            elementosArray.push(<Decoracao key={item} posicao={item} tipo={Math.floor(Math.random() * EDeco.length)} />)
    }

    return [elementosArray]
}

function Posicionador() {
    const divs = GetLinksMap()[0].map(item => item)
    return <section style={{ display: "flex", alignItems: "end", height: "76vh", zIndex: 1, position: "absolute", left: 0.3 * window.innerWidth }}>
        {divs}
    </section>
    // return <section style={{display:"flex", alignItems:"end", height:"76vh", gap:115,zIndex:1, position:"absolute", left:"20vw"}}>
    //  {coisas}  

    // </section>
}
export default Posicionador