import { useState } from "react"
import Timer from "simple-circle-timer"
import { useGlobalContext } from "../context"
const GameTimer = () => {
  const {
    timerExists,
    timerRunning,
    setTimerRunning,
    resetTimer,
    setResetTimer,
  } = useGlobalContext()
  return (
    <div className="timer">
      {timerExists ? (
        <Timer
          running={timerRunning}
          setRunning={setTimerRunning}
          reset={resetTimer}
          setReset={setResetTimer}
          minutes="0.5"
          size="0"
          fontSize="2rem"
        />
      ) : null}
    </div>
  )
}

const TimerFunctions = () => {
  const {
    timerExists,
    setTimerExists,
    timerRunning,
    setTimerRunning,
    resetTimer,
    setResetTimer,
    mountPaused,
    mountRunning,
  } = useGlobalContext()
  return (
    <div className="timer-functions">
      <button onClick={() => mountRunning()}>Load New Timer (running)</button>
      <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
      <button onClick={() => setTimerExists(false)}>Remove Timer</button>
      <button onClick={() => setTimerRunning(true)}>Play</button>
      <button onClick={() => setTimerRunning(false)}>Pause</button>
      <button onClick={() => setResetTimer(true)}>Reset</button>
    </div>
  )
}

export { GameTimer, TimerFunctions }
