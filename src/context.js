import React, { useContext, useState, useEffect, useReducer } from "react"
import UserInput from "./components/UserInput"
import { trashPhrases, shakesPhrases } from "./data"
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

const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
  const [isYeOlde,setIsYeOlde] = useState(false)
  const [userText, setUserText] = useState("")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentPhraseList, setCurrentPhraseList] = useState([])
  const [gameRunning, setGameRunning] = useState(false)
  const [successfulAttack,setSuccessfulAttack] = useState(false)
  const getPhrases = () => {
    setCurrentPhraseList(trashPhrases[currentLevel])
  } 
  const [currentPhrase, setCurrentPhrase] = useState(shakesPhrases[0].insult)
  const [opponentPhrase, setOpponentPhrase] = useState(shakesPhrases[1].insult)
  useEffect(() => {
    getPhrases()
  }, [currentLevel])

  const [percentageMatch, setPercentageMatch] = useState()

  const compareValues = (userTyping) => {
    const testArray = currentPhrase.trim().split("")
    const userArray = userTyping.trim().split("")
    const matches = testArray.filter(
      (item, index) => item === userArray[index]
    ).length
    console.log("testArray",testArray)
    console.log("userArray",userArray)
    console.log("matches",matches)
    setPercentageMatch(Math.ceil((matches / testArray.length) * 100))
    console.log("percentage Match",percentageMatch)
  }

  const startGame = () =>{
    /*
      start a game timer 30s?
      set up first suggestion and opponent text
      

    */
    //timer reset and start
    //level reset
    //
    setUserText("")

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

  //SETTINGS
  const [showSettings,setShowSettings] = useState(false)
  return (
    <AppContext.Provider
      value={{
        isYeOlde,
        setIsYeOlde,
        userText,
        setUserText,
        currentLevel,
        setCurrentLevel,
        currentPhraseList,
        setCurrentPhraseList,
        currentPhrase,
        opponentPhrase,
        compareValues,
        percentageMatch,
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
