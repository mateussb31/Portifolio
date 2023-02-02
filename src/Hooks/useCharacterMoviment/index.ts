import { EDirecao, ELinks, X_ITEM,WIDTH_PERSONAGEM } from './../../settings/constants.ts';
import useEventListener from "@use-it/event-listener";
import { useState } from "react";



export default function useCharacterMoviment(posicaoInicial) {
    const [posicao, mudancaDePosicao] = useState(posicaoInicial)
    const [direcao, mudancaDeDirecao] = useState(EDirecao.RIGHT)
    useEventListener('keydown', (event: any) => {
        event.preventDefault()
        switch (event.key) {
            case EDirecao.RIGHT:
                if (posicao.x + WIDTH_PERSONAGEM/3 < (ELinks.length+1)* X_ITEM / 3) {
                    console.log(ELinks.length)
                    mudancaDePosicao({ x: posicao.x + 5, y: posicao.y })
                    mudancaDeDirecao(EDirecao.RIGHT)
                    window.scroll({ left: posicao.x * 2 })
                }
                break;
            case EDirecao.LEFT:
                if (posicao.x > 0) {
                    mudancaDePosicao({ x: posicao.x - 5, y: posicao.y })
                    mudancaDeDirecao(EDirecao.LEFT)
                    window.scroll({ left: posicao.x * 2 })
                    console.log(posicao.x)
                }
                break;
            case EDirecao.UP:
                if (posicao.y < window.innerHeight * 8 / 100)
                    mudancaDePosicao({ x: posicao.x, y: posicao.y + 5 })
                break;
            case EDirecao.DOWN:
                if (posicao.y > 0)
                    mudancaDePosicao({ x: posicao.x, y: posicao.y - 5 })
                break;
            case EDirecao.UP && EDirecao.RIGHT:
                mudancaDePosicao({ x: posicao.x + 5, y: posicao.y + 5 })
                break;
        }

    })
    return {

        posicao: posicao,
        direcao: direcao
    }
}
