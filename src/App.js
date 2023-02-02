import React from "react";
import './App.css'
import Personagem from "./Components/personagem/personagem.tsx";
import Posiciona from "./Components/Projetos/Posicionador/index.tsx";
import { ELinks } from "./settings/constants.ts";
import './Fonts/FFFFORWA.TTF';
import Quadro from "./Components/Projetos/Projeto/index.tsx";
function App() {
  return (
    <div className="App">
      <div className="Board" style={{width:(`${ELinks.length}`*window.innerWidth)+0.4875*window.innerWidth}}>
        <Personagem position={{ x: 0, y: 10 }} />
        <Posiciona/>
        <Quadro></Quadro>
      </div>
    </div>
  )
}
export default App