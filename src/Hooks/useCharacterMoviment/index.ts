import { EDirecao, ELinks, X_ITEM,WIDTH_PERSONAGEM } from './../../settings/constants';
import useEventListener from "@use-it/event-listener";
import { useState } from "react";



export default function useCharacterMoviment(posicaoInicial : any) {
    const [posicao, mudancaDePosicao] = useState(posicaoInicial)
    const [direcao, mudancaDeDirecao] = useState(EDirecao.RIGHT)
    useEventListener('keydown', (event: any) => {
        event.preventDefault()
        switch (event.key) {
            case EDirecao.RIGHT:
                if (posicao.x + WIDTH_PERSONAGEM/3 < (ELinks.length+1)* X_ITEM / 3) {
                    mudancaDePosicao({ x: posicao.x + 3, y: posicao.y })
                    mudancaDeDirecao(EDirecao.RIGHT)
                    window.scroll({ left: posicao.x * 3 })
                }
                break;
            case EDirecao.LEFT:
                if (posicao.x > 0) {
                    mudancaDePosicao({ x: posicao.x - 3, y: posicao.y })
                    mudancaDeDirecao(EDirecao.LEFT)
                    window.scroll({ left: posicao.x * 3 })
                }
                break;
            case EDirecao.UP:
                if (posicao.y < window.innerHeight * 7 / 100)
                    mudancaDePosicao({ x: posicao.x, y: posicao.y + 3 })
                break;
            case EDirecao.DOWN:
                if (posicao.y > 0.01*window.innerHeight)
                    mudancaDePosicao({ x: posicao.x, y: posicao.y - 3 })
                break;
        }

    })
    return {

        posicao: posicao,
        direcao: direcao
    }
}
