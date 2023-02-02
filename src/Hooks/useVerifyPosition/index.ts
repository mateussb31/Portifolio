import { WIDTH_PERSONAGEM, ALTURA_IMAGEM_PERSONAGEM } from './../../settings/constants.ts';
import useEventListener from '@use-it/event-listener';
import { ELinks } from '../../settings/constants.ts';
export default function useVerifyPosition(cordenadasPersonagem: { x: number, y: number }) {
    var visivel = false
    var link = ""
    for(let cont = 0; cont< ELinks.length; cont++){
        if (
            cordenadasPersonagem.x * 3 + WIDTH_PERSONAGEM > (0.4875*window.innerWidth)+cont*(0.9*window.innerWidth) &&
            cordenadasPersonagem.x * 3 < (0.4875*window.innerWidth)+cont*(0.9*window.innerWidth) + (0.16*window.innerWidth) &&
            cordenadasPersonagem.y * 3 + ALTURA_IMAGEM_PERSONAGEM > 0.2*window.innerHeight
        ) {
            visivel = true
            link = ELinks[cont]
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
