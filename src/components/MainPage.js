import UserInput from "./user/UserInput"
import Opponent from "./opponent/Opponent" 
import Header from "./header/Header"
// import Modal from "./modals/Modal"
// import ScoreStreak from "./user/ScoreStreak"
import StartGameModal from "./modals/start/StartGameModal"
import GameOverModal from "./modals/GameOverModal"
import PortraitOnly from "./modals/PortraitOnly"
import MobileKeyboard from "./mobileKeyboard/MobileKeyboard"
//components imported
// import ReactPlayer from "react-player"
// //react youtube player npm package
// import music from "../sounds/music.mp3"
import useGameState from "../hooks/useGameState"
import { useGlobalContext } from "../context"

import PauseGameModal from "./modals/pause/PauseGameModal"
// import useMobileCheck from "../useMobileCheck"
const MainPage = () => {
  
  const { showPauseScreen, isNewGame, gameEnded,setShowMobileKeyboard, showMobileKeyboard } =
    useGlobalContext()
  //imported state properties
  
  useGameState()
  // useMobileCheck()
  return (
    <>
      <PortraitOnly />
      {/* Displays message overlay if device in portrait or height is lower than supported */}
      {isNewGame && <StartGameModal />}
      {gameEnded && <GameOverModal />}
      {showPauseScreen && <PauseGameModal />}
      <div className="responsive-container">
        <Header />
        <div className="text-bubbles-container">
          <Opponent />
          <UserInput />
          <button
            onClick={() => {
              setShowMobileKeyboard((prev) => !prev)
            }}
            className={`show-keyboard-key ${!showMobileKeyboard&&"hide-keyboard-key"}`}
            // className="show-keyboard-key"
          ></button>
          {/* <ScoreStreak/> */}
        </div>
        {/* {showMobileKeyboard ? (
          <button
            onClick={() => {
              setShowMobileKeyboard(false)
            }}
            className="show-keyboard-key"
          >
            Open mobile keyboard
          </button>
        ):(
          ) } */}

        <MobileKeyboard />
      </div>
    </>
  )
}

export default MainPage
