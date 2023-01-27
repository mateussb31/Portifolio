import { EDirecao } from './../../settings/constants.ts';
import useEventListener from "@use-it/event-listener";
import { useState } from "react";


export default function useCharacterMoviment(posicaoInicial) {
    const [posicao, mudancaDePosicao] = useState(posicaoInicial)
    const [direcao, mudancaDeDirecao] = useState(EDirecao.RIGHT)
    useEventListener('keydown', (event:any) => {
        switch (event.key) {
            case  EDirecao.RIGHT:
                mudancaDePosicao({ x: posicao.x + 5, y: posicao.y })
                mudancaDeDirecao(EDirecao.RIGHT)
                break;
            case EDirecao.LEFT:
                mudancaDePosicao({ x: posicao.x - 5, y: posicao.y })
                mudancaDeDirecao(EDirecao.LEFT)
                break;
            case EDirecao.UP:
                mudancaDePosicao({ x: posicao.x, y: posicao.y + 5 })
                break;
            case EDirecao.DOWN:
                mudancaDePosicao({ x: posicao.x, y: posicao.y - 5 })
                break;
        }
    })
    return{
        
        posicao:posicao,
        direcao:direcao
    }
}
