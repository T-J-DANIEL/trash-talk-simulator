import { useState,useEffect,useRef } from "react"
import UserInput from "./UserInput"
import Opponent from "./Opponent"
import Header from "./Header"
import Settings from "./Settings"
import ScoreStreak from "./ScoreStreak"
import StartGame from "./StartGame"
import EndGame from "./EndGame"
//components imported
import ReactPlayer from "react-player/youtube"
//react youtube player npm package

import { useGlobalContext } from "../context"
const MainPage = () => {
  const [playing, setPlaying] = useState(false)
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
      st,
    } = useGlobalContext()
    // useEffect(() => {console.log(st)}, [st])
    //imported state properties
    const vidRef = useRef(null)
    //grab ref of the video
    // useEffect(
      //   ()=>{
        //     vidRef.current.seekTo(300, 'seconds')
        //   },[]
    // )
    //when page loads auto seek to 300 seconds
      useEffect(() => {
        console.log(st)
      }, [gameRunning])
  return (
    <>
      {isNewGame && <StartGame />}
      {/* optionally render startgame or endgame screen depending on state values */}
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
      {/* vid container contains the vid background user input and opponent with an  */}
      <div className="settings">
        <button className="pause-button" onClick={pauseResume}>
          Pause/play
        </button>
        {/* <button
          onClick={() => {
            setIsYeOlde((prev) => !prev)
          }}
        >
          Ye Olde
        </button> */}
        {/* </div>
      <div> */}
        <div className="dev-box">
          {/* <button
            onClick={gameRunning ? oppAttackTimer("pause") : oppAttackTimer("resume")}
          >
            Pause/Play Opp
          </button> */}
          <p>status : {st}</p>
          <p>start time : {start}</p>
          <p>remaining time : {parseInt(remaining,10)}</p>
        </div>

        <button onClick={pauseResume}>|||</button>
        {showSettings && <Settings />}
        {/* pause button and show settings */}
      </div>
      {/* <ScoreStreak /> */}
    </>
  )
}

export default MainPage
