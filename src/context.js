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

// import reducer from "./reducer"?
const AppContext = React.createContext()
//global context custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}
//context provider
const AppContextProvider = ({ children }) => {
  //<><><><><><><> //VIDEO BACKGROUND STATE VALUES\\ <><><><><><><>
  // const yeOldeVid = "https://www.youtube.com/watch?v=5L-4xVyUKqo"
  // const ogGamerVid = "https://www.youtube.com/watch?v=sVYyjr84ZXI"
  const yeOldeVid = "#"
  const ogGamerVid = "#"

  //<><><><><><><> //RESPONSE TIME STATE VALUES\\ <><><><><><><>
  //difficulty level
  const [responseTime, setResponseTime] = useState(10000)
  const [level, setLevel] = useState("normal")
  const changeDifficulty = (difficulty = "normal") => {
    switch (difficulty) {
      case "easy":
        setResponseTime(15000)
        setLevel("easy")
        break
      case "normal":
        setResponseTime(10000)
        setLevel("normal")
        break
      case "hard":
        setResponseTime(7000)
        setLevel("hard")
        break
      //TODO Change the response time for extreme
      case "extreme":
        setResponseTime(7000)
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
  //has game run before or not?
  const [isNewGame, setIsNewGame] = useState(true)
  //is game in progress?
  const [gameRunning, setGameRunning] = useState(false)
  //has game ended?
  const [gameEnded, setGameEnded] = useState(false)
  const [gameStatus, setGameStatus] = useState("loading")
  //TODO whats this?
  const [shared,setShared] = useState(false)
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

  //<><><><><><><> //TIME SYNCHRO VALUES\\ <><><><><><><>
  const timerId = useRef()
  // TODO let timerId = null?
  const [start, setStart] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [st, setSt] = useState("0")

  //<><><><><><><> //USER STATE VALUES\\ <><><><><><><>
  //current selected phrase
  const [currentPhrase, setCurrentPhrase] = useState("...")
  //users typed text (controlled form)
  const [userText, setUserText] = useState("")
  //user score
  const [score, setScore] = useState(0)
  //user highscore
  const [highScore, setHighScore] = useState(null)
  //Is this a new high score? also a flag for end screen
  const [newHigh, setNewHigh] = useState(false)
  //average accuracy
  const [avgAcc, setAvgAcc] = useState(0)
  //counts how many answers at 100% a user has achieved
  const [comboChain, setComboChain] = useState([])
  //array for holding streak gold coins //TODO COULD USE THE VALUE OF STREAK ABOVE AND RENDER BASED ON THIS
  const [streakArray, setStreakArray] = useState([])
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

  // Function to compare values of user text typed text with the current phrase
  const compareValues = (userTyping) => {
    //current testing phrase split in to individual letters
    const testArray = currentPhrase.split("")
    //user typing split in to individual letters
    const userArray = userTyping.trim().split("")

    // test phrase split into words
    // const testArrayWords = currentPhrase.split(" ")
    // user typing split into words
    // const userArrayWords = userTyping.trim().split(" ")

    //test phrase words split into individual letters in each word (tawl)
    const testArrayWordsLetters = currentPhrase
      .split(" ")
      .map((item) => item.split(""))
    //user typing words split into individual letters in each word
    // const userArrayWordsLetters = userTyping
    //   .split(" ")
    //   .map((item) => item.split(""))
    //take word and compare all values in each word, each space signifies moving on to next word
    //so display words with letters?, get input select first word of current phrase compare values to the first word when a space is detected we are ontto next one

    const userArrayWordsLetters = userTyping
      .trim()
      .replace(/ +/g, " ")
      .split(" ")
      .map((item) => item.split(""))
    //EXPLANATION take the tawl(testArrayWordsLetters) and create a similar array for userTyping and check if within this array there is a "word" at the same index as the one in tawl. If there is then check this words letters against the word in tawl and if it matches then add an object with the letter and true or false for isccorrect. If the word is not present then add an array of objects for the words containing the letter and iscorrect:false
    const newMatches = testArrayWordsLetters.map((item, currentIndex) => {
      return userArrayWordsLetters[currentIndex]
        ? item.map((item, index) => {
            return userArrayWordsLetters[currentIndex][index] === item
              ? {
                  char: testArrayWordsLetters[currentIndex][index],
                  isCorrect: true,
                }
              : {
                  char: testArrayWordsLetters[currentIndex][index],
                  isCorrect: false,
                }
          })
        : testArrayWordsLetters[currentIndex].map((item) => {
            return { char: item, isCorrect: false }
          })
    })
    //TODO  Maybe it would be better to have seperate fnuction for visual matches or een pull everything into this function
    //no of matches when comparing the letters of the test phase and user typed phrase (used only as raw data for percentage match)
    const matches = testArray.filter(
      (item, index) => item === userArray[index]
    ).length

    //checking for each value of test array if userTyping char matches or not and we return true or false
    const calcVisualMatches = testArray.map((item, index) =>
      item === userTyping.split("")[index]
        ? { char: currentPhrase.split("")[index], isCorrect: true }
        : { char: currentPhrase.split("")[index], isCorrect: false }
    )
    //updating visual matches
    // setVisualMatches(calcVisualMatches)
    //so visual mataches is sent an arary of arrays for each word containing an object for each letter with its value and isCorrect boolean value
    setVisualMatches(newMatches)

    setPercentageMatch(Math.ceil((matches / testArray.length) * 100))
  }

  // useEffect to run compareValues function as soon as currentPhrase changes
  useEffect(() => {
    //TODO can we usememo this?
    compareValues("")
  }, [currentPhrase])

  //Function for streak,possibly deprecated
  //TODO(is this used? has it been replaced by combochain?)highest streak
  const streak = () => {
    if (comboChain > 0) {
      for (let i = 1; i <= comboChain; i++) {
        setStreakArray((prev) => [...prev, <div className="gold-coin" />])
      }
    }
  }

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
      setSt("userSuccess")
      setScore((prev) => prev + percentageMatch)
      if (percentageMatch === 100) {
        setComboChain((prev) => [
          ...prev,
          <div className={`gold-coin gold-streak`} />,
        ])
        // setComboChain((prev) => [
        //   ...prev,
        //   <div className={`gold-coin gold-streak`}>{comboChain.length + 1}X</div>,
        // ])
      }
    } else {
      setSt("oppSuccess")
      setComboChain([])
    }
    setPercentageMatch(0)
    //if user accuracy is low it should count as a failed attack and opponent should attack successfully
  }

  useEffect(() => {
    if (percentageMatch === 100) {
      scoreHandler()
    }
  }, [percentageMatch])

  //<><><><><><><> //Visual progress indicator functions\\ <><><><><><><>
  //REMEMBER visualMatches is an array pf arrays for each word which hold objects for each letter in the word that have char and isCorrect values
  //Used to add something between each item, we use a non breaking space in userInput to make the spans display next to each other
  const interleave = (arr, thing) =>
    [].concat(...arr.map((n) => [n, thing])).slice(0, -1)

  const idea = visualMatches.map((item, currentIndex) =>
    item.map((item, index) =>
      item.isCorrect ? (
        <span key={index} className="green">
          {item.char}
        </span>
      ) : (
        <span key={index} className="red">
          {item.char}
        </span>
      )
    )
  )
  //wrap all in span
  const wrappedIdea = idea.map((item) => <span>{item}</span>)

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
    setComboChain([])
    // start a game timer 30s?
    mountRunning()
    //set up 1st suggestion/opponent
    newPhrases()
    //level reset?

    //Start Attack timer
    setSt("start")
  }

  //Function to set end game conditions
  const endGame = () => {
    setSt("exit")
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
    //TODO should ask are you sure and close settings
    //TODO manage scoring and maybe high score local memory
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
    gameRunning ? setSt("pause") : setSt("resume")
    setGameRunning(!gameRunning)
  }

  //Function to show and hide pause/settings menu
  const displaySettings = () => {
    if (gameEnded) {
      setShowSettings(false)
      setGameRunning(false)
    } else {
      pauseResume()
      setShowSettings(!showSettings)
    }
  }

  //usEffect to set focus on input box when required
  useEffect(() => {
    !showSettings && (st === "start" || "resume") && focusInput.current.focus()
  }, [showSettings, st])

  //Main useEffect for game state synchronization
  useEffect(() => {
    switch (st) {
      case "start":
        // setSt("start")

        timerId.current = setTimeout(() => {
          console.log("started opp attack?")
          setSt("oppSuccess")
          // opponentAttackPhase()e
        }, responseTime)
        setStart(Date.now())
        setRemaining(responseTime)
        break
      case "pause":
        // setSt("pause")
        clearTimeout(timerId.current)
        setRemaining(remaining - (Date.now() - start))
        break
      case "resume":
        // setSt("resume")
        if (oppAttackSuccess) {
          timerId.current = setTimeout(() => {
            console.log("resumed")
            setOppAttackSuccess(false)
            setIsInputDisabled(false)
            newPhrases()
            setSt("start")
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
            setSt("start")
            //start new scroll animation
          }, remaining)
        } else {
          timerId.current = setTimeout(() => {
            console.log("started opp attack?")
            setSt("oppSuccess")
            // opponentAttackPhase()
          }, remaining)
        }
        setStart(Date.now())
        break
      case "oppSuccess":
        clearTimeout(timerId.current)
        //oppattack animation (pausable)
        setOppAttackSuccess(true)
        //disable use input (pause does not effect this)
        setIsInputDisabled(true)
        setStart(Date.now())
        setRemaining(2000)

        timerId.current = setTimeout(() => {
          setOppAttackSuccess(false)
          setIsInputDisabled(false)
          newPhrases()
          setSt("start")
          //reset user text
          setUserText("")
          //start new scroll animation
        }, 2000)
        break
      case "userSuccess":
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
          setSt("start")
          //reset user text
          setUserText("")
          //start new scroll animation
        }, 2000)
        break
      case "exit":
        // setSt("exit")
        setStart(0)
        setRemaining(0)
        clearTimeout(timerId.current)
        //TODO added timer values
        //TODOwhen the game is ended at pause screen the animation is not reset
        break
      default:
        return "error no status found"
    }
    //clear on unnmount
    return () => {
      clearTimeout(timerId.current)
    }
  }, [st])

  //debugging useEffect to keep track of st
  useEffect(() => {
    console.log(st)
  }, [gameRunning])

  //useEffect to check for high score in local memory and create one if not available and create an event listener so user can press escape and pause
  // const escFunction = useCallback((e) => {
  //   if (e.key === "Escape") {
  //     e.preventDefault()
  //     console.log("received")
  //     pauseResume()
  //     setShowSettings(!showSettings)
  //     //not able to reseume
  //   }
  // }, [])

  // const handleEsc = (event) => {
  //   // if (event.key === "Escape") {
  //   //   setTimerRunning(prev=>!prev)
  //   //   console.log("hi")
  //   //   //pause any other timer
  //   //   setGameRunning(prev=>!prev)
  //   //   setIsInputDisabled(prev=>!prev)
  //   //   //disable text input
  //   //   // gameRunning ? setSt(()=>"pause") : setSt(()=>"resume")
  //   //   setSt(prev=>prev==="start"||"oppSuccess"||"userSuccess"||"exit"?"pause":prev==="pause"?"resume":"")
  //   // //Function to show and hide pause/settings menu
  //   //   if (gameEnded) {
  //   //     setShowSettings(()=>false)
  //   //     setGameRunning(()=>false)
  //   //   } else {
  //   //     setShowSettings(prev=>!prev)
  //   //   }
  //   // }
  // }
  const [esc, setEsc] = useState(null)
  useEffect(() => {
    !gameEnded && displaySettings()
  }, [esc])
  //TODO FLOUT OCCURS ON LOAD
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && setEsc((prev) => !prev)
    })
    setEsc(false)

    return () => {
      document.removeEventListener("keydown", (e) => {
        e.key === "Escape" && setEsc((prev) => !prev)
      })
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
      //new high score
      //remember to reset this on newgame
    }
  }, [score])

  //TODO try and minimise these exports
  return (
    <AppContext.Provider
      value={{
        isYeOlde,
        setIsYeOlde,
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
        comboChain,
        setComboChain,
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
        st,
        oppAttackSuccess,
        level,
        displaySettings,
        focusInput,
        interleave,
        wrappedIdea,
        setGameEnded,
        scoreHandler,
        highScore,
        shared,
        setShared,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
