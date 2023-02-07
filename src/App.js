import React from "react";
import './App.css'
import Personagem from "./Components/personagem/personagem.tsx";
import Posiciona from "./Hooks/usePositionElements/index.tsx";
import Chao from "./Components/Chao/index.tsx";
import {  WIDTH_TELA } from "./settings/constants";
function App() {
  return (
    <div className="App">
      <div className="Board" style={{ width:WIDTH_TELA }}>
        <Personagem position={{ x: 0, y: 10 }} />
        <Posiciona />
        <Chao />
      </div>
    </div>
  )
}
export default App