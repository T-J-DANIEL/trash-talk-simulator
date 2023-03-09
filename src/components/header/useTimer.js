import { useRef, useState, useCallback, useEffect } from "react"
import { useGlobalContext } from "../../context"
const useTimer = () => {
  const { gameStarted, gameEnded, gameState, gameRunning, endGame } =
    useGlobalContext()
  const TIME_TO_COUNTDOWN_MS = 60 * 10 * 1000
  //starting duration constant
  const INTERVAL_IN_MILISECONDS = 100
  //interval between time changes
  const [time, setTime] = useState(TIME_TO_COUNTDOWN_MS)
  //timer value (starts at timer to countdown)
  const [referenceTime, setReferenceTime] = useState(Date.now())
  useEffect(() => {
    const countDownUntilZero = () => {
      setTime((prevTime) => {
        if (prevTime <= 0) return 0
        const now = Date.now()
        const interval = now - referenceTime
        setReferenceTime(now)
        return prevTime - interval
      })
    }

    setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS)
    //make this addressabel
  }, [time])
  // (time/1000).toFixed(1) = milliseconds to seconds and rounded up
  return {}
}

export default useTimer
