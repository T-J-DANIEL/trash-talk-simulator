import { useState,useEffect,useRef } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./Header"
import ReactPlayer from "react-player/youtube"
import Settings from "./Settings"
import ScoreStreak from "./ScoreStreak"
import { useGlobalContext } from "../context"
const MainPage = () => {
  const [playing, setPlaying] = useState(true)
  //change this nephew
    const {
      isYeOlde,
      setIsYeOlde,
      showSettings,
      setShowSettings,
      yeOldeVid,
      ogGamerVid,
      comboChain,
      setComboChain,
    } = useGlobalContext()
    const vidRef = useRef(null)
    useEffect(
      ()=>{
        vidRef.current.seekTo(300, 'seconds')
      },[]
    )
  return (
    <>
      <div className="grid-container">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </div>
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
        <button
          onClick={() => {
            setShowSettings((prev) => !prev)
          }}
        >
          {showSettings ? "X" : "Settings"}
        </button>
        {showSettings && <Settings />}
      </div>
       <ScoreStreak />
    </>
  )
}

export default MainPage
