import { useGlobalContext } from "../../../context"
import ModalContainer from "../ModalContainer"
import HowToPlay from "./HowToPlay"
import CountDownScreen from "./CountDownScreen"
const MainStartScreen = () => {
  const {
    setIsNewGame,
    startGame,
    level,
    changeDifficulty,
    isSoundOn,
    buttonDownSound,
    buttonUpSound,
    showHowTo,
    setShowHowTo,
    isMusicOn,
    setIsMusicOn,
    setIsSoundOn,
    setIsCapsLockOn,
    startCountDown,
    countDownMode,
  } = useGlobalContext()
  return (
    <>
      {showHowTo && <HowToPlay />}
      {countDownMode && <CountDownScreen />}
      {!showHowTo && !countDownMode && (
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
                      onMouseDown={!isSoundOn && buttonDownSound}
                      onMouseUp={!isSoundOn && buttonUpSound}
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
                      onMouseDown={!isMusicOn && buttonDownSound}
                      onMouseUp={!isMusicOn && buttonUpSound}
                      checked={isMusicOn}
                      onChange={() => {
                        setIsMusicOn(!isMusicOn)
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <hr className="menu-separator" />
          </div>
          <div className="modal-section difficulty-buttons">
            <h2 className="modal-sub-heading ">Select Difficulty</h2>
            <div className="button-container difficulty-set-height">
              <button
                className={`button ${
                  level === "easy"
                    ? "selected-button selected-easy"
                    : "unselected-button"
                }`}
                onMouseDown={isSoundOn && buttonDownSound}
                onMouseUp={isSoundOn && buttonUpSound}
                onClick={(e) => {
                  changeDifficulty("easy")
                }}
              >
                Easy
              </button>
              <button
                className={`button ${
                  level === "normal"
                    ? "selected-button selected-normal"
                    : "unselected-button"
                }`}
                onMouseDown={isSoundOn && buttonDownSound}
                onMouseUp={isSoundOn && buttonUpSound}
                onClick={(e) => {
                  changeDifficulty("normal")
                }}
              >
                Normal
              </button>
              <button
                className={`button ${
                  level === "hard"
                    ? "selected-button selected-hard"
                    : "unselected-button"
                }`}
                onMouseDown={isSoundOn && buttonDownSound}
                onMouseUp={isSoundOn && buttonUpSound}
                onClick={(e) => {
                  changeDifficulty("hard")
                }}
              >
                Hard
              </button>
            </div>
            <div className="button-container difficulty-set-height  mobile-hidden">
              <button
                onMouseDown={isSoundOn && buttonDownSound}
                onMouseUp={isSoundOn && buttonUpSound}
                //TODO hide when mobile
                className={`button shakespearean-button ${
                  level === "shakespearean"
                    ? "selected-shakespearean"
                    : "unselected-button"
                } `}
                onClick={(e) => {
                  changeDifficulty("shakespearean")
                }}
              >
                Shakespearean
              </button>
            </div>
          </div>
          <hr className="menu-separator" />
          <div className="modal-section">
            <button
              className="button start-button"
              onMouseDown={isSoundOn && buttonDownSound}
              onMouseUp={isSoundOn && buttonUpSound}
              onClick={(e) => {
                // setIsNewGame(false)
                // e.getModifierState("CapsLock")
                //   ? console.log("true")
                //   : console.log("false")
                e.getModifierState("CapsLock")
                  ? setIsCapsLockOn(true)
                  : setIsCapsLockOn(false)
                // startGame()
                startCountDown()
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
