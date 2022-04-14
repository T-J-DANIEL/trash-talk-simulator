
import Timer from "simple-circle-timer"
// npm timer package
import { useGlobalContext } from "../context"

//this is the game timer component, it uses state values to set various properties
const GameTimer = () => {
  const {
    timerExists,
    timerRunning,
    setTimerRunning,
    resetTimer,
    setResetTimer,
    endGame,
  } = useGlobalContext()
  return (
    <div className="timer">
      {timerExists ? (
        <Timer
          running={timerRunning}
          setRunning={setTimerRunning}
          reset={resetTimer}
          setReset={setResetTimer}
          minutes="5"
          size="0"
          fontSize="2rem"
          onComplete={endGame}
          completeMsg="Vanquished!"
        />
      ) : null}
    </div>
  )
}

//this is the timer functions component that holds all functions to control the timer 
const TimerFunctions = () => {
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
  } = useGlobalContext()
  return (
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
  )
}

export { GameTimer, TimerFunctions }
