import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
//settings component accessed by clicking hamburger button
const Settings = () => {
  //all these timer methods and timer state values  are imported from context
  const {
    // setPlaying,
    // setTimerExists,
    // setTimerRunning,
    // setResetTimer,
    // mountPaused,
    // mountRunning,
    newPhrases,
    // startGame,
    endGame,
    displaySettings,
    setShowSettings,
    button_pop,
    button_push,
    isSoundOn,
    setIsSoundOn,
    isMusicOn,
    setIsMusicOn,
    confirmClose,
    setConfirmClose,
    setIsCapsLockOn,
  } = useGlobalContext()
  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="modal-container ">
        {confirmClose && (
          <><div className="modal-section">
            <h1 className="modal-heading">End Game?</h1>
            <div className="button-container">
              <button
                className="button nav-button"
                onClick={() => {
                  setConfirmClose(false)
                  endGame()
                  setShowSettings(false)
                }}
              >
                Yes
              </button>
              <button className="button nav-button" onClick={()=>{
                setConfirmClose(false)
                // displaySettings()
              }}>
                No
              </button>
            </div>
          </div></>
        )}
        {!confirmClose && (
        <><div className="modal-section">
          <h1 className="modal-heading">Paused</h1>
          <div className="button-container">
            <button
              className="button nav-button"
              onClick={e=>{
                
      e.getModifierState("CapsLock")
        ? setIsCapsLockOn(true)
        : setIsCapsLockOn(false)
                displaySettings()
              }}
              onMouseDown={isSoundOn && button_pop}
              onMouseUp={isSoundOn && button_push}
            >
              Resume
            </button>
            <button
              className="button nav-button"
              onClick={() => {
                setConfirmClose(true)
              }}
              onMouseDown={isSoundOn && button_pop}
              onMouseUp={isSoundOn && button_push}
            >
              End Game
            </button>
          </div>
        </div>
        <div className="modal-section">
          <h2 className="modal-heading">Sound</h2>
          <div className="button-container">
            {/* <button onClick={() => mountRunning()}>
              Load New Timer (running)
            </button> */}
            {/* <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
            <button onClick={() => setTimerExists(false)}>Remove Timer</button>
            <button onClick={() => setTimerRunning(true)}>Play</button>
            <button onClick={() => setTimerRunning(false)}>Pause</button>
            <button onClick={() => setResetTimer(true)}>Reset</button> */}
            {/* <button
              onClick={newPhrases}
              onMouseDown={isSoundOn && button_pop}
              onMouseUp={isSoundOn && button_push}
            >
              newPhrases
            </button> */}
            {/* <button onClick={startGame}>Start Game</button> */}
            <label className="button-container label" htmlFor="soundOnOff">
              <span className="label-text">Effects  </span>            
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
            <label className="button-container label" htmlFor="musicOnOff">
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
        </div></>)}
      </div>
    </div>,
    document.body
  )
}

export default Settings
