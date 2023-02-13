import React, { useState } from "react"
import { GameTimer } from "./GameTimer"
import TestGameTimer from "./header/TestGameTimer"
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
    lives,
    timerRunning,
    setTimerRunning,
    resetTimer,
    setResetTimer,
    endGame,
    isCapsLockOn,
    setIsCapsLockOn,
    testGameTimer,
  } = useGlobalContext()
  return (
    <div className="header-container">
      {" "}
      <div className="header">
        {/* {timerExists ? <GameTimer /> : <h1>Shakespearean Wit</h1>} */}

        {/* {gameState===!"paused"&&<Settings} */}

        {/* <div className="header-component"></div> */}
        <div className="header-component gameTimer">
          <TestGameTimer/>
          {/* <GameTimer /> */}
          <button
            className="button settings-button"
            onClick={(e) => {
              e.getModifierState("CapsLock")
                ? setIsCapsLockOn(true)
                : setIsCapsLockOn(false)
              displaySettings()
              //pauseGame()
            }}
            onMouseDown={isSoundOn ? button_pop : undefined}
            onMouseUp={isSoundOn ? button_push : undefined}
          >
            {!showSettings ? `| |` : "Paused"}
          </button>
        </div>
        <div className="header-component">
          <h2 className="modal-sub-heading">Streak</h2>
          {<div className="">{streakArray ? streakArray : "-"}</div>}
          <h2 className="modal-sub-heading">Score</h2>
          <div>{score}</div>
          <div className="button-container">
            {Array.from({ length: [lives] }).map((_) => (
              <div className="lives-left"></div>
            ))}
            {Array.from({ length: [3 - lives] }).map((_) => (
              <div className="lives-left lives-lost"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
