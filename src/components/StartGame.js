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
      <div className="modal-container mobile-view">
        <div className="title-container">
          <h1 className="modal-heading title">Shakespearean Wit </h1>
          <h3 className="tagline">A typing game</h3>
        </div>
        <div className="modal-section">
          <h2 className="modal-sub-heading ">Rules:</h2>
          <ul className="ruleset">
            <li>
             Be the first with your insult
            </li>
            <li>
              Press enter if your insult is mostly correct (85%) press esc to pause/unpause
            </li>
            <li>
              If you are 100% correct you will auto submit
            </li>
            <li>
              build up your streak of 100 correct to gain more points
            </li>
            
          </ul>
        </div>
        <div className="modal-section">
          <h2 className="modal-sub-heading">Select Difficulty</h2>
          <div className="button-container">
            <button
              className={`button ${
                level === "easy" ? "selected-button" : "unselected-button"
              }`}
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              onClick={(e) => {
                changeDifficulty("easy")
              }}
            >
              Easy
            </button>
            <button
              className={`button ${
                level === "normal" ? "selected-button" : "unselected-button"
              }`}
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              onClick={(e) => {
                changeDifficulty("normal")
              }}
            >
              Normal
            </button>
            <button
              className={`button ${
                level === "hard" ? "selected-button" : "unselected-button"
              }`}
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
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
              className={`button mobile-hidden ${
                level === "extreme" ? "selected-button" : "unselected-button"
              }`}
              onClick={(e) => {
                changeDifficulty("extreme")
              }}
            >
              Shakespearean
            </button>
          </div>
        </div>
        <button
          className="button start-button"
          onMouseDown={!isSoundOn && button_pop}
          onMouseUp={!isSoundOn && button_push}
          onClick={() => {
            setIsNewGame(false)
            startGame()
          }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default StartGame
