import { useGlobalContext } from "../../../context"
import ModalContainer from "../ModalContainer"
import HowToPlay from "./HowToPlay"

const MainStartScreen = () => {
  const {
    setIsNewGame,
    startGame,
    level,
    changeDifficulty,
    isSoundOn,
    button_pop,
    button_push,
    showHowTo,
    setShowHowTo,
    isMusicOn,
    setIsMusicOn,
    setIsSoundOn,
    setIsCapsLockOn,
  } = useGlobalContext()
  return (
    <>
      {showHowTo && <HowToPlay />}
      {!showHowTo && (
        <>
          <div className="modal-section">
            <div className="title-container">
              <h1 className="modal-heading title">Shakespearean Wit </h1>
              <h3 className="tagline">A typing game</h3>
            </div>

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
            <hr className="menu-separator" />
            <div className="modal-section">
              <div className="sound-flex">
                <h2 className="modal-sub-heading">Sounds:</h2>
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
            <hr className="menu-separator"/>
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
                } shakespearean`}
                onClick={(e) => {
                  changeDifficulty("extreme")
                }}
              >
                Shakespearean
              </button>
            </div>
          </div>
                <hr className="menu-separator"/>
          <div className="modal-section">
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
              START
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default MainStartScreen
