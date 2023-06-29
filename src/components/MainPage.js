import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./header/Header"
// import Modal from "./modals/Modal"
import ScoreStreak from "./ScoreStreak"
import StartGameModal from "./modals/start/StartGameModal"
import GameOverModal from "./modals/gameOver/GameOverModal"
import PortraitOnly from "./PortraitOnly"
import MobileKeyboard from "./mobileKeyboard/MobileKeyboard"
//components imported
// import ReactPlayer from "react-player"
// //react youtube player npm package
// import music from "../sounds/music.mp3"
import useGameState from "../hooks/useGameState"
import { useGlobalContext } from "../context"

import PauseGameModal from "./modals/pause/PauseGameModal"
import mobileCheck from "../mobileCheck"
const MainPage = () => {
  
  const { showPauseScreen, isNewGame, gameEnded } = useGlobalContext()
  //imported state properties
  useGameState()
  mobileCheck()
  return (
    <>
      <PortraitOnly />
      {/* Displays message overlay if device is in portrait or height is lower than supported */}
      {isNewGame && <StartGameModal />}
      {gameEnded && <GameOverModal />}
      {showPauseScreen && <PauseGameModal />}
      <div className="responsive-container">
        <Header />
        <div className="text-bubbles-container">
          <Opponent />
          <UserInput />
        </div>
        <MobileKeyboard />
      </div>
    </>
  )
}

export default MainPage
