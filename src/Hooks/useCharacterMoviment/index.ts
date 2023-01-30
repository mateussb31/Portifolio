import { EDirecao } from './../../settings/constants.ts';
import useEventListener from "@use-it/event-listener";
import { useState } from "react";



export default function useCharacterMoviment(posicaoInicial) {
    const [posicao, mudancaDePosicao] = useState(posicaoInicial)
    const [direcao, mudancaDeDirecao] = useState(EDirecao.RIGHT)
    useEventListener('keydown', (event: any) => {
        switch (event.key) {
            case EDirecao.RIGHT:
                if (posicao.x < window.innerWidth) {
                    event.preventDefault()
                    mudancaDePosicao({ x: posicao.x + 5, y: posicao.y })
                    mudancaDeDirecao(EDirecao.RIGHT)
                    window.scroll({ left: posicao.x * 2 })
                }
                break;
            case EDirecao.LEFT:
                if (posicao.x > 0) {
                    event.preventDefault()
                    mudancaDePosicao({ x: posicao.x - 5, y: posicao.y })
                    mudancaDeDirecao(EDirecao.LEFT)
                    window.scroll({ left:posicao.x * 2})
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
        }
        
    })
    return {

        posicao: posicao,
        direcao: direcao
    }
}
