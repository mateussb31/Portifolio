import React from "react";
import Fundo from "./Components/fundo.tsx";
import Quadro from "./Components/quadros.tsx";
import { Y_CHAO } from "./settings/constants.ts";
import './App.css'
import Personagem from "./Components/personagem.tsx";

function App() {
  return (
    <div className="App"
      >
      {/* <div
        style={{
          backgroundImage:`url(${require('./Components/images/parede.jpg')})`,
          height:Y_CHAO,
          width:'100%',
          position:"relative"
        }}
        >
      <Fundo/>
      </div> */}
      <Personagem position={{x:10,y:10}} />
      <Quadro/>
    </div>
  )
}
export default App