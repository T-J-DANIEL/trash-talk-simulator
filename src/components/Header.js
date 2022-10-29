import React, { useState } from "react"
import { GameTimer } from "./GameTimer"
import { useGlobalContext } from "../context"
const Header = () => {
  const { timerExists, score, highScore, newHigh, streakArray } =
    useGlobalContext()
  return (
    <div className="header">
      {/* <div> Percentage Match :{0}</div> */}
      <div>
        {timerExists ? <GameTimer /> : <h1>Shakespearean Roast Battle</h1>}
        {/* {gameState===!"paused"&&<Settings} */}
      </div>
      <div className="score-streak-container">
        <div className="">Score: {score}</div>
        <div className="flex">
          <div>Streak:</div>
          <div className="">{streakArray}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
