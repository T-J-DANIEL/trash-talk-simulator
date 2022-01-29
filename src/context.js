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
  const [isYeOlde, setIsYeOlde] = useState(true)
  const [userText, setUserText] = useState("")
  const [score, setScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  const [successfulAttack, setSuccessfulAttack] = useState(false)
  // useEffect(() => {
  //   getPhrases()
  // }, [])
  //start game or on page load?
  const getPhrases = () => {
    return isYeOlde ? shakesPhrases : trashPhrases
  }
  const [currentPhraseList, setCurrentPhraseList] = useState(getPhrases)
  const [currentPhrase, setCurrentPhrase] = useState("placeholder for user")
  const [opponentPhrase, setOpponentPhrase] = useState(
    "placeholder for Opponent"
  )
 
  const [percentageMatch, setPercentageMatch] = useState(0)

  const compareValues = (userTyping) => {
    const testArray = currentPhrase.split("")
    const userArray = userTyping.trim().split("")
    const matches = testArray.filter(
      (item, index) => item === userArray[index]
    ).length
    console.log("testArray", testArray)
    console.log("userArray", userArray)
    console.log("matches", matches)
    setPercentageMatch(Math.ceil((matches / testArray.length) * 100))
    console.log("percentage Match", percentageMatch)
  }
  useEffect(
    ()=>{
      if (percentageMatch === 100) {
         
           setSuccessfulAttack(true)
           setTimeout(() => {
             setSuccessfulAttack(false)
           }, 500)
         
        setScore((prev) => prev + 100)
        //same as above really
        setPercentageMatch(0)
        setUserText("")
        newPhrases()
        //should call this it own function
      }
    },[percentageMatch]
  )
  const startGame = () => {
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
  const [showSettings, setShowSettings] = useState(false)

  //send random phrase
  const newPhrases = () => {
    //take the phrase block and remove the previous
  
    //make this the new working phrase block
    //pick a random phrase for the user and for the opponent
    let workingArray = [...currentPhraseList]
      console.log("copied",workingArray.length,currentPhraseList.length)
    const randomUserIndex = Math.floor(Math.random() * workingArray.length)
      console.log("user index set",randomUserIndex)
    setCurrentPhrase(workingArray[randomUserIndex].insult)
    workingArray = workingArray.filter((item, index) => index !== randomUserIndex)
        console.log("removed user index", workingArray.length, currentPhraseList.length)
    const randomOppIndex = Math.floor(Math.random() * workingArray.length)
    console.log("Opp index set", randomOppIndex)
    setOpponentPhrase(workingArray[randomOppIndex].insult)
    workingArray = workingArray.filter(
      (item, index) => index !== randomOppIndex
    )
      console.log("removed opp index", workingArray.length, currentPhraseList.length)
    console.log("our two",randomUserIndex, randomOppIndex)
    setCurrentPhraseList(workingArray)
    console.log("working array set as new", workingArray.length,currentPhraseList.length,"===> END  ")
  }
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }