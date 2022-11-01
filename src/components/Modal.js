import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
//settings component accessed by clicking hamburger button
const Modal = ({ children }) => {
  //all these timer methods and timer state values  are imported from context
  const {
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
    streakArray,
    isNewGame,
    setIsNewGame,
    gameEnded,
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
    interleave,
    wrappedIdea,
    setGameEnded,
    scoreHandler,
    highScore,
    button_pop,
    button_push,
  } = useGlobalContext()
  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="settings-inner-container">{children}</div>
    </div>,
    document.body
  )
}

export default Modal
