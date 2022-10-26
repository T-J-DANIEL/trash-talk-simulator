import React, { useState } from "react"
import {GameTimer} from "./GameTimer"
import { useGlobalContext } from "../context"
const Header = () => {
 const { timerExists, score, highScore, newHigh } = useGlobalContext()
  return (
    <div className="header">
      
      <div>
        score:{score} High score :{highScore}
      </div>
      
      <div>
        {timerExists ? <GameTimer /> : <h1>Shakespearean Roast Battle</h1>}
        {/* {gameState===!"paused"&&<Settings} */}
      </div>

      <div> Percentage Match :{0}</div>
    </div>
  )
}

export default Header
