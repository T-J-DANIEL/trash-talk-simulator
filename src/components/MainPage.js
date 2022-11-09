import { useState, useEffect, useRef } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./Header"
import Settings from "./Settings"
import ScoreStreak from "./ScoreStreak"
import StartGame from "./StartGame"
import EndGame from "./EndGame"
//components imported
// import ReactPlayer from "react-player"
// //react youtube player npm package
// import music from "../sounds/music.mp3"
import { useGlobalContext } from "../context"
const MainPage = () => {
  
  //change this for autoplay
  const {
    isYeOlde,
    setIsYeOlde,
    showSettings,
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
    isSoundOn
  } = useGlobalContext()
  //imported state properties

 

  return (
    <>
      <div className="background-image"></div>
      {isNewGame && <StartGame />}
      {/* optionally render startgame or endgame screen depending on state values */}
      {gameEnded && <EndGame />}
      {showSettings && <Settings />}
      <Header />

      <div className="vid-container">
        <Opponent />
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

        <div className="vid-cover"></div>
        <UserInput />
      </div>
      {/* vid container contains the vid background user input and opponent with an  */}
      <div className="settings">
        <div className="dev-box">
          {/* 
          <button
            onClick={gameRunning ? oppAttackTimer("pause") : oppAttackTimer("resume")}
          >
            Pause/Play Opp
          </button> */}
          <p>status : {gameState}</p>
          <p>start time : {start}</p>
          <p>remaining time : {parseInt(remaining, 10)}</p>
        </div>

        <button
          onClick={displaySettings}
          onMouseDown={isSoundOn && button_pop}
          onMouseUp={isSoundOn && button_push}
        >
          Pause
        </button>

        {/* pause button and show settings */}
      </div>
    </>
  )
}

export default MainPage
