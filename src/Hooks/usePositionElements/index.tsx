import React from "react";
import { ELinks } from "../../settings/constants.ts";
import Porta from "../../Components/Portas/index.tsx";
import Decoracao from "../../Components/Decoracao/index.tsx";
import Placa from "../../Components/Placas/index.tsx";
import { EDeco } from "../../settings/constants.ts";
function getLinksMap() {
    const projetosArray = [];
    const decoArray = [];
    const placasArray = [];
    for (let item = 1; item < ELinks.length + 1; item++) {
        projetosArray.push(<Porta posicao={item} />)
        decoArray.push(<Decoracao posicao={item} tipo={Math.floor(Math.random() * EDeco.length)} />)
        placasArray.push(<Placa posicao={item} nome={ELinks[item - 1].nome} />)
    }
    return [projetosArray, decoArray, placasArray]
}
function Posicionador() {
    const item = getLinksMap()
    return <div>
        {item}
    </div>
}
export default Posicionador