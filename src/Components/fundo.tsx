import React from "react";
import Personagem from "./personagem.tsx";
import './estilo.css'
import { Y_CHAO, Y_TAPETE } from "../settings/constants.ts";

const Chao = () => {
  return (
    <div className="chao"
      style={{
        backgroundColor: "#ea1744",
        height: Y_CHAO,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="tapete"
        style={{
          backgroundColor: "#dd4b1a",
          height: Y_TAPETE,
          width: '95%',
          marginBottom: 'auto',
          marginTop: 'auto',
          borderStyle: "double",
          borderColor: "yellow",
          outlineColor: "orange",
          outlineStyle: "dotted",
          outlineOffset: -15
        }}
      >
      </div>
    </div>
  )
}

// const Janelas = () => {
//   return (
//     <div className="Janelas" style={{
//       backgroundImage: `url(${require('./images/parede.jpg')})`,
//       backgroundSize:48,
//       width: '100%',
//       height: window.innerHeight - Y_CHAO,
//       position: "absolute",
//       bottom: 200,
//       display: "flex",
//       justifyContent:"center",
//       alignItems:"center"
//     }}>
//       <img style={{
//         width:130,
//         height:100,
        
//       }} 
//       src={require('./images/janela2.png')} alt="janela" />
      
//     </div>
//   )
// }

const Fundo = () => {
  return (
    <div>
      <Chao />
      <Personagem />
    </div>
  )
}
export default Fundo