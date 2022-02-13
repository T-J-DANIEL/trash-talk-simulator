import { useState,useEffect,useRef } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./Header"
import ReactPlayer from "react-player/youtube"
import Settings from "./Settings"
import ScoreStreak from "./ScoreStreak"
import StartGame from "./StartGame"
import EndGame from "./EndGame"
import { useGlobalContext } from "../context"
const MainPage = () => {
  const [playing, setPlaying] = useState(false)
  //change this nephew
    const {
      isYeOlde,
      setIsYeOlde,
      showSettings,
      pauseGame,
      yeOldeVid,
      ogGamerVid,
      isNewGame,
      gameRunning,
      gameEnded,
    } = useGlobalContext()
    const vidRef = useRef(null)
    useEffect(
      ()=>{
        vidRef.current.seekTo(300, 'seconds')
      },[]
    )
  return (
    <>
      {isNewGame && <StartGame />}
      {gameEnded && <EndGame />}
      <Header />
      <div className="vid-container">
        <Opponent />
        <ReactPlayer
          ref={vidRef}
          muted={true}
          loop={true}
          playing={playing}
          controls={false}
          url={isYeOlde ? yeOldeVid : ogGamerVid}
          width="100%"
          height="100%"
          // onPause={setPlaying(true)}
        />
        <div className="vid-cover"></div>
        <UserInput />
      </div>
      <div className="settings">
        <button
          className="pause-button"
          onClick={() => {
            setPlaying((prev) => !prev)
          }}
        >
          Pause/play
        </button>
        <button
          onClick={() => {
            setIsYeOlde((prev) => !prev)
          }}
        >
          Ye Olde
        </button>
      </div>
      <div>
        <button onClick={pauseGame}>|||</button>
        {showSettings && <Settings />}
      </div>
      <ScoreStreak />
    </>
  )
}

export default MainPage
