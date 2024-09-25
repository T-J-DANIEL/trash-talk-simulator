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
            className="hide-keyboard-key"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 115.02 55.69"
              className="keyb"
            >
              <defs>
                <clipPath id="clip-path">
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-1" />
                </clipPath>
                <style>
                  {
                    ".cls-1,.cls-2{fill:#fff}.cls-1,.cls-5{stroke:#fff;stroke-miterlimit:10}.cls-3{clip-path:url(#clip-path)}.cls-5{fill:none}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <path
                    d="M4.64 1.4A3.17 3.17 0 0 0 1.4 4.64v46.41a3.17 3.17 0 0 0 3.24 3.24h105.74a3.17 3.17 0 0 0 3.24-3.24V4.64a3.17 3.17 0 0 0-3.24-3.24Z"
                    className="cls-3"
                    style={{
                      strokeWidth: "1.8px",
                      stroke: "#fff",
                      fill: "#fff",
                    }}
                  />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M28.54 40a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64H86.2a.63.63 0 0 0 .65-.64V40.6a.63.63 0 0 0-.65-.6Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M91 40a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h14.85a.63.63 0 0 0 .65-.64V40.6a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M9.07 40a.63.63 0 0 0-.64.64v5.63a.63.63 0 0 0 .64.64h14.85a.63.63 0 0 0 .65-.64V40.6a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M39.06 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M28.68 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M9.07 29.58a.63.63 0 0 0-.64.64v5.63a.63.63 0 0 0 .64.64h14.85a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M49.44 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M59.82 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M70.2 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M80.58 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M91 29.58a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h15a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M34.45 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M24.07 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M9.07 19.2a.63.63 0 0 0-.64.64v5.63a.63.63 0 0 0 .64.64h10.24a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M44.83 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M55.21 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M65.59 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M76 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M86.35 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64H92a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M96.73 19.2a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64H106a.63.63 0 0 0 .65-.64v-5.63a.63.63 0 0 0-.65-.64Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M59.56 8.82a.63.63 0 0 0-.64.64v5.63a.63.63 0 0 0 .64.64h5.63a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M49.47 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M39.37 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64H45a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M29.27 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M19.17 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.63a.63.63 0 0 0 .64-.64V9.46a.63.63 0 0 0-.64-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M9.07 8.82a.63.63 0 0 0-.64.64v5.63a.63.63 0 0 0 .64.64h5.63a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M69.66 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.63a.63.63 0 0 0 .64-.64V9.46a.63.63 0 0 0-.64-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M79.76 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M89.86 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-2" />
                  <g className="cls-3">
                    <path
                      d="M100 8.82a.63.63 0 0 0-.65.64v5.63a.63.63 0 0 0 .65.64h5.62a.63.63 0 0 0 .65-.64V9.46a.64.64 0 0 0-.65-.65Z"
                      className="cls-1"
                    />
                  </g>
                  <path d="M.5.5h114.02v54.69H.5z" className="cls-5" />
                </g>
              </g>
            </svg>
          </button>
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
