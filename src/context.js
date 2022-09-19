import React, { useContext, useState, useEffect, useReducer, useRef } from "react"

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
  //video background links
  // const yeOldeVid = "https://www.youtube.com/watch?v=5L-4xVyUKqo"
  // const ogGamerVid = "https://www.youtube.com/watch?v=sVYyjr84ZXI"
  const yeOldeVid = "#"
  const ogGamerVid = "#"
  //<><><><><><><> //GAME STATE VALUES\\ <><><><><><><>
  //difficulty level
  const [responseTime, setResponseTime] = useState(10000)
  const [level, setLevel] = useState("normal")
  const changeDifficulty = (difficulty = "normal") => {
    switch (difficulty) {
      case "easy":
        setResponseTime(15000)
        setLevel(15000)
        break
      case "normal":
        setResponseTime(10000)
        setLevel(10000)
        break
      case "hard":
        setResponseTime(7000)
        setLevel(7000)
        break
      default:
        setResponseTime(10000)
        setLevel(10000)
    }
  }

  //'yeolde' mode
  const [isYeOlde, setIsYeOlde] = useState(true)
  //has game run before or not?
  const [isNewGame, setIsNewGame] = useState(true)
  //is game in progress?
  const [gameRunning, setGameRunning] = useState(false)
  //has game ended?
  const [gameEnded, setGameEnded] = useState(false)
  //TODO MAYBE DEPRECATED enemy writing animation scroll
  const [scroll, setScroll] = useState(false)
  const [gameStatus, setGameStatus] = useState("loading")
  //<><><><><><><> //USER STATE VALUES\\ <><><><><><><>
  //users typed text (controlled form)
  const [userText, setUserText] = useState("")
  //user score
  const [score, setScore] = useState(0)
  //user has attacked
  const [userAttacked, setUserAttacked] = useState(false)
  //counts how many answers over 85% a user has achieved
  const [comboChain, setComboChain] = useState([])
  //visual representation of correct or incorrect letter typed (green/red background letters)
  const [visualMatches, setVisualMatches] = useState([])

  //<><><><><><><> //OPPONENT STATE VALUES\\ <><><><><><><>
  //opponent has succesfully attacked
  const [oppAttacked, setOppAttacked] = useState(false)
  const [oppAttackSuccess, setOppAttackSuccess] = useState(false)
  // display the timrs and variables and attach to pause fuinction
  //TODO opp gets random phrase gen from triplet list user gets actual shakespeare phrase
  //TODO MAYBE IT WOULD BE BETTER IF BOTH GOT TRIPLETS (easy to type and less ofensive)
  const getPhrases = () => {
    //FUNCTION TO OPTIONALLY RENDER PHRASES DEPENDING ON THEME
    //evilinsult.com/generate_insult.php?lang=en&type=json
    // return isYeOlde ? shakesPhrases : trashPhrases

    https: return shakesPhrases
  }
  //current available list of phrases
  const [currentPhraseList, setCurrentPhraseList] = useState(getPhrases)
  //current selected phrase
  const [currentPhrase, setCurrentPhrase] = useState("...")
  //opponents available phrase list
  const [opponentPhrase, setOpponentPhrase] = useState("...")
  //the percentage that userText matches the currentPhrase
  const [percentageMatch, setPercentageMatch] = useState(0)
  //is user input disabled?
  const [isInputDisabled, setIsInputDisabled] = useState(false)
  //array for holding streak gold coins //TODO COULD USE THE VALUE OF STREAK ABOVE AND RENDER BASED ON THIS
  const [streakArray, setStreakArray] = useState([])

  // comparing values function //TODO white space not accounted for, spaces at front are registered as a word and comparing to word after
  const compareValues = (userTyping) => {
    //current testing phrase split in to individual letters
    const testArray = currentPhrase.split("")
    //user typing split in to individual letters
    const userArray = userTyping.trim().split("")
    // test phrase split into words
    // const testArrayWords = currentPhrase.split(" ")
    // user typing split into words
    // const userArrayWords = userTyping.trim().split(" ")
    //test phrase words split into individual letters in each word
    const testArrayWordsLetters = currentPhrase
      .split(" ")
      .map((item) => item.split(""))
    //user typing words split into individual letters in each word
    // const userArrayWordsLetters = userTyping
    //   .split(" ")
    //   .map((item) => item.split(""))
    //take word and compare all values in each word, each space signifies moving on to next word
    //so display words with letters?, get input select first word of current phrase compare values to the first word when a space is detected we are ontto next one
    const newMatches = testArrayWordsLetters.map((item, currentIndex) => {
      return userTyping.split(" ").map((item) => item.split(""))[currentIndex]
        ? item.map((item, index) => {
            return userTyping.split(" ").map((item) => item.split(""))[
              currentIndex
            ][index] === item
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

    //no of matches when comparing the two
    const matches = testArray.filter(
      (item, index) => item === userArray[index]
    ).length
    //checking for each value of test array if usertyping char macthes or not and we return true or false
    //currentPhrase.split("")
    const calcVisualMatches = testArray.map((item, index) =>
      item === userTyping.split("")[index]
        ? { char: currentPhrase.split("")[index], isCorrect: true }
        : { char: currentPhrase.split("")[index], isCorrect: false }
    )
    //updating visual matches
    // setVisualMatches(calcVisualMatches)
    setVisualMatches(newMatches)

    setPercentageMatch(Math.ceil((matches / testArray.length) * 100))
  }

  //checks to see percentage match is 100% we can move to next phrase automatically
  //TODO CAN REPLACE THIS WITH A SCORING FUNCTION
  useEffect(() => {
    if (percentageMatch === 100) {
      //?what the h?
      // setOppAttack(true)
      //TODO Why the delay?
      // setTimeout(() => {
      //   setOppAttack(false)
      // }, 500)

      setScore((prev) => prev + 100)
      //same as above in 'enter' function really
      setPercentageMatch(0)
      setUserText("")
      setComboChain((prev) => [
        ...prev,
        <div className={`gold-coin gold-streak`}>{comboChain.length + 1}X</div>,
      ])
      // see this
      newPhrases()
      //should call this it own function
    }
  }, [percentageMatch])

  //set new game conditions
  const startGame = () => {
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

    //TODO remember me
    //Start Attack timer
    // oppAttackTimer("start")
    setSt("start")
  }

  //set end game conditions
  const endGame = () => {
    setTimerExists(false)
    setUserText("")
    setIsInputDisabled(true)
    setGameEnded(true)
    //run end game score modal
    //remove all attacktimers
    timerId.current = null
    // oppAttackTimer("exit")
    setSt("exit")
  }

  //Main timer state variables & functions
  const [timerExists, setTimerExists] = useState(false)
  const [timerRunning, setTimerRunning] = useState(true)
  const [resetTimer, setResetTimer] = useState(false)
  //new timer is loaded in a paused state, awaiting 'play' command
  const mountPaused = () => {
    setTimerExists(true)
    setTimerRunning(false)
  }

  //new timer is loaded already in a running state
  const mountRunning = () => {
    setTimerExists(true)
    setTimerRunning(true)
  }

  //pause game conditions
  const pauseResume = () => {
    //show settings/pause menu
    // setShowSettings(true)
    //pause main game timer
    setTimerRunning(!timerRunning)
    //pause any other timer
    setIsInputDisabled(!isInputDisabled)
    //stop input (change z index of screen barrier? or just make input disabled)
    //TODO pauses animations but not animiaitons do not repeat yo need to remobe and readd classes
    gameRunning?setSt("pause"):setSt("resume")
    setGameRunning(!gameRunning)
    //reset user text
  }

  // //resume game conditions
  // const resumeGame = () => {
  //   //hide settings/pause menu
  //   setShowSettings(false)
  //   //resume timer
  //   setTimerRunning(true)
  //   //resume any other timer
  //   //re enable input
  //   setIsInputDisabled(false)
  //   //TODO see above about pausing resume should reverse this
  // }

  //SETTINGS menu showing?
  const [showSettings, setShowSettings] = useState(false)
  //TODO this should auto pause when clicked

  //tracking time
  const timerId = useRef()
  // let timerId = null
  const [start, setStart] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [st, setSt] = useState("0")
  

  const opponentAttackPhase = () =>{
    //end scroll animation
//TODO scroll animation is not starting

    setSt("exit")
    //oppattack animation (pausable)
      setOppAttackSuccess(true)
      //disable use input (pause does not effect this)
      setIsInputDisabled(true)
      //TODO Start time must be variable how to plug it in?
      timerId.current = setTimeout(()=>{
          setOppAttackSuccess(false)
          setIsInputDisabled(false)
          newPhrases() 
          setSt("start")

          //start new scroll animation
      },2000)

    //set a timeout 
    }

  //game running animatino starts at end change status to attacking
  // Assignments to the 'timerId' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.eslintreact-hooks/exhaustive-deps
  //TODO maybe use same timer id for attack and win state/lose state
  useEffect(() => {
    switch (st) {
      case "start":
        // setSt("start")

        timerId.current = setTimeout(()=>{
          console.log("started opp attack?")
          // setOppAttackSuccess(true)
          opponentAttackPhase()
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
        timerId.current = setTimeout(()=>{ console.log("resumed")
        setOppAttackSuccess(true)}, remaining)
        setStart(Date.now())
        break
      case "oppSuccess":
        //TODO pausable opponent success phase
        // this must set the ref to the opp success timeout
        //start and resume amounts must be updated
        //
        break
      case "userSuccess":
        // TODO pausable user sccuess phase
        break
      case "exit":
        // setSt("exit")
        clearTimeout(timerId.current)
        break
      default:
        return "error no status found"
    }
    //clear on unnmount
    return () => {
      clearTimeout(timerId.current)
    }
  }, [st])
  // const oppAttackEnd = () => {
    //   setOppAttackSuccess(true)
    //   //setUserAttacked(true)
  //   console.log("executed")
  // }

  // }
  // const endOppAttack = () => {
  //   clearTimeout(timerId)
  //   // oppAttack success
  // }

  //get new random phrases
  const newPhrases = () => {
    //copy phrase list into new working array
    let workingArray = [...currentPhraseList]
    //pick a random phrase from this workingArray and set it as the current phrase
    const randomUserIndex = Math.floor(Math.random() * workingArray.length)
    setCurrentPhrase(workingArray[randomUserIndex].insult)

    //remove this phrase from the working array so it cannot be chosen for opp
    workingArray = workingArray.filter((_, index) => index !== randomUserIndex)

    //TODO:CONVERT TO RANDOM for opp?
    //three random indexes, one for each word in randoShake array
    //set opp phrase to a template literals starting with "thou" then the three variables
    //pick random phrase from this filtered working array and filter it out frm working array
    const randomOppIndex = Math.floor(Math.random() * workingArray.length)
    setOpponentPhrase(workingArray[randomOppIndex].insult)
    workingArray = workingArray.filter(
      (item, index) => index !== randomOppIndex
    )
    //set our current array to our working array
    setCurrentPhraseList(workingArray)
  }
  // =======================================================
  useEffect(() => {
    //TODO can we usememo this?
    compareValues("")
  }, [currentPhrase])

  //add to streak
  //TODO(is this used? has it been replaced by combochain?)highest streak
  const streak = () => {
    if (comboChain > 0) {
      for (let i = 1; i <= comboChain; i++) {
        setStreakArray((prev) => [...prev, <div className="gold-coin" />])
      }
    }
  }
  //TODO TODAY continue testing your pause function, write an interval companion function that logs each second if needs be.
  //WE NEED A CLEAN UP FUNCTION TO CLEAR ALL TIMOUTS ETC ON DISMOUNT
  //must use ueeffects to stop multiple rerenders
  //need to stop rendering to a non mounted component
  //think about a status fuinction that manages what he curent status is for the opp. what the user does and doesnt do will effect what is called
  //function is firing striaght away
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
        scroll,
        setScroll,
        responseTime,
        setResponseTime,
        changeDifficulty,
        userAttacked,
        setUserAttacked,
        gameRunning,
        // oppAttackTimer,
        timerId,
        start,
        remaining,
        st,
        oppAttackSuccess,
        level,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
