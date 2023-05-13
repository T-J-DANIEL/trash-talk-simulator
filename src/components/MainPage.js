import { useState, useEffect, useRef } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./header/Header"
// import Modal from "./modals/Modal"
import ScoreStreak from "./ScoreStreak"
import StartGameModal from "./modals/start/StartGameModal"
import GameOverModal from "./modals/gameOver/GameOverModal"
import PortraitOnly from "./PortraitOnly"
import { GameTimer } from "./GameTimer"
import MobileKeyboard from "./mobileKeyboard/MobileKeyboard"
//components imported
// import ReactPlayer from "react-player"
// //react youtube player npm package
// import music from "../sounds/music.mp3"
import { useGlobalContext } from "../context"

import PauseGameModal from "./modals/pause/PauseGameModal"

const MainPage = () => {
  //change this for autoplay
  const {
    isYeOlde,
    setIsYeOlde,
    showPauseScreen,
    pauseResume,
    yeOldeVid,
    ogGamerVid,
    isNewGame,
    gameRunning,
    gameEnded,
    // oppAttackTimer,
    timerId,
    start,
    remaining,
    gameState,
    displaySettings,
    button_pop,
    button_push,
    isSoundOn,
  } = useGlobalContext()
  //imported state properties

  return (
    <div
      className="main-container"
      // tabIndex={0}
      // onBlur={() => {
      //   if (gameRunning && !gameEnded) {
      //     displaySettings()
      //   }
      // }}
    >
      {/* optionally render startgame or endgame screen depending on state values */}
      {isNewGame && <StartGameModal />}
      {gameEnded && <GameOverModal />}
      {showPauseScreen && <PauseGameModal />}

      {/* Displays message overlay if device is in portrait or height is lower than supported */}
      {/* <PortraitOnly /> */}
      <Header />
      <div className="secondary-container">
        <Opponent />
        <UserInput />
        {/* <div className="timer"></div> */}
      <MobileKeyboard/>
      </div>

      {/* <div className="vid-container">
        </div> */}
      {/* <ReactPlayer
          // ref={vidRef}
          muted={false}
          loop={true}
          // playing={playing}
          playing={false}
          controls={false}
          // url="https://www.youtube.com/watch?v=8kY7-TZMRJw"
          url={music}
          width="0%"
          height="0%"
          volume="0.1"
          // onPause={setPlaying(true)}
        /> */}

      {/* <div className="vid-cover"></div> */}
      {/* vid container contains the vid background user input and opponent with an  */}
      {/* <div className="settings">
        <div className="dev-box"> 
          <button
            onClick={gameRunning ? oppAttackTimer("pause") : oppAttackTimer("resume")}
          >
            Pause/Play Opp
          </button> */}
      {/* <p>status : {gameState}</p>
          <p>start time : {start}</p>
          <p>remaining time : {parseInt(remaining, 10)}</p>
        </div>
        <div className="settings-button">
          <button
            className="button settings-button"
            onClick={displaySettings}
            onMouseDown={isSoundOn ? button_pop : undefined}
            onMouseUp={isSoundOn ? button_push : undefined}
          >
            Pause <br /> Settings (Esc)
          </button>
        </div> */}

      {/* pause button and show settings */}
      {/* </div> */}
    </div>
  )
}

export default MainPage
