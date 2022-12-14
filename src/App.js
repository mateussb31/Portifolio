import React from "react";
import Fundo from "./Components/fundo.tsx";
import { Y_CHAO } from "./settings/constants.ts";
import './App.css'

function App() {
  return (
    <div className="App"
      >
      <div
        style={{
          backgroundImage:`url(${require('./Components/images/parede.jpg')})`,
          height:Y_CHAO,
          width:'100%',
          position:"relative"
        }}
        >
      <Fundo/>
      </div>
    </div>
  )
}
export default App