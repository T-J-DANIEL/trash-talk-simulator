import React, { useContext, useState, useEffect, useReducer } from "react"
import UserInput from "./components/UserInput"
import { shakesPhrases } from "./data"
// import data from "./data"
// import reducer from "./reducer"
const AppContext = React.createContext()

// const initialState = {
//   loading: true,
//   cart: data,
//   total: 0,
//   amount: 0,
// }
//auto recalculate values
//can have an injured state value and then conditionally render or conditinoally add to class list
//bonus for over 80% and 100%

const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
  const yeOldeVid = "https://www.youtube.com/watch?v=5L-4xVyUKqo"
  const ogGamerVid = "https://www.youtube.com/watch?v=sVYyjr84ZXI"

  let enemyTimer
  const [level, setLevel] = useState("normal")
  const [scroll, setScroll] = useState(false)

  const [isYeOlde, setIsYeOlde] = useState(true)
  const [isNewGame, setIsNewGame] = useState(true)
  const [userText, setUserText] = useState("")
  const [score, setScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(true)
  const [gameEnded, setGameEnded] = useState(false)
  const [userAttacked, setUserAttacked] = useState(false)
  const [successfulAttack, setSuccessfulAttack] = useState(false)
  const [visualMatches, setVisualMatches] = useState([])
  const [comboChain, setComboChain] = useState([])

  //opp gets random phrase gen user gets shakesphrases

  const getPhrases = () => {
    // return isYeOlde ? shakesPhrases : trashPhrases
    return shakesPhrases
  }
  const [currentPhraseList, setCurrentPhraseList] = useState(getPhrases)
  const [currentPhrase, setCurrentPhrase] = useState("...")
  const [opponentPhrase, setOpponentPhrase] = useState("...")

  const [percentageMatch, setPercentageMatch] = useState(0)
  const [isInputDisabled, setIsInputDisabled] = useState(false)
  const [streakArray, setStreakArray] = useState([])

  // comparing values function
  const compareValues = (userTyping) => {
    //current testing phrase split
    const testArray = currentPhrase.split("")
    //user typing split
    const userArray = userTyping.trim().split("") //#endregion

    // words in test array
    const testArrayWords = currentPhrase.split(" ")
    // words in user array
    const userArrayWords = userTyping.trim().split(" ")
    //letter in each word
    const testArrayWordsLetters = currentPhrase
      .split(" ")
      .map((item) => item.split(""))
    const userArrayWordsLetters = userTyping
      .split(" ")
      .map((item) => item.split(""))
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

  //checks to see percentage match is 100% we can move to next phrase automaically
  useEffect(() => {
    if (percentageMatch === 100) {
      setSuccessfulAttack(true)
      setTimeout(() => {
        setSuccessfulAttack(false)
      }, 500)

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
  }

  //set end game conditions
  const endGame = () => {
    setTimerExists(false)
    setUserText("")
    setIsInputDisabled(true)
    setGameEnded(true)
    //run end game score modal
  }

  //timer functions
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
  const pauseGame = () => {
    //show settings/pause menu
    setShowSettings(true)
    //pause main game timer
    setTimerRunning(false)
    //pause any other timer
    setIsInputDisabled(true)
    //stop input (change z index of screen barrier? or just make input disabled)
  }

  //resume game conditions
  const resumeGame = () => {
    //hide settings/pause menu
    setShowSettings(false)
    //resume timer
    setTimerRunning(true)
    //resume any other timer
    //re enable input
    setIsInputDisabled(false)
  }

  //SETTINGS
  const [showSettings, setShowSettings] = useState(false)

  //get new random phrases
  const newPhrases = () => {
    //copy phrase list into new working array
    let workingArray = [...currentPhraseList]

    //pick a random phrase from this workingArray and set it as the current phrase
    const randomUserIndex = Math.floor(Math.random() * workingArray.length)
    setCurrentPhrase(workingArray[randomUserIndex].insult)

    //remove this phrase from the working array so it cannot be chosen for opp
    workingArray = workingArray.filter((_, index) => index !== randomUserIndex)

    //pick random phrase from this filtered working array and filter it out frm working array
    const randomOppIndex = Math.floor(Math.random() * workingArray.length)
    setOpponentPhrase(workingArray[randomOppIndex].insult)
    workingArray = workingArray.filter(
      (item, index) => index !== randomOppIndex
    )

    //set our current array to our working array
    setCurrentPhraseList(workingArray)
      
  }

  //add to streak (is this used?)
  const streak = () => {
    if (comboChain > 0) {
      for (let i = 1; i <= comboChain; i++) {
        setStreakArray((prev) => [...prev, <div className="gold-coin" />])
      }
    }
  }
  // const responseTime =
  //   level === "easy"
  //     ? 15000
  //     : level === "normal"
  //     ? 10000
  //     : level === "hard"
  //     ? 7000
  //     : ""
    
  // function startOppTime () {
  //   console.log("scroll", scroll, enemyTimer)
  //   setScroll(false)
  // }
  // const startTimer = () => {
  //   enemyTimer = setTimeout(startOppTime, responseTime)
  // }
  // const endTimer = () => {
  //   clearTimeout(enemyTimer)
  //   console.log("enemy timer cleared", enemyTimer)
  // }

  useEffect(() => {
   
    //make visual progress phrase load in straight away
    compareValues("")
    //start scroll animation for opp
        // endTimer()
        // setScroll(true)
        // startTimer()
    //clearTimeout(enemyTimer)
    
  }, [currentPhrase])

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
        successfulAttack,
        setSuccessfulAttack,
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
        pauseGame,
        resumeGame,
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
        level,
        setLevel,
        enemyTimer,
        userAttacked,
        setUserAttacked,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
