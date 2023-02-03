import { WIDTH_PERSONAGEM, ALTURA_IMAGEM_PERSONAGEM } from './../../settings/constants.ts';
import useEventListener from '@use-it/event-listener';
import { ELinks, X_ITEM,TAMANHO_PORTA } from '../../settings/constants.ts';
export default function useVerifyPosition(cordenadasPersonagem: { x: number, y: number }) {
    var visivel = false
    var link = ""
    for(let cont = 1; cont< ELinks.length+1; cont++){
        if (
            cordenadasPersonagem.x * 3 + WIDTH_PERSONAGEM > cont*X_ITEM &&
            cordenadasPersonagem.x * 3 < cont*X_ITEM + TAMANHO_PORTA &&
            cordenadasPersonagem.y * 3 + ALTURA_IMAGEM_PERSONAGEM > 0.2*window.innerHeight
        ) {
            visivel = true
            link = ELinks[cont-1].url
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
