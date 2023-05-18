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
import { useGlobalContext } from "../context"

import PauseGameModal from "./modals/pause/PauseGameModal"

const MainPage = () => {
  //change this for autoplay
  const {
    showPauseScreen,
    isNewGame,
    gameEnded,
  } = useGlobalContext()
  //imported state properties

  return (<>
    {isNewGame && <StartGameModal />}
    {gameEnded && <GameOverModal />}
    {showPauseScreen && <PauseGameModal />}
    {/* <div className="main-container">
      {/* <PortraitOnly /> */}
      {/* Displays message overlay if device is in portrait or height is lower than supported */}
      <Header />
      <Opponent />
      <UserInput />
      {/* <div className="secondary-container">
      
      
      </div> */}
      <MobileKeyboard />
     {/* </div> */}
  </>)
}

export default MainPage
