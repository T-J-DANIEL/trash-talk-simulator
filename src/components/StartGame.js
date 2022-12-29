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
    setShowHowTo,
    isMusicOn,
    setIsMusicOn,
    setIsSoundOn,
    isCapsLockOn,
    setIsCapsLockOn,
  } = useGlobalContext()
  return (
    <div className="overlay-container">
      {isFirstGame && (
        <div className="modal-container">
          <div className="title-container">
            <h1 className="modal-heading title">Shakespearean Wit </h1>
            <h3 className="tagline">A typing game</h3>
          </div>
          <br />
          <h2 className="tagline">Created by Tim Daniel</h2>
          <br />
          <div className="button-container">
            <button
              className="button start-button first"
              // onMouseDown={isSoundOn && button_pop}
              // onMouseUp={isSoundOn && button_push}
              onClick={(e) => {
                setIsFirstGame(false)
              }}
            >
              Play!
            </button>
          </div>
        </div>
      )}
      {!isFirstGame && (
        <div className="modal-container">
          <div className="title-container">
            <h1 className="modal-heading title">Shakespearean Wit </h1>
            <h3 className="tagline">A typing game</h3>
          </div>
          {showHowTo && (
            <div className="modal-section">
              <h2 className="modal-sub-heading ">How to play?</h2>
              <ul className="ruleset">
                <li>Deliver your retort faster than the fool!</li>
                <hr />
                <li>
                  <strong>Press enter</strong> at 85% accuracy to get partial
                  points.
                </li>
                <hr />
                <li>Get 100% accuracy to get full points.</li>
                <hr />
                <li>Build up a streak of 100% scores for extra points.</li>
                <hr />
                <li className="mobile-hidden">
                  Press escape to pause/unpause the game.
                </li>
              </ul>
              <div className="button-container">
                <button
                  onClick={() => {
                    setShowHowTo(false)
                  }}
                  className="button nav-button"
                >
                  Back
                </button>
              </div>
            </div>
          )}
          {!showHowTo && (
            <>
              <div className="modal-section">
                <div className="button-container">
                  <button
                    onClick={() => {
                      setShowHowTo(true)
                    }}
                    className="button nav-button"
                  >
                    How to play?
                  </button>
                </div>
                <div className="sound-flex">
                  <h2>Sound:</h2>
                  <div>
                    <label
                      className="button-container label"
                      htmlFor="soundOnOff"
                    >
                      <span className="label-text">Effects </span>
                      <input
                        type="checkBox"
                        id="soundOnOff"
                        onMouseDown={!isSoundOn && button_pop}
                        onMouseUp={!isSoundOn && button_push}
                        checked={isSoundOn}
                        onChange={() => {
                          setIsSoundOn(!isSoundOn)
                        }}
                      />
                    </label>
                    <label
                      className="button-container label"
                      htmlFor="musicOnOff"
                    >
                      <span className="label-text">Music</span>
                      <input
                        type="checkBox"
                        id="musicOnOff"
                        onMouseDown={!isMusicOn && button_pop}
                        onMouseUp={!isMusicOn && button_push}
                        checked={isMusicOn}
                        onChange={() => {
                          setIsMusicOn(!isMusicOn)
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-section difficulty-buttons">
                <h2 className="modal-sub-heading ">Select Difficulty</h2>
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
                      level === "normal"
                        ? "selected-button"
                        : "unselected-button"
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
                      level === "extreme"
                        ? "selected-button"
                        : "unselected-button"
                    } shakespearean`}
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
                onClick={(e) => {
                  setIsNewGame(false)
                  // e.getModifierState("CapsLock")
                  //   ? console.log("true")
                  //   : console.log("false")
                  e.getModifierState("CapsLock")
                    ? setIsCapsLockOn(true)
                    : setIsCapsLockOn(false)
                  startGame()
                }}
              >
                Start
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default StartGame
