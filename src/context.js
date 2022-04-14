import React, { useContext, useState, useEffect, useReducer } from "react"

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
  const yeOldeVid = "https://www.youtube.com/watch?v=5L-4xVyUKqo"
  const ogGamerVid = "https://www.youtube.com/watch?v=sVYyjr84ZXI"
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> main state values <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  //difficulty level
  const [level, setLevel] = useState("normal")
  //enemy writing animation scroll
  const [scroll, setScroll] = useState(false)
  //'yeolde' mode
  const [isYeOlde, setIsYeOlde] = useState(true)
  //has game run before or not?
  const [isNewGame, setIsNewGame] = useState(true)
  //users typed text (controlled form)
  const [userText, setUserText] = useState("")
  //user score
  const [score, setScore] = useState(0)
  //is game in progress?T
  const [gameRunning, setGameRunning] = useState(true) //TODO is this even used?
  //has game ended?
  const [gameEnded, setGameEnded] = useState(false)
  //user has attacked
  const [userAttacked, setUserAttacked] = useState(false)
  //opponent has succesfully attacked
  const [successfulAttack, setSuccessfulAttack] = useState(false) //TODO change this value name its confusing
  //visual representation of correct or incorrect letter typed (green/red background letters)
  const [visualMatches, setVisualMatches] = useState([])
  //counts how many answers over 85% a user has achieved
  const [comboChain, setComboChain] = useState([])

  //opp gets random phrase gen from triplet list user gets actual shakespeare phrase
  //TODO whats up with this?
  const getPhrases = () => {
    // return isYeOlde ? shakesPhrases : trashPhrases
    return shakesPhrases
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
  //array for holding streak gold coins
  const [streakArray, setStreakArray] = useState([])

  // comparing values function //TODO white space not accounted for, spaces at front are registered as a word and comparing to word after
  const compareValues = (userTyping) => {
    //current testing phrase split in to individual letters
    const testArray = currentPhrase.split("")
    //user typing split in to individual letters
    const userArray = userTyping.trim().split("")
    // test phrase split into words
    const testArrayWords = currentPhrase.split(" ")
    // user typing split into words
    const userArrayWords = userTyping.trim().split(" ")
    //test phrase words split into individual letters in each word
    const testArrayWordsLetters = currentPhrase
      .split(" ")
      .map((item) => item.split(""))
    //user typing words split into individual letters in each word
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

  //checks to see percentage match is 100% we can move to next phrase automatically
  //TODO CAN REPLACE THIS WITH A SCORING FUNCTION
  useEffect(() => {
    if (percentageMatch === 100) {
      setSuccessfulAttack(true)
      //TODO Why the delay?
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
    //TODO pausing does not pause opp animation or opp attack
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
    //TODO see above about pausing resume should reverse this
  }

  //SETTINGS menu showing?
  const [showSettings, setShowSettings] = useState(false)
  //TODO this should auto pause when clicked 

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

  //add to streak
  //TODO(is this used? has it been replaced by combochain?)
  const streak = () => {
    if (comboChain > 0) {
      for (let i = 1; i <= comboChain; i++) {
        setStreakArray((prev) => [...prev, <div className="gold-coin" />])
      }
    }
  }

  useEffect(() => {
    //make visual progress phrase load in straight away when current phrase is changed
    //TODO can we usememo this?
    compareValues("")
  }, [currentPhrase])
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
        userAttacked,
        setUserAttacked,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
