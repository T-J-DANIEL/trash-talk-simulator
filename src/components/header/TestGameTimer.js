import React, { useState, useEffect } from "react"
// import { useGlobalContext } from "../../context"

// //   Timer:
// //   inital value, interval to update ewvery second,on pause we remove interval on resukme we readd interval
// const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60 * 10 * 1000
// const INTERVAL_IN_MILISECONDS = 100
// const TestGameTimer = () => {
//   const { isNewGame, gameEnded,gameState } = useGlobalContext()
//   const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN)
//   const [referenceTime, setReferenceTime] = useState(Date.now())

//   useEffect(() => {
//     const countDownUntilZero = () => {
//       setTime((prevTime) => {
//         if (prevTime <= 0) return 0

//         const now = Date.now()
//         const interval = now - referenceTime
//         setReferenceTime(now)
//         return prevTime - interval
//       })
//     }

//     setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS)
//   }, [isNewGame, time])

//     return <>
//       <h2> {(time/1000).toFixed(1)}s</h2> 
//     </>;
// }

// here>>>>>>>>>>>>>>>>>>>>>>>>>
//   const decrementGameTimer = () => {
//     setTestGameTimer((prev) => prev - 1)
//   }
//   let interval
//   const newInterval = () => {
//     interval = setInterval(() => {
//       setTestGameTimer((prev) => prev - 1)
//     }, 1000)
//   }
//   const stopInterval = () => {
//     clearInterval(interval)
//   }
//   useEffect(() => {
//     if (!isNewGame) {
//       newInterval()
//     }
//     // if (gameState === "resume") {
//     //   newInterval()
//     // }
//     if (gameState === "pause") {
//       stopInterval()
//     }
//     return () => clearInterval(interval)
//   }, [isNewGame, gameEnded, gameState])
//   return <h2>{testGameTimer}</h2>
// }
import useTimer from "./test"
const TestGameTimer = () =>{
  const {renderedStreamDuration} = useTimer()
  return <p className="timer">{renderedStreamDuration}</p>
}
export default TestGameTimer

// flow
//render at 00:00;))
//at mount stream duration is 0 prev is 0
//ony start button enabled
//pressing start button fires startHandler which means timer start true and stop false 
//this is picked up by useffect and caises startTIMer() to be fired
//this setrs the prevTime to performance now and starts the update
//