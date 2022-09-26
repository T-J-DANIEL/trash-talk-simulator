import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
//settings component accessed by clicking hamburger button
const Settings = () => {
  //all these timer methods and timer state values  are imported from context
  const {
    setPlaying,
    setTimerExists,
    setTimerRunning,
    setResetTimer,
    mountPaused,
    mountRunning,
    newPhrases,
    startGame,
    endGame,
    displaySettings,
  } = useGlobalContext()
  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="settings-inner-container">
        {/* TODO need to sort these buttons out and standardize all popups design */}
        <button onClick={displaySettings}>X</button>
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
          <button onClick={newPhrases}>newPhrases</button>
          {/* <button onClick={startGame}>Start Game</button> */}
          <button
            // onClick={() => {
            //   if (window.confirm("are you sure?")) {
            //     endGame()
            //   }
            //   displaySettings()
            // }}
            onClick={endGame}
          >
            End Game
          </button>
          <button>Sound </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Settings
