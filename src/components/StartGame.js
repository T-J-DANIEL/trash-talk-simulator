import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
//component displayed at start of game only if 'isNewGame' is true, contains difficulty settings/user settings
//TODO not clear what difficulty is set, also opponent starts immediately after difficulty is set not when game starts
//also can add other user settings sound?, change layout its pretty badly spaced at the moment
const StartGame = () => {
    const { setIsNewGame, startGame, level, changeDifficulty } =
      useGlobalContext()
    return (
      <div className="overlay-container">
        <div className="start-game-inner-container">
          <h1>Rules</h1>
          <p>
            curse thy opponent as quickly as thine be capable, build up thine
            combo to geteth extra points.
          </p>
          <button
            onClick={() => {
              setIsNewGame(false)
              startGame()
            }}
          >
            start game
          </button>
        </div>
      
        <button
          onClick={(e) => {
            changeDifficulty("easy")
          }}
        >
          easy
        </button>
        <button
          onClick={(e) => {
            changeDifficulty("normal")
          }}
        >
          normal
        </button>
        <button
          onClick={(e) => {
            changeDifficulty("hard")
          }}
        >
          hard
        </button>
      </div>
    )
}

export default StartGame