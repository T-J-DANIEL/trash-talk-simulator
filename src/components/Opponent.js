import { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../context"
import Feather from "./Feather"
//component for the opponent text display
const Opponent = () => {
  const {
    opponentPhrase,
    oppAttack,
    responseTime,
    currentPhrase,
    userAttacked,
    setUserAttacked,
    gameRunning,
    // oppAttackTimer,
    oppAttackSuccess,
    gameEnded,
    level,
    remaining
  } = useGlobalContext()

  //if a successful attack is initiated then we add the animate class to opponent (shake and color red)
  const attackClasses = `opponent ${oppAttack ? "animate" : ""}`
  const textClasses = ` ${gameRunning ? `${level} play` : `${level} pause`}`
  // TODO need to add opp attacked animation based on userAttacked
  // diff classes for each level

  return (
    <div className={attackClasses}>
      {userAttacked && (
        <div className="hitMarker">
          <div className="clock-hand clock">
            <div></div>
            <div></div>
          </div>
          <div className="clock-hand anti">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="opp-user-container">
        <div className="op-avatar">
          <img
            src="https://i.pinimg.com/236x/a0/21/9d/a0219dd7fe12d9142e576ed3cfad1b10--dutch-republic-famous-men.jpg"
            alt=""
          />
        </div>
        <div>user{level}: </div>
      </div>
      <div
      //TODO ADDED a div here around p tag is this better?
        className={
          !gameEnded &&
          `${
            oppAttackSuccess
              ? "successfulAttack"
              : userAttacked
              ? "animate"
              : `opp-text-animation ${level}`
          } ${!gameRunning && `paused`} `
        }
      >
        <p>{opponentPhrase}</p>
      </div>
      <Feather/>
      {/* <img src="quill2 copy.svg" alt="quill"  /> */}
      <span>
        {/* {oppAttackSuccess===true
          ? "ATTACKED"
          : `${gameRunning} ${level}`} */}
        {`${gameRunning} ${level}`}
        {`${oppAttackSuccess}`}
      </span>
    </div>
  )
}

export default Opponent
