import { useState } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./Header"
import ReactPlayer from "react-player/youtube"
import Settings from "./Settings"
import { useGlobalContext } from "../context"
const MainPage = () => {
  const [playing, setPlaying] = useState(false)
  //change this nephew
    const { isYeOlde, setIsYeOlde,showSettings,setShowSettings } = useGlobalContext()
  return (
    <>
    <Header/>
      <div className="vid-container">
      <Opponent/>
        <ReactPlayer
          muted={true}
          loop={true}
          playing={playing}
          controls={false}
          url="https://www.youtube.com/watch?v=sVYyjr84ZXI"
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
        <button onClick={()=>{setShowSettings(prev=>!prev)}}>{showSettings?"X":"Settings"}</button>
        {showSettings&&<Settings/>}
      </div>
    </>
  )
}

export default MainPage
