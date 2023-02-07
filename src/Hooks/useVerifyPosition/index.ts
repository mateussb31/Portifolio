
import { WIDTH_PERSONAGEM, ALTURA_IMAGEM_PERSONAGEM, WIDTH_ITEM_CENARIO } from './../../settings/constants';
import useEventListener from '@use-it/event-listener';

import { ELinks, WIDTH_PORTA } from '../../settings/constants';


export default function useVerifyPosition(cordenadasPersonagem: { x: number, y: number }) {

    
    var visivel = false
    
    
    var link = ""

    for (let cont = 1; cont < ELinks.length + 1; cont++) {
        if (
            cordenadasPersonagem.x * 3 + WIDTH_PERSONAGEM > 0.3*window.innerWidth+WIDTH_ITEM_CENARIO*cont+WIDTH_PORTA*(cont-1)+180*(cont-1)&&
            cordenadasPersonagem.x * 3 < 0.3*window.innerWidth+WIDTH_ITEM_CENARIO*cont+WIDTH_PORTA*(cont-1)+180*(cont-1) + WIDTH_PORTA &&
            cordenadasPersonagem.y * 3 + ALTURA_IMAGEM_PERSONAGEM > 0.2 * window.innerHeight
        ) {
            visivel = true
            link = ELinks[cont - 1].url
        }

    }



    useEventListener("keydown", (event: any) => {
        if (event.key === "Enter" && visivel)
            window.open(link)
    })
    return {
        estado: visivel
    }
}
