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
  } = useGlobalContext()
  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="settings-inner-container">
        {/* TODO need to sort these buttons out and standardize all popups design */}
        <button
          onClick={displaySettings}
          onMouseDown={isSoundOn && button_pop}
          onMouseUp={isSoundOn && button_push}
        >
          RESUME
        </button>
        <h1>Settings</h1>
        <div className="settings-button-container">
          {/* <button onClick={() => mountRunning()}>
            Load New Timer (running)
          </button> */}
          {/* <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
          <button onClick={() => setTimerExists(false)}>Remove Timer</button>
          <button onClick={() => setTimerRunning(true)}>Play</button>
          <button onClick={() => setTimerRunning(false)}>Pause</button>
          <button onClick={() => setResetTimer(true)}>Reset</button> */}
          <button
            onClick={newPhrases}
            onMouseDown={isSoundOn && button_pop}
            onMouseUp={isSoundOn && button_push}
          >
            newPhrases
          </button>
          {/* <button onClick={startGame}>Start Game</button> */}
          <button
            // onClick={() => {
            //   if (window.confirm("are you sure?")) {
            //     endGame()
            //   }
            //   displaySettings()
            // }}
            onClick={() => {
              if (window.confirm("are you sure?")) {
                endGame()
                setShowSettings(false)
              }
            }}
            onMouseDown={isSoundOn && button_pop}
            onMouseUp={isSoundOn && button_push}
          >
            End Game
          </button>
          <label htmlFor="soundOnOff">
            Sound
            <input
              type="checkBox"
              id="soundOnOff"
              // onMouseDown={isSoundOn && button_pop}
              // onMouseUp={() => {
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
              checked={isSoundOn}
              onChange={() => {
                setIsSoundOn(!isSoundOn)
              }}
              //   isChecked ? playOff() : playOn()
              // }}
              // ()=>setIsSoundOn(!isSoundOn)
            />
          </label>
          <label htmlFor="musicOnOff">
            Music
            <input
              type="checkBox"
              id="musicOnOff"
              // onMouseDown={isSoundOn && button_pop}
              // onMouseUp={() => {
              onMouseDown={!isMusicOn && button_pop}
              onMouseUp={!isMusicOn && button_push}
              checked={isMusicOn}
              onChange={() => {
                setIsMusicOn(!isMusicOn)
              }}
              //   isChecked ? playOff() : playOn()
              // }}
              // ()=>setIsSoundOn(!isSoundOn)
            />
          </label>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Settings
