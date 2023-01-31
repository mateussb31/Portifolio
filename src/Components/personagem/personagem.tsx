import React from "react";
import './estilo.css'
import useCharacterMoviment from "../../Hooks/useCharacterMoviment/index.ts";
import { EDirecao } from "../../settings/constants.ts";
import { HEIGHT_PERSONAGEM, WIDTH_PERSONAGEM } from "../../settings/constants.ts";
import useVerifyPosition from "../../Hooks/useVerifyPosition/index.ts";


interface IProps {
    position: { x: number; y: number }
}


const Personagem = (props: IProps) => {
    const { posicao, direcao } = useCharacterMoviment(props.position)
    const {estado} = useVerifyPosition(posicao)
    return (
        <div style={{
            bottom: 3 * posicao.y,
            left: 3 * posicao.x,
            position: 'absolute'
        }}>
            <div className="texto"
                style={{
                    height:70,
                    width:200,
                    display:`${estado === true? "inline-block" : "none"}`,
                    position:"relative",
                    zIndex:1,
                    left:90,
                    top:110,

                }}>Deseja visualizar este projeto? </div>
            <div
                style={{
                    height: HEIGHT_PERSONAGEM,
                    width: WIDTH_PERSONAGEM,
                    background: `url(${require("./../images/HERO.png")})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    animation: "animacao 0.7s steps(4) infinite",
                    transform: `scaleX(${direcao === EDirecao.RIGHT ? 1 : -1})`,
                    zIndex: 1
                }}
            />
        </div>
    )
}

export default Personagem