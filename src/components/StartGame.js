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
    isFirstGame,
    setIsFirstGame,
    showHowTo, 
    setShowHowTo
  } = useGlobalContext()
  return (
    <div className="overlay-container">
      {isFirstGame && (
        <div className="modal-container mobile-view">
          <div className="title-container">
            <h1 className="modal-heading title">Shakespearean Wit </h1>
            <h3 className="tagline">A typing game</h3>
          </div>
          <div className="button-container">
            <button
              className="button start-button"
              // onMouseDown={isSoundOn && button_pop}
              // onMouseUp={isSoundOn && button_push}
              onClick={() => {
                setIsFirstGame(false)
              }}
            >
              Play!
            </button>
          </div>
        </div>
      )}
      {!isFirstGame && (
        <div className="modal-container mobile-view">
          <div className="title-container">
            <h1 className="modal-heading title">Shakespearean Wit </h1>
            <h3 className="tagline">A typing game</h3>
          </div>
          <div className="modal-section">
            <h2 className="modal-sub-heading ">How to play?</h2>
            <ul className="ruleset">
              <li>Deliver your retort faster than the fool!</li>
              <li>
                <strong>Press enter</strong> at 85% accuracy to get partial
                points.
              </li>
              <li>Get 100% accuracy to get full points.</li>
              <li>Build up a streak of 100% scores for extra points.</li>
              <li className="mobile-hidden">
                Press escape to pause/unpause the game.
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
                onMouseDown={isSoundOn && button_pop}
                onMouseUp={isSoundOn && button_push}
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
                onMouseDown={isSoundOn && button_pop}
                onMouseUp={isSoundOn && button_push}
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
                onMouseDown={isSoundOn && button_pop}
                onMouseUp={isSoundOn && button_push}
                onClick={(e) => {
                  changeDifficulty("hard")
                }}
              >
                Hard
              </button>
              <button
                onMouseDown={isSoundOn && button_pop}
                onMouseUp={isSoundOn && button_push}
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
            onMouseDown={isSoundOn && button_pop}
            onMouseUp={isSoundOn && button_push}
            onClick={() => {
              setIsNewGame(false)
              startGame()
            }}
          >
            Start
          </button>
        </div>
     )} 
    </div>
  )
}

export default StartGame
