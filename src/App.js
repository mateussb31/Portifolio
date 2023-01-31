import React from "react";
import './App.css'
import Personagem from "./Components/personagem/personagem.tsx";
import Posiciona from "./Components/Projetos/Posicionador/index.tsx";
import { ELinks } from "./settings/constants.ts";

function App() {
  return (
    <div className="App">
      <div className="Board" style={{width:(`${ELinks.length}`*1300)+705}}>
        <Personagem position={{ x: 10, y: 10 }} />
        <Posiciona/>
      </div>
    </div>
  )
}
export default App