import React, { useState } from "react";
import './estilo.css'
import useEventListener from "@use-it/event-listener";
import { Y_PERSONAGEM } from '../settings/constants.ts'

const posicaoInicial = {
    x: 100,
    y: Y_PERSONAGEM * 1
}
const direcaoInicial='DIREITA'

const Personagem = () => {
    const [posicao, mudancaDePosicao] = useState(posicaoInicial);
    const [direcao, mudancaDeDirecao] = useState(direcaoInicial)
    useEventListener('keydown', (event)=>{
        switch(event.key){
            case 'ArrowRight':
                mudancaDePosicao({x:posicao.x+5,y:posicao.y})
                mudancaDeDirecao("DIREITA")
            break;
            case 'ArrowLeft':
                mudancaDePosicao({x:posicao.x-5,y:posicao.y})
                mudancaDeDirecao("ESQUERDA")
            break;
            case 'ArrowUp':
                mudancaDePosicao({x:posicao.x,y:posicao.y+5})
            break;
            case 'ArrowDown':    
                mudancaDePosicao({x:posicao.x,y:posicao.y-5})
            break;    
            }
    })
    return (
        <div
            style={{
                height: Y_PERSONAGEM,
                width: 48,
                backgroundImage: `url(${require("./images/HERO.png")})`,
                backgroundRepeat: "no-repeat",
                position: "absolute",
                left: posicao.x,
                bottom: posicao.y,
                animation: "animacao 0.7s steps(4) infinite",
                transform:`scaleX(${direcao === 'DIREITA'? 1:-1})`
            }}
        />
    )
}

export default Personagem