import { useCallback, useEffect } from "react"
import { useGlobalContext } from "../context"
import EasySpeech from "easy-speech"
import { findAllByTestId } from "@testing-library/react"

EasySpeech.init({ maxTimeout: 5000, interval: 250 })
  .then(() => console.debug("load complete"))
  .catch((e) => console.error(e))
// var synthesis = window.speechSynthesis
// var utterance = new SpeechSynthesisUtterance("Hello World")

const useGameState = () => {
  const {
    setIsNewGame,
    opponentPhrase,
    userText,
    timerId,
    gameState,
    setGameState,
    responseTime,
    setStart,
    isSoundOn,
    // playOppWritingSound,
    endSound,
    setRemaining,
    remaining,
    start,
    isMusicOn,
    playMusic,
    oppAttackSuccess,
    setOppAttackSuccess,
    setIsInputDisabled,
    userAttackSuccess,
    endGame,
    setLives,
    lives,
    failSound,
    button_push,
    newPhrases,
    setUserText,
    setUserAttackSuccess,
    // exposedData,
    musicFunctions,
    panicMode,
    setPanicMode,
    setStreak,
    setCountDown,
    startGame,
    setCountDownMode,
    countDown,
    countDownMode,
    focusInput,
  } = useGlobalContext()

  const speakFunction = (value, pitchDiff = 0, rateDiff = 0) => {
    EasySpeech.speak({
      text: value,
      // voice: myLangVoice, // optional, will use a default or fallback
      pitch: 2 - pitchDiff,
      rate: 1.5 - rateDiff,
      volume: 1,
      // there are more events, see the API for supported events
      boundary: (e) => console.debug("boundary reached"),
    })
  }
  // const updateTimer = useCallback(() => {}, [])
  //TODO use another switch stament and eliminatge duplictaed fucntions, useusecallbacks and usemmos etc

  const speak = () => {
    console.log(userText)
    gameState === "oppSuccess"
      ? speakFunction(opponentPhrase)
      : speakFunction(userText.replaceAll("_", " "), 0.8, 0.5)
  }

 
  const countDownState3 = () => {
    timerId.current = setTimeout(() => {
      setCountDown("2")
      setGameState("countDown2")
    }, 1000)
    setStart(Date.now())
    setRemaining(1000)
    isSoundOn && button_push()
  }
  const countDownState2 = () => {
    timerId.current = setTimeout(() => {
      setCountDown("1")
      setGameState("countDown1")
    }, 1000)
    setStart(Date.now())
    setRemaining(1000)
    isSoundOn && button_push()
  }
  const countDownState1 = () => {
    timerId.current = setTimeout(() => {
      setCountDown("Go!")
      setGameState("countDownGo")
    }, 1000)
    setStart(Date.now())
    setRemaining(1000)
    isSoundOn && button_push()
  }
  const countDownStateGo = () => {
    timerId.current = setTimeout(() => {
      setCountDownMode(false)
      setGameState("start")
      setCountDown("3")
      startGame()
      setIsNewGame(false)
    }, 500)
    setStart(Date.now())
    setRemaining(1000)
    isSoundOn && endSound()
  }

  const startState = () => {
    //transition to panic phase
    timerId.current = setTimeout(() => {
      setPanicMode(true)
      setGameState("panic")
    }, responseTime - 1000)
    setStart(Date.now())
    setRemaining(responseTime - 1000)
  }

  const panicState = () => {
    //transition to oppSuccess phase (if user success does not occur)
    timerId.current = setTimeout(() => {
      setGameState("oppSuccess")
      setPanicMode(false)
    }, 1000)
    setStart(Date.now())
    setRemaining(1000)
  }

  const pauseState = () => {
    //clears whatever timeout(phase transition) is occurring,
    //updates remaining time value, so timer will countdown remaining time
    clearTimeout(timerId.current)
    setRemaining(remaining - (Date.now() - start))
    musicFunctions.pause()
    EasySpeech.pause()
  }

  const resumeState = () => {
    if (countDownMode && countDown === "3") {
      timerId.current = setTimeout(() => {
        setCountDown("2")
        setGameState("countDown2")
        isSoundOn && button_push()
      }, remaining)
    } else if (countDownMode && countDown === "2") {
      timerId.current = setTimeout(() => {
        setCountDown("1")
        setGameState("countDown1")
        isSoundOn && button_push()
      }, remaining)
    } else if (countDownMode && countDown === "1") {
      timerId.current = setTimeout(() => {
        setCountDown("Go!")
        setGameState("countDownGo")
        isSoundOn && button_push()
      }, remaining)
    } else if (countDownMode && countDown === "Go!") {
      timerId.current = setTimeout(() => {
        setCountDownMode(false)
        setGameState("start")
        startGame()
        setCountDown("3")
        setIsNewGame(false)
        isSoundOn && endSound()
      }, remaining)
    } else if (oppAttackSuccess) {
      isMusicOn && playMusic()
      EasySpeech.resume()
      timerId.current = setTimeout(() => {
        console.log("resumed")
        setOppAttackSuccess(false)
        setIsInputDisabled(false)
        newPhrases()
        setGameState("start")
        //start new scroll animation
      }, remaining)
    } else if (userAttackSuccess) {
      isMusicOn && playMusic()
      //    TODO can make this into a function
      //timeout to end attack phase,set with remaining time
      timerId.current = setTimeout(() => {
        console.log("resumed")
        setUserAttackSuccess(false)
        setIsInputDisabled(false)
        newPhrases()
        setGameState("start")
        //start new scroll animation
      }, remaining)
    } else if (panicMode) {
      isMusicOn && playMusic()
      // isSoundOn && playOppWritingSound()
      timerId.current = setTimeout(() => {
        console.log("opp attack success")
        setGameState("oppSuccess")
        setPanicMode(false)
        // opponentAttackPhase()
      }, remaining)
    } else {
      //start phase
      isMusicOn && playMusic()
      // isSoundOn && playOppWritingSound()
      timerId.current = setTimeout(() => {
        console.log("started opp attack?")
        setGameState("panic")
        // opponentAttackPhase()
      }, remaining)
    }
    setStart(Date.now())
  }

  const oppSuccessState = () => {
    speak()
    if (lives === 1) {
      setLives(0)
      //added this
      endGame()
    } else setLives(lives - 1)
    // exposedData.stop()
    clearTimeout(timerId.current)
    //oppattack animation (pausable)
    setOppAttackSuccess(true)
    //disable use input (pause does not effect this)
    setIsInputDisabled(true)
    setStreak(0)
    setStart(Date.now())
    setRemaining(2000)
    setPanicMode(false)
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
  }

  const userSuccessState = () => {
    // exposedData.stop()
    //TODO REFACTOR into function
    speak()
    clearTimeout(timerId.current)
    //userAttck animation (pausable)
    setUserAttackSuccess(true)
    //opp has been attacked true
    //disable use input (pause does not effect this)
    setIsInputDisabled(true)
    setStart(Date.now())
    setRemaining(2000)
    // panic mode testing
    setPanicMode(false)
    timerId.current = setTimeout(() => {
      setUserAttackSuccess(false)
      setIsInputDisabled(false)
      newPhrases()
      setGameState("start")
      //reset user text
      setUserText("")
      //start new scroll animation
    }, 2000)
  }

  const exitState = () => {
    // setSt("exit")
    // exposedData.stop()
    setIsInputDisabled(true)
    musicFunctions.stop()
    setStart(0)
    setRemaining(0)
    clearTimeout(timerId.current)
    setOppAttackSuccess(false)
    setUserAttackSuccess(false)
    //TODO shoudl this be in startgame?
  }

  useEffect(() => {
    switch (gameState) {
      case "countDown3":
        countDownState3()
        break
      case "countDown2":
        countDownState2()
        break
      case "countDown1":
        countDownState1()
        break
      case "countDownGo":
        countDownStateGo()
        break
      case "start":
        startState()
        break
      case "panic":
        panicState()
        break
      case "pause":
        pauseState()
        break
      case "resume":
        resumeState()
        break
      case "oppSuccess":
        oppSuccessState()
        break
      case "userSuccess":
        userSuccessState()
        break
      case "exit":
        exitState()
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
//  useEffect(() => {
//   switch (gameState) {
//     case "start":
//       timerId.current = setTimeout(() => {
//         console.log("opp attack success")
//         setGameState("oppSuccess")
//         // opponentAttackPhase()e
//       }, responseTime)
//       setStart(Date.now())
//       setRemaining(responseTime)
//       // isSoundOn && playOppWritingSound()
//       //timeout time is difficulty - 1
//       //transition to panic phase and set panic state value
//       break
//     case "pause":
//       clearTimeout(timerId.current)
//       setRemaining(remaining - (Date.now() - start))
//       // exposedData.pause()
//       musicFunctions.pause()
//       break
//     case "resume":
//       isMusicOn && playMusic()
//       if (oppAttackSuccess) {
//         timerId.current = setTimeout(() => {
//           console.log("resumed")
//           setOppAttackSuccess(false)
//           setIsInputDisabled(false)
//           newPhrases()
//           setGameState("start")
//           //start new scroll animation
//         }, remaining)
//       } else if (userAttackSuccess) {
//         //    TODO can make this into a function
//         //timeout to end attack phase,set with remaining time
//         timerId.current = setTimeout(() => {
//           console.log("resumed")
//           setUserAttackSuccess(false)
//           setIsInputDisabled(false)
//           newPhrases()
//           setGameState("start")
//           //start new scroll animation
//         }, remaining)
//       } else {
//         // isSoundOn && playOppWritingSound()
//         timerId.current = setTimeout(() => {
//           console.log("started opp attack?")
//           setGameState("oppSuccess")
//           // opponentAttackPhase()
//         }, remaining)
//       }
//       setStart(Date.now())
//       break
//     case "oppSuccess":
//       if (lives === 1) {
//         endGame()
//       } else setLives(lives - 1)
//       // exposedData.stop()
//       clearTimeout(timerId.current)
//       //oppattack animation (pausable)
//       setOppAttackSuccess(true)
//       //disable use input (pause does not effect this)
//       setIsInputDisabled(true)
//       setStart(Date.now())
//       setRemaining(2000)
//       isSoundOn && failSound()
//       timerId.current = setTimeout(() => {
//         setOppAttackSuccess(false)
//         setIsInputDisabled(false)
//         newPhrases()
//         setGameState("start")
//         //reset user text
//         setUserText("")
//         //start new scroll animation
//       }, 2000)
//       break
//     case "userSuccess":
//       // exposedData.stop()
//       //TODO REFACTOR into function
//       clearTimeout(timerId.current)
//       //userAttck animation (pausable)
//       setUserAttackSuccess(true)
//       //opp has been attacked true
//       //disable use input (pause does not effect this)
//       setIsInputDisabled(true)
//       setStart(Date.now())
//       setRemaining(2000)
//       timerId.current = setTimeout(() => {
//         setUserAttackSuccess(false)
//         setIsInputDisabled(false)
//         newPhrases()
//         setGameState("start")
//         //reset user text
//         setUserText("")
//         //start new scroll animation
//       }, 2000)
//       break
//     case "exit":
//       // setSt("exit")
//       // exposedData.stop()
//       musicFunctions.stop()
//       setStart(0)
//       setRemaining(0)
//       clearTimeout(timerId.current)
//       setOppAttackSuccess(false)
//       setUserAttackSuccess(false)
//       //TODO shoudl this be in startgame?
//       break
//     default:
//       return "error no status found"
//   }
//   //clear on unnmount
//   return () => {
//     clearTimeout(timerId.current)
//   }
// }, [gameState])
