import React from "react";
import './estilo.css'
import { Y_PERSONAGEM } from '../settings/constants.ts'
import useCharacterMoviment from "../Hooks/useCharacterMoviment/index.ts";
import { EDirecao } from "../settings/constants.ts";


interface IProps {
    position: { x: number; y: number }
}


const Personagem = (props: IProps) => {
    const { posicao, direcao } = useCharacterMoviment(props.position)

    return (
        <div
            style={{
                height: 192,
                width: 96,
                background: `url(${require("./images/HERO.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                bottom: 3 * posicao.y,
                left: 3 * posicao.x,
                animation: "animacao 0.7s steps(4) infinite",
                transform: `scaleX(${direcao === EDirecao.RIGHT ? 1 : -1})`,
                zIndex:1
            }}
        />
    )
}

export default Personagem