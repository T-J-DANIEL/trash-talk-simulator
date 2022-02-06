import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
const Settings = () => {
  const {
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
    <div className="settings-container">
      <button
        onClick={() => {
          setShowSettings((prev) => !prev)
        }}
      >
        {showSettings ? "X" : "Settings"}
      </button>
      <div className="timer-functions">
        <button onClick={() => mountRunning()}>Load New Timer (running)</button>
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
      </div>
    </div>,
    document.body
  )
}

export default Settings
