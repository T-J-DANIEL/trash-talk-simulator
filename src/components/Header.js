import React, { useState } from "react"
import { GameTimer } from "./GameTimer"
import { useGlobalContext } from "../context"
import Timer from "simple-circle-timer"
const Header = () => {
  const {
    timerExists,
    score,
    highScore,
    newHigh,
    streakArray,
    displaySettings,
    isSoundOn,
    button_pop,
    button_push,
    showSettings,
    timerRunning,
    setTimerRunning,
    resetTimer,
    setResetTimer,
    endGame,
  } = useGlobalContext()
  return (
    <div className="header-container">
      <div className="header">
        {/* {timerExists ? <GameTimer /> : <h1>Shakespearean Wit</h1>} */}

        {/* {gameState===!"paused"&&<Settings} */}

        <div className="header-component">
          <h2 className="modal-sub-heading">Score</h2>
          <div>{score}</div>
        </div>
        <div className="header-component gameTimer">
          <GameTimer />
          <button
            className="button settings-button"
            onClick={displaySettings}
            onMouseDown={isSoundOn ? button_pop : undefined}
            onMouseUp={isSoundOn ? button_push : undefined}
          >
            {!showSettings ? "Pause" : "Game Paused"}
          </button>
        </div>
        <div className="header-component">
          <h2 className="modal-sub-heading">Streak</h2>
          {<div className="">{streakArray ? streakArray : "-"}</div>}
        </div>
      </div>
    </div>
  )
}

export default Header
