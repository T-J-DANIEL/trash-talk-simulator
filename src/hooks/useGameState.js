import {useCallback, useEffect } from "react"
import { useGlobalContext } from "../context"
const useGameState = () => {
  const {
    timerId,
    gameState,
    setGameState,
    responseTime,
    setStart,
    isSoundOn,
    // playOppWritingSound,
    setRemaining,
    remaining,
    start,
    isMusicOn,
    playMusic,
    oppAttackSuccess,
    setOppAttackSuccess,
    setIsInputDisabled,
    userAttacked,
    endGame,
    setLives,
    lives,
    failSound,
    newPhrases,
    setUserText,
    // exposedData,
    musicFunctions,
    setUserAttacked,
  } = useGlobalContext()

  // const updateTimer = useCallback(() => {}, [])
  //TODO

  useEffect(() => {
    switch (gameState) {
      case "start":
        timerId.current = setTimeout(() => {
          console.log("opp attack success")
          setGameState("oppSuccess")
          // opponentAttackPhase()e
        }, responseTime)
        setStart(Date.now())
        setRemaining(responseTime)
        // isSoundOn && playOppWritingSound()
        //timeout time is difficulty - 1
        //transition to panic phase and set panic state value
        break
      case "pause":
        clearTimeout(timerId.current)
        setRemaining(remaining - (Date.now() - start))
        // exposedData.pause()
        musicFunctions.pause()
        break
      case "resume":
        isMusicOn && playMusic()
        if (oppAttackSuccess) {
          timerId.current = setTimeout(() => {
            console.log("resumed")
            setOppAttackSuccess(false)
            setIsInputDisabled(false)
            newPhrases()
            setGameState("start")
            //start new scroll animation
          }, remaining)
        } else if (userAttacked) {
          //    TODO can make this into a function
          //timeout to end attack phase,set with remaining time
          timerId.current = setTimeout(() => {
            console.log("resumed")
            setUserAttacked(false)
            setIsInputDisabled(false)
            newPhrases()
            setGameState("start")
            //start new scroll animation
          }, remaining)
        } else {
          // isSoundOn && playOppWritingSound()
          timerId.current = setTimeout(() => {
            console.log("started opp attack?")
            setGameState("oppSuccess")
            // opponentAttackPhase()
          }, remaining)
        }
        setStart(Date.now())
        break
      case "oppSuccess":
        if (lives === 1) {
          endGame()
        } else setLives(lives - 1)
        // exposedData.stop()
        clearTimeout(timerId.current)
        //oppattack animation (pausable)
        setOppAttackSuccess(true)
        //disable use input (pause does not effect this)
        setIsInputDisabled(true)
        setStart(Date.now())
        setRemaining(2000)
        isSoundOn && failSound()
        timerId.current = setTimeout(() => {
          setOppAttackSuccess(false)
          setIsInputDisabled(false)
          newPhrases()
          setGameState("start")
          //reset user text
          setUserText("")
          //start new scroll animation
        }, 2000)
        break
      case "userSuccess":
        // exposedData.stop()
        //TODO REFACTOR into function
        clearTimeout(timerId.current)
        //userAttck animation (pausable)
        setUserAttacked(true)
        //opp has been attacked true
        //disable use input (pause does not effect this)
        setIsInputDisabled(true)
        setStart(Date.now())
        setRemaining(2000)
        timerId.current = setTimeout(() => {
          setUserAttacked(false)
          setIsInputDisabled(false)
          newPhrases()
          setGameState("start")
          //reset user text
          setUserText("")
          //start new scroll animation
        }, 2000)
        break
      case "exit":
        // setSt("exit")
        // exposedData.stop()
        musicFunctions.stop()
        setStart(0)
        setRemaining(0)
        clearTimeout(timerId.current)
        setOppAttackSuccess(false)
        setUserAttacked(false)
        //TODO shoudl this be in startgame?
        break
      default:
        return "error no status found"
    }
    //clear on unnmount
    return () => {
      clearTimeout(timerId.current)
    }
  }, [gameState])
}
export default useGameState

//TODO
//FINISH NOTES
//CHANGE TO COUNTDOWN

//CHOOSE DATE.NOW OR PERFORMANCE.NOW
//REMOVE BUTTON STATES?
