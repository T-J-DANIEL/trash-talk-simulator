import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
//component displayed at start of game only if 'isNewGame' is true, contains difficulty settings/user settings
//TODO not clear what difficulty is set, also opponent starts immediately after difficulty is set not when game starts
//also can add other user settings sound?, change layout its pretty badly spaced at the moment
const StartGame = () => {
  const {
    setIsNewGame,
    startGame,
    level,
    changeDifficulty,
    clickSound,
    isSoundOn,
    button_pop,
    button_push,
  } = useGlobalContext()
  return (
    <div className="overlay-container">
      <div className="modal-container">
        <h1 className="modal-heading">Shakespearean Wit: </h1>
        <h3 className="">A typing game</h3>
        <div className="modal-section">
        <h2 className="modal-sub-heading ">Rules:</h2>
          <ul>
            <li>Geteth poiunts</li>
            <li>Geteth poiunts</li>
            <li>Geteth poiunts</li>
            <li>Geteth poiunts</li>
          </ul>
        </div>
        <div className="modal-section">
          <h2 className="modal-sub-heading">Select Difficulty:</h2>
          <div className="button-container">
            <button
              className="button"
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              style={level === "easy" ? { backgroundColor: "green" } : {}}
              onClick={(e) => {
                changeDifficulty("easy")
              }}
            >
              Easy
            </button>
            <button
              className="button"
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              style={level === "normal" ? { backgroundColor: "green" } : {}}
              onClick={(e) => {
                changeDifficulty("normal")
              }}
            >
              Normal
            </button>
            <button
              className="button"
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              style={level === "hard" ? { backgroundColor: "green" } : {}}
              onClick={(e) => {
                changeDifficulty("hard")
              }}
            >
              Hard
            </button>
            <button
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              //TODO hide when mobile
              className="button mobile-hidden"
              style={level === "extreme" ? { backgroundColor: "green" } : {}}
              onClick={(e) => {
                changeDifficulty("extreme")
              }}
            >
              Shakespearean
            </button>
          </div>
        </div>
        <button
          className="button"
          onMouseDown={!isSoundOn && button_pop}
          onMouseUp={!isSoundOn && button_push}
          onClick={() => {
            setIsNewGame(false)
            startGame()
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  )
}

export default StartGame
