
import Timer from "simple-circle-timer"
// npm timer package
import { useGlobalContext } from "../context"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

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
          minutes="3"
          size={80}
          fontSize="var(--timer-size)"
          onComplete={endGame}
          completeMsg="Vanquished!"
          fillColor="rgb(53, 207, 53)"
          bgColor="rgb(49, 52, 49)"
        />
      ) : null}
    </div>
  )
}
// <CountdownCircleTimer
//             isPlaying
//             size={100}
//             duration={7}
//             colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//             colorsTime={[7, 5, 2, 0]}
//             onComplete={() => [true, 15]}
//           >
//             {({ remainingTime }) => remainingTime}
//           </CountdownCircleTimer>

//this is the timer functions component that holds all functions to control the timer 
const TimerFunctions = () => {
  const {
    setTimerExists,
    setTimerRunning,
    setResetTimer,
    mountPaused,
    mountRunning,
    newPhrases,
    pauseResume,
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
      <button onClick={pauseResume}>Pause Game</button>
      <button onClick={startGame}>Start Game</button>
      <button onClick={endGame}>End Game</button>
    </div>
  )
}

export { GameTimer, TimerFunctions }
