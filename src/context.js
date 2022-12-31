import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from "react"

//import the phrases both random and preset
import { shakesPhrases, randoShake } from "./data"
import useSound from "use-sound"

import user_success from "./sounds/user_success.mp3"
import opp_attack_success from "./sounds/opp_attack_success.mp3"
import streak_sound from "./sounds/streak_sound.mp3"
import threeSec_countdown from "./sounds/3s_countdown.mp3"
import button_pop_up from "./sounds/button_pop_up.mp3"
import button_push_down from "./sounds/button_push_down.mp3"
import user_type_sound from "./sounds/user_type_sound_ver2.mp3"
import incorrect_sound from "./sounds/incorrect_sound.mp3"
import end_game_sound from "./sounds/end_game_sound.mp3"
import high_score_end_sound from "./sounds/high_score_end_sound.mp3"
import opp_writing_sound from "./sounds/opp_writing_sound.mp3"
import music from "./sounds/music.mp3"
import correct_sound from "./sounds/correct_sound.mp3"
const AppContext = React.createContext()

//global context custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}
//context provider
const AppContextProvider = ({ children }) => {
  //<><><><><><><> //VIDEO BACKGROUND STATE VALUES\\ <><><><><><><>
  const yeOldeVid = "https://www.youtube.com/watch?v=5L-4xVyUKqo"
  // const ogGamerVid = "https://www.youtube.com/watch?v=sVYyjr84ZXI"
  // const yeOldeVid = "#"
  const ogGamerVid = "#"
  //sounds
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [isMusicOn, setIsMusicOn] = useState(false)
  const [successSound] = useSound(user_success)
  const [failSound] = useSound(opp_attack_success, { volume: 0.4 })
  const [incorrect] = useSound(incorrect_sound, { volume: 0.4 })
  const [streakSound] = useSound(streak_sound, { volume: 0.3 })
  const [countDownSound] = useSound(threeSec_countdown)
  const [button_pop] = useSound(button_pop_up, { volume: 0.2 })
  const [button_push] = useSound(button_push_down, { volume: 0.2 })
  const [endSound] = useSound(end_game_sound, { volume: 0.3 })
  const [highScoreEndSound] = useSound(high_score_end_sound)
  const [playOppWritingSound, exposedData] = useSound(opp_writing_sound, {
    volume: 0,
  })
  //use exposedData.pause and exposedData.stop
  const [playMusic, musicFunctions] = useSound(music)
  const [correctSound] = useSound(correct_sound, {
    // Th
    volume: 0.3,
  })
  //use musicFunctions.pause and musicFunctions.stop
  const [playTypingSound] = useSound(user_type_sound, {
    interrupt: true,
    volume: 0.2,
  })
  //<><><><><><><> //RESPONSE TIME STATE VALUES\\ <><><><><><><>
  //difficulty level
  const [responseTime, setResponseTime] = useState(10000)
  const [level, setLevel] = useState("normal")
  //these values for response time are used in pausing/resuming timers for the gameState below
  //these value correspond to classes in css "easy","hard" etc
  const changeDifficulty = (difficulty = "normal") => {
    switch (difficulty) {
      case "easy":
        setResponseTime(18000)
        setLevel("easy")
        break
      case "normal":
        setResponseTime(13000)
        setLevel("normal")
        break
      case "hard":
        setResponseTime(10000)
        setLevel("hard")
        break
      //TODO Change the response time for extreme
      case "extreme":
        setResponseTime(13000)
        setLevel("extreme")
        break
      default:
        setResponseTime(10000)
        setLevel("normal")
    }
  }

  //<><><><><><><> //GAME STATE VALUES\\ <><><><><><><>
  //'yeolde' mode
  const [isYeOlde, setIsYeOlde] = useState(true)
  const [isNewGame, setIsNewGame] = useState(true)
  //has game run before or not?
  const [isFirstGame, setIsFirstGame] = useState(true)
  const [showHowTo, setShowHowTo] = useState(false)
  //
  //is game in progress?
  const [gameRunning, setGameRunning] = useState(false)
  //has game ended?
  const [gameEnded, setGameEnded] = useState(false)
  const [gameState, setGameState] = useState("loading")
  //TODO whats this?
  const [shared, setShared] = useState(false)
  //current available list of phrases
  const getPhrases = () => {
    //FUNCTION TO OPTIONALLY RENDER PHRASES DEPENDING ON THEME
    //evilinsult.com/generate_insult.php?lang=en&type=json
    // return isYeOlde ? shakesPhrases : trashPhrases
    //extreme mode?
    return shakesPhrases

    //else
  }
  const [currentPhraseList, setCurrentPhraseList] = useState(getPhrases)
  //SETTINGS menu showing?
  const [showSettings, setShowSettings] = useState(false)
  const [confirmClose, setConfirmClose] = useState(false)
  //<><><><><><><> //TIME SYNCHRO VALUES\\ <><><><><><><>
  const timerId = useRef()
  // TODO let timerId = null?
  const [start, setStart] = useState(0)
  const [remaining, setRemaining] = useState(0)
  // const [st, setSt] = useState("0")

  //<><><><><><><> //USER STATE VALUES\\ <><><><><><><>
  //current selected phrase
  const [currentPhrase, setCurrentPhrase] = useState("...")
  //users typed text (controlled form)
  const [userText, setUserText] = useState("")
  //capslock status
  const [isCapsLockOn, setIsCapsLockOn] = useState(false)
  const capsRef = useRef(null)
  const [displayText, setDisplayText] = useState(false)
  // useEffect(() => {
  //   if(isCapsLockOn){capsRef.current.innerHTML = "caps Lock on"}}, [isCapsLockOn])
  //user score
  const [score, setScore] = useState(0)
  //user highscore
  const [highScore, setHighScore] = useState(null)
  //Is this a new high score? also a flag for end screen
  const [newHigh, setNewHigh] = useState(false)
  //average accuracy
  const [avgAcc, setAvgAcc] = useState(0)
  //counts how many answers at 100% a user has achieved
  const [streakArray, setStreakArray] = useState([])
  //array for holding streak gold coins //TODO COULD USE THE VALUE OF STREAK ABOVE AND RENDER BASED ON THIS
  const [streak, setStreak] = useState(0)
  //the percentage that userText matches the currentPhrase
  const [percentageMatch, setPercentageMatch] = useState(0)
  //visual representation of correct or incorrect letter typed (green/red background letters)
  const [visualMatches, setVisualMatches] = useState([])
  //user has attacked
  const [userAttacked, setUserAttacked] = useState(false)
  //is user input disabled?
  const [isInputDisabled, setIsInputDisabled] = useState(false)
  //User input focus ref
  const focusInput = useRef(null)
  // How many lives left
  const [lives, setLives] = useState(3)
  //<><><><><><><> //OPPONENT STATE VALUES\\ <><><><><><><>
  //opponent has succesfully attacked
  const [oppAttacked, setOppAttacked] = useState(false)
  const [oppAttackSuccess, setOppAttackSuccess] = useState(false)
  //opponents available phrase list?
  const [opponentPhrase, setOpponentPhrase] = useState("...")
  //TODO display the timrs and variables and attach to pause fuinction. what does this mean?

  //<><><><><><><> //MAIN TIMER STATE VALUES\\ <><><><><><><>
  const [timerExists, setTimerExists] = useState(false)
  const [timerRunning, setTimerRunning] = useState(true)
  const [resetTimer, setResetTimer] = useState(false)

  //<><><><><><><> //TEXT FUNCTIONS\\ <><><><><><><>

  //Function to get new random phrases for user and opponent
  const newPhrases = () => {
    //choose a random index from the array
    const randomIndex = (phraseIndex) =>
      Math.floor(Math.random() * phraseIndex.length)

    if (level === "extreme") {
      //if level is set to extreme then choose random phrase from shakespeare phrases instead of random triplet
      //copy shakespeare phrase array as working array
      let workingArray = [...currentPhraseList]
      //choose a random index from the working array
      const randomUserIndex = randomIndex(workingArray)
      //and set it as the current phrase
      setCurrentPhrase(workingArray[randomUserIndex].insult)
      //remove this phrase from the working array so it cannot be chosen for opp
      //and set our current array to be our working array so when we call new phrase next time it won contain the phrases we just used
      setCurrentPhraseList(
        workingArray.filter((_, index) => index !== randomUserIndex)
      )
      // //clear users text box, ready for new input
      // setUserText("")
    } else {
      setCurrentPhrase(
        //set user phrase to a triplet made from random elizabethan words
        `Thou ${randoShake[0][randomIndex(randoShake[0])]} ${
          randoShake[1][randomIndex(randoShake[1])]
        } ${randoShake[2][randomIndex(randoShake[2])]}`
      )
    }
    setOpponentPhrase(
      //set opp phrase to a triplet made from random elizabethan words
      `Thou ${randoShake[0][randomIndex(randoShake[0])]} ${
        randoShake[1][randomIndex(randoShake[1])]
      } ${randoShake[2][randomIndex(randoShake[2])]}`
    )
    //clear users text box, ready for new input
    setUserText("")
  }
  const [userArray, setUserArray] = useState([])
  const [testArray, setTestArray] = useState([])
  const [spaces, setSpaces] = useState("0")
  const lastLetterRef = useRef(null)
  // Function to compare values of user text typed text with the current phrase
  const compareValues = (userTyping) => {
    //current testing phrase split in to individual letters
    const testArray = currentPhrase
      .replace(/ +/g, `_`)
      .replace("-", "‑")
      .split("")

    //user typing split in to individual letters)
    const userArray = userTyping
      .trim()
      .replace(/ +/g, `_`)
      .replace("-", "‑")
      .split("")

    //caluclate percantage match
    setPercentageMatch(
      Math.ceil(
        (testArray.filter((item, index) => item === userArray[index]).length /
          testArray.length) *
          100
      )
    )
    const newMatches = testArray.reduce(
      (total, item, currentIndex) => {
        if (userArray[currentIndex]) {
          if (userArray[currentIndex] === item) {
            if (item !== `_` && testArray[currentIndex + 1] !== `_`) {
              total[total.length - 1].push(
                <span className={`green`}>{item}</span>
              )
            }
            if (item !== `_` && testArray[currentIndex + 1] === `_`) {
              total[total.length - 1].push(
                <span className={`green`}>{item}</span>
              )
              total.push([])
            }
            if (item === `_`)
              total[total.length - 1].push(
                <span className={`green space`}>{item}</span>
              )
            total.push([])
          } else {
            if (item !== `_` && testArray[currentIndex + 1] !== `_`) {
              total[total.length - 1].push(
                <span className={`red`}>{item}</span>
              )
            }
            if (item !== `_` && testArray[currentIndex + 1] === `_`) {
              total[total.length - 1].push(
                <span className={`red`}>{item}</span>
              )
              total.push([])
            }
            if (item === `_`) {
              total[total.length - 1].push(
                <span className={`red space`}>{item}</span>
              )
              total.push([])
            }
          }
        } else {
          if (item !== `_` && testArray[currentIndex + 1] !== `_`) {
            total[total.length - 1].push(
              <span
                ref={
                  currentIndex === userArray.length + 1 ? lastLetterRef : null
                }
                className={`${
                  currentIndex === userArray.length ? "yellow" : "gray"
                }`}
              >
                {item}
              </span>
            )
          }
          if (item !== `_` && testArray[currentIndex + 1] === `_`) {
            total[total.length - 1].push(
              <span
                ref={
                  currentIndex === userArray.length + 1 ? lastLetterRef : null
                }
                className={`${
                  currentIndex === userArray.length ? `yellow` : "gray"
                }`}
              >
                {item}
              </span>
            )
            total.push([])
          }
          if (item === `_`) {
            total[total.length - 1].push(
              <span
                ref={
                  currentIndex === userArray.length + 1 ? lastLetterRef : null
                }
                className={`${
                  currentIndex === userArray.length
                    ? `yellow space`
                    : `gray space`
                }`}
              >
                {item}
              </span>
            )
            total.push([])
          }
        }
        if (currentIndex === testArray.length - 1) {
          return total.map((item) => <span>{item}</span>)
        }
        return total
      },
      [[]]
    )
    setVisualMatches(newMatches)
    console.log(lastLetterRef.current)
    isSoundOn &&
      (userArray[userArray.length - 1] === testArray[userArray.length - 1]
        ? correctSound()
        : incorrect())

    console.log(
      userArray[userArray.length - 1],
      testArray[userArray.length - 1]
    )
  }

  // useEffect to run compareValues function as soon as currentPhrase changes
  useEffect(() => {
    //TODO can we usememo this?
    compareValues("")
  }, [currentPhrase])

  //Function to check to see percentage match is 100% we can move to next phrase automatically
  //TODO CAN REPLACE THIS WITH A SCORING FUNCTION
  const scoreHandler = () => {
    //score handler will fire when enter is pressed or 100% is reached
    //check score if >80
    //set setSt(userAttack)
    //execute all required code for attack
    //if 100% then add combo
    //else setSt(oppAttack)
    //80%
    if (percentageMatch > 80) {
      //all handled in the useEffect
      setGameState("userSuccess")
      setScore((prev) => prev + percentageMatch)
      if (percentageMatch === 100) {
        setStreak((prev) => prev + 1)
        isSoundOn && streakSound()
      }
      if (percentageMatch < 100) {
        setStreak(0)
        isSoundOn && successSound()
      }
    } else {
      setGameState("oppSuccess")
      setStreak(0)
      isSoundOn && failSound()
    }
    setPercentageMatch(0)
    //if user accuracy is low it should count as a failed attack and opponent should attack successfully
  }
  useEffect(() => {
    setStreakArray("")
    if (streak) {
      setStreakArray(<div className="gold-coin gold-streak">{streak}X</div>)
      setTimeout(() => {
        setStreakArray(<div className="gold-coin">{streak}X</div>)
      }, 1000)
    }
  }, [streak])

  useEffect(() => {
    if (percentageMatch === 100) {
      scoreHandler()
    }
  }, [percentageMatch])

  //<><><><><><><> //Visual progress indicator functions\\ <><><><><><><>
  //REMEMBER visualMatches is an array of arrays for each word which hold objects for each letter in the word that have char and isCorrect values
  //Used to add something between each item, we use a non breaking space in userInput to make the spans display next to each other
  // const interleave = (arr, thing) =>
  //   [].concat(...arr.map((n) => [n, thing])).slice(0, -1)

  //converts the second dimension char objects to spans
  // const wrappedIdea = visualMatches
  //   .map((item, currentIndex) =>
  //     item.map((item, index) =>
  //       item.isCorrect ? (
  //         <span key={index} className={item.ref ? "yellow" : `green`}>
  //           {item.char}
  //         </span>
  //       ) : (
  //         <span key={index} className={item.ref ? "yellow" : `red`}>
  //           {item.char}
  //         </span>
  //       )
  //     )
  //   )
  //   .reduce((total, input,index) => {
  //     total.push(<span>{input}</span>)
  //     total.push(<span key={index}
  //     className={testArray[userArray.length]===`_`&&spaces===index?"yellow":"red"}
  //     >&nbsp;</span>)
  //     return total
  // }, [])
  // .map((item) => <span>{item}</span>)
  // interleave(wrappedIdea, <span>&nbsp;</span>)
  //add a ref here if the index is the same as user typed last one
  //wrap all in span
  // const wrappedIdea = idea.map(item => <span>{item}</span>)

  //<><><><><><><> //GAMESTATE FUNCTIONS\\ <><><><><><><>
  //Function to set new game conditions
  const startGame = () => {
    //TODO start game screeen not showing when we pause and end game/end game?

    setGameEnded(false)
    //clear any timers
    setTimerExists(false)
    //game in progress
    setGameRunning(true)
    //reset user text
    setUserText("")
    //re enable text input
    setIsInputDisabled(false)
    //clear score
    setScore(0)
    //clear multiplier chain
    setStreak(0)
    // start a game timer 30s?
    mountRunning()
    //set up 1st suggestion/opponent
    newPhrases()
    //reset new high score
    setNewHigh(false)
    //Start Attack timer
    setGameState("start")
    isMusicOn && playMusic()
    setLives(3)
    console.log(gameState)
  }

  //Function to set end game conditions
  const endGame = () => {
    setGameState("exit")
    setTimerExists(false)
    setUserText("")
    setIsInputDisabled(true)
    setGameEnded(true)
    setGameRunning(false)
    //run end game score modal
    //remove all attacktimers
    timerId.current = null
    // oppAttackTimer("exit")
    setUserText("")
    if (isSoundOn) {
      newHigh ? highScoreEndSound() : endSound()
    }
    // window.removeEventListener("blur", () => {
    //   pauseGame()
    //   console.log("removed")
    // })
  }

  //new timer is loaded in a paused state, awaiting 'play' command
  //TODO not used shall we get rid of it?
  const mountPaused = () => {
    setTimerExists(true)
    setTimerRunning(false)
  }
  //Function to load a timer already in a running state
  const mountRunning = () => {
    setTimerExists(true)
    setTimerRunning(true)
  }

  //Function to pause and resume game conditions
  //TODO  maybe a separate pause function?
  const pauseResume = () => {
    //show settings/pause menu
    // setShowSettings(true)
    //pause main game timer
    setTimerRunning(!timerRunning)
    //pause any other timer
    setIsInputDisabled(!isInputDisabled)
    //disable text input
    gameRunning ? setGameState("pause") : setGameState("resume")
    setGameRunning(!gameRunning)
  }
  const pauseGame = () => {
    setTimerRunning(false)
    setGameRunning(false)
    //pause any other timer
    setIsInputDisabled(true)
    //disable text input
    setGameState("pause")
    console.log("MESSAGE:", gameState)
    setShowSettings(true)
  }
  //TODO incorporate resume function where required
  const resumeGame = () => {
    setTimerRunning(true)
    setGameRunning(true)
    //pause any other timer
    setIsInputDisabled(true)
    //disable text input
    setGameState("resume")
    console.log("MESSAGE:", gameState)
    setShowSettings(false)
    // e === "click" || ("keydown" && e.getModifierState("CapsLock"))
    //   ? setIsCapsLockOn(true)
    //   : setIsCapsLockOn(false)
  }

  //Function to show and hide pause/settings menu
  const displaySettings = () => {
    // if (gameEnded) {
    //   setShowSettings(false)
    //   setGameRunning(false)
    // } else {
    //   pauseResume()
    //   setShowSettings(!showSettings)
    // }
    // if (gameRunning && !gameEnded) {)
    pauseResume()
    console.log("MESSAGE:", gameState)
    setShowSettings(!showSettings)
  }

  //usEffect to set focus on input box when required
  useEffect(() => {
    !showSettings &&
      (gameState === "start" || "resume") &&
      focusInput.current.focus()
  }, [showSettings, gameState])

  //Main useEffect for game state synchronization
  useEffect(() => {
    switch (gameState) {
      case "start":
        timerId.current = setTimeout(() => {
          console.log("started opp attack?")
          setGameState("oppSuccess")
          // opponentAttackPhase()e
        }, responseTime)
        setStart(Date.now())
        setRemaining(responseTime)
        isSoundOn && playOppWritingSound()

        break
      case "pause":
        clearTimeout(timerId.current)
        setRemaining(remaining - (Date.now() - start))
        exposedData.pause()
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
          isSoundOn && playOppWritingSound()
          timerId.current = setTimeout(() => {
            console.log("started opp attack?")
            setGameState("oppSuccess")
            // opponentAttackPhase()
          }, remaining)
        }
        setStart(Date.now())
        break
      case "oppSuccess":
        setLives(lives - 1)
        if (lives === 1) {
          endGame()
        }
        exposedData.stop()
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
        exposedData.stop()
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
        exposedData.stop()
        musicFunctions.stop()
        setStart(0)
        setRemaining(0)
        clearTimeout(timerId.current)
        //TODOwhen the game is ended at pause screen the animation is not reset
        break
      default:
        return "error no status found"
    }
    //clear on unnmount
    return () => {
      clearTimeout(timerId.current)
    }
  }, [gameState])

  //debugging useEffect to keep track of st
  useEffect(() => {
    console.log(gameState)
  }, [gameRunning])

  const [esc, setEsc] = useState(null)
  useEffect(() => {
    if (gameRunning && !gameEnded) {
      if (isSoundOn) {
        button_pop()
        button_push()
      }
      // displaySettings()
      pauseGame()
    }
    if (!gameRunning && showSettings && !gameEnded) {
      // displaySettings()
      resumeGame()
    }
  }, [esc])

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      //TODO this is repeated so much make afunction
      e.getModifierState("CapsLock")
        ? setIsCapsLockOn(true)
        : setIsCapsLockOn(false)
      // console.log("caps lock is on on?", e.getModifierState("CapsLock"))
      e.key === "Escape" && setEsc((prev) => !prev)
    })
    setEsc(false)

    //  document.addEventListener("keyup", (e) => {
    //       e.getModifierState("CapsLock")
    //         ? setIsCapsLockOn(true)
    //         : setIsCapsLockOn(false)
    //    console.log("caps lock is on on?", e.getModifierState("CapsLock"))
    //  })

    return () => {
      document.removeEventListener("keydown", (e) => {
        e.getModifierState("CapsLock")
          ? setIsCapsLockOn(true)
          : setIsCapsLockOn(false)
        // console.log("caps lock is on on?", e.getModifierState("CapsLock"))
        e.key === "Escape" && setEsc((prev) => !prev)
      })
      // document.removeEventListener("keyup", (e) => {
      //   e.getModifierState("CapsLock")
      //     ? setIsCapsLockOn(true)
      //     : setIsCapsLockOn(false)
      //   console.log("caps lock is on on?", e.getModifierState("CapsLock"))
      // })
    }
  }, [])

  useEffect(() => {
    const userHighScore = JSON.parse(localStorage.getItem("highScore"))

    if (userHighScore) {
      setHighScore(userHighScore)
    } else {
      localStorage.setItem("highScore", JSON.stringify(0))
    }
  }, [])

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("highScore", JSON.stringify(score))
      setNewHigh(true)
      //new high score
      //remember to reset this on newgame
    }
  }, [score])
  const clickSound = (e) => {
    if (isSoundOn) {
      e.mouseDown && button_pop()
      e.mouseUp && button_push()
    }
  }
  // document.querySelector("inputBox").addEventListener("focus", function (e) {
  //     if (e.getModifierState("CapsLock")) {
  //       console.log("its on")
  //     }
  //   })
  // useEffect(() => {
  //   window.addEventListener("blur", () => {
  //     pauseGame()
  //     // displaySettings()
  //   })
  //   // Specify how to clean up after this effect:
  //   return () => {
  //     window.removeEventListener("blur", () => {
  //       pauseGame()
  //       // displaySettings()
  //     })
  //   }
  // }, [startGame])

  //Ueseffect to handle pausing when page focus is lost
  useEffect(() => {
    if (gameState === "start") {
      window.addEventListener("blur", pauseGame)
      console.log("event listener added")
    }
    if (gameState === "resume") {
      window.addEventListener("blur", pauseGame)
      console.log("event listener added")
    }
    //this repeatedly adds event listener but the duplicates are discarded.
    if (gameState === "exit") {
      window.removeEventListener("blur", pauseGame)
    }
    //NOTE removing an event listener REQUIRES a named function (an anonymous function would point to a different place in memory)
    return () => {
      window.removeEventListener("blur", pauseGame)
    }
  }, [gameState])

  // useEffect(() => {
  //   window.removeEventListener("blur", () => {
  //     pauseGame()
  //     // displaySettings()
  //   })
  // }, [endGame])

  //TODO try and minimise these exports
  return (
    <AppContext.Provider
      value={{
        isYeOlde,
        setIsYeOlde,
        clickSound,
        userText,
        setUserText,
        currentPhraseList,
        setCurrentPhraseList,
        currentPhrase,
        opponentPhrase,
        compareValues,
        percentageMatch,
        setPercentageMatch,
        oppAttacked,
        setOppAttacked,
        timerExists,
        setTimerExists,
        timerRunning,
        setTimerRunning,
        resetTimer,
        setResetTimer,
        mountPaused,
        mountRunning,
        showSettings,
        setShowSettings,
        newPhrases,
        score,
        setScore,
        isInputDisabled,
        setIsInputDisabled,
        pauseResume,
        startGame,
        endGame,
        yeOldeVid,
        ogGamerVid,
        visualMatches,
        streak,
        streakArray,
        isNewGame,
        setIsNewGame,
        gameEnded,
        responseTime,
        setResponseTime,
        changeDifficulty,
        userAttacked,
        setUserAttacked,
        gameRunning,
        timerId,
        start,
        remaining,
        gameState,
        oppAttackSuccess,
        level,
        displaySettings,
        focusInput,
        // interleave,
        // wrappedIdea,
        setGameEnded,
        scoreHandler,
        highScore,
        shared,
        setShared,
        newHigh,
        button_push,
        button_pop,
        isSoundOn,
        setIsSoundOn,
        playTypingSound,
        isMusicOn,
        setIsMusicOn,
        lives,
        confirmClose,
        setConfirmClose,
        isFirstGame,
        setIsFirstGame,
        showHowTo,
        setShowHowTo,
        isCapsLockOn,
        setIsCapsLockOn,
        displayText,
        capsRef,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
