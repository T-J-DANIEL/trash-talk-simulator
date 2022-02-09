import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
const Settings = () => {
  const {
    setPlaying,
    setTimerExists,
    setTimerRunning,
    setResetTimer,
    mountPaused,
    mountRunning,
    newPhrases,
    pauseGame,
    resumeGame,
    startGame,
    endGame,
    showSettings,
    setShowSettings,
  } = useGlobalContext()
  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="settings-inner-container">
        <button
          onClick={() => {
            setShowSettings((prev) => !prev)
          }}
        >
          X
        </button>
        <h1>Settings</h1>
        <div className="settings-button-container">
          <button onClick={() => mountRunning()}>
            Load New Timer (running)
          </button>
          <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
          <button onClick={() => setTimerExists(false)}>Remove Timer</button>
          <button onClick={() => setTimerRunning(true)}>Play</button>
          <button onClick={() => setTimerRunning(false)}>Pause</button>
          <button onClick={() => setResetTimer(true)}>Reset</button>
          <button onClick={newPhrases}>newPhrases</button>
          <button onClick={pauseGame}>Pause Game</button>
          <button onClick={resumeGame}>Resume Game</button>
          <button onClick={startGame}>Start Game</button>
          <button onClick={endGame}>End Game</button>
          <button
            className="pause-button"
            onClick={() => {
              setPlaying((prev) => !prev)
            }}
          >
            Pause/play
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Settings
