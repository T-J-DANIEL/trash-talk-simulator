import { useRef, useState, useCallback, useEffect } from "react"
import { useGlobalContext } from "../../context"
const useTimer = () => {
    const { gameStarted, gameEnded, gameState, gameRunning,endGame } =
      useGlobalContext()
    const [renderedStreamDuration, setRenderedStreamDuration] =
        useState("3:00"),
      //the duration that is displayed
      streamDuration = useRef(180),
      //the actual time elapsed??
      previousTime = useRef(0),
      //the previous time before current update, (used to find real interval duration)
      requestAnimationFrameId = useRef(null)
      // ,
      // //ref used later for the repeating update function 
      // [isStartTimer, setIsStartTimer] = useState(false),
      // //timer started or not state  
      // [isStopTimer, setIsStopTimer] = useState(false),
      // //timer stopped or not state  
      // [isPauseTimer, setIsPauseTimer] = useState(false),
      // //timer paused or not state 
      // [isResumeTimer, setIsResumeTimer] = useState(false)
      //timer resumed or not state  

    const updateTimer = useCallback(() => {
      //useCallback hook basically caches the function so it does not need to be created each time, note it returns function not the value, the dependancy array dictates what changes cause it do be redefined between renders. So in this case it only defines the function once on mount and then never again??
      let now = performance.now()
      //high precision time origin of document (page load or other) returned in format "44697.80000000028"
      //maybe switch to date.now()???
      let dt = now - previousTime.current
      //actual interval duration taking into account any delay??
      //so "44697.80000000028 - 0 = 44697.80000000028 at beginning"
      if (dt >= 1000) {
        //if time between intervals is greater or equal to 1000
        streamDuration.current = streamDuration.current - Math.round(dt / 1000)
        //add the dt value converted to seconds and rounded to nearest integer to the timer duration and set this as stream duration.current
        // = 0 + 44.7
        const formattedStreamDuration = new Date(streamDuration.current * 1000)
          .toISOString()
          .slice(15, 19) //substr is deprecated,replaced: ".substr(11,8)"
        //new date object using a timestamp of the current time,then formatted into iso format and trimmed to 8 digits referring to time
        //newDate(44700) > Thu Jan 01 1970 01:00:44 GMT+0100 (Greenwich Mean Time)
        // .toISOString() >>> 1970-01-01T00:00:44.700Z
        //  .slice(11, 19) >>>>  00:00:44
        setRenderedStreamDuration(formattedStreamDuration)
        //change the output display timer to the calculated current time elapsed
        previousTime.current = now
        //overwrite previous time with the current time
      }
      
      requestAnimationFrameId.current = requestAnimationFrame(updateTimer)
      if (!streamDuration.current) {
        // cancelAnimationFrame(requestAnimationFrameId.current)
        // setRenderedStreamDuration("3:00")
        // endGame()
        stopHandler()
      }
      //request animation frame runs the given callback function repeatedly only when the screen is ready to accept a new repaint,similar to setinterval but synced to monitor refresh
      //the assignment to a ref here means I can address it later to cancel it!!
    }, [])

    const startTimer = useCallback(() => {
      //starts the timer usecallback used so no need to redefine every time
      previousTime.current = performance.now()
      //sets the previous time to the current time right now (this is start point)
      requestAnimationFrameId.current = requestAnimationFrame(updateTimer)
      //starts the interval of updating the timer based on repaints
    }, [updateTimer])
    //we have a dependency of the updatetimer function because it only is redefined if the timer is running, so that the previous time can be updated????
    //so when timer is updating the MAYBE DONT NEED THIS????????

    useEffect(() => {
      if (gameState === "start" && gameRunning) {
        streamDuration.current = 180
        startTimer()
        // startHandler()
      }
      //if timer has been set to start and not to stop then start timer function
      if (gameState === "exit") {
        streamDuration.current = 0
        cancelAnimationFrame(requestAnimationFrameId.current)
        setRenderedStreamDuration("3:00")
        // stopHandler()
      }
      //if timer set to stop not start and set duration to 0 and cancel update and set display to 00.00...
      if (gameState === "pause" && !gameRunning) {
        pauseHandler()
      }
      if (gameState === "resume" && gameRunning) {
        resumeHandler()
      }
     
    }, [gameStarted, gameEnded, gameRunning,streamDuration])
    //checks the states of start stop and if timer function has fired

    // const startHandler = () => {
    //   setIsStartTimer(true)
    //   setIsStopTimer(false)
    // }
    //handler to set start to yes and stop to no
    const stopHandler = () => {
      // setIsStopTimer(true)
      // setIsStartTimer(false)
      // setIsPauseTimer(false)
      // setIsResumeTimer(false)
     cancelAnimationFrame(requestAnimationFrameId.current)
     setRenderedStreamDuration("3:00")
     endGame()
    }
    //handler to set start to no and stop to yes as well as pause and resume to no
    const pauseHandler = () => {
      // setIsPauseTimer(true)
      // setIsStartTimer(false)
      // setIsResumeTimer(false)
      cancelAnimationFrame(requestAnimationFrameId.current)
    }
    //handler to set pause to yes as well as start and resume to no
    //stops the update by cancelling the requestAnimationFrameId
    const resumeHandler = () => {
      // setIsResumeTimer(true)
      // setIsPauseTimer(false)
      startTimer()
    }
    //sets resume to yes and pause to no and starts timer function again
    return {
      renderedStreamDuration
    }
  }
export default useTimer

//TODO
//FINISH NOTES
//CHANGE TO COUNTDOWN

//CHOOSE DATE.NOW OR PERFORMANCE.NOW
//REMOVE BUTTON STATES?