import { useGlobalContext } from "../context"
import Feather from "./Feather"
import Portrait from "./Portrait"
//component for user's input
//TODO too much imported all over the place take a look a this stuff everywhere
const UserInput = () => {
  const {
    userText,
    highScore,
    setUserText,
    currentPhrase,
    compareValues,
    percentageMatch,
    setPercentageMatch,
    setOppAttacked,
    isYeOlde,
    setIsYeOlde,
    score,
    setScore,
    newPhrases,
    isInputDisabled,
    setIsinputDisabled,
    visualMatches,
    oppAttackSuccess,
    gameRunning,
    focusInput,
    wrappedIdea,
    interleave,
    setIsNewGame,
    scoreHandler,
    userAttacked,
    displaySettings,
    playTypingSound,
    isSoundOn,
    stopTypingSound,
    isCapsLockOn,
    setIsCapsLockOn,
    displayText,
    capsRef,
  } = useGlobalContext()

  // successfulAttack
  return (
    <div className="user-container">
      <div
        className={`user-avatar-container ${
          oppAttackSuccess ? "animate" : ""
        } ${userAttacked ? "successfulAttack" : ""} ${
          !gameRunning && "paused"
        }`}
      >
        <Portrait />
      </div>
      <div
        className={`user-scroll-container ${
          oppAttackSuccess ? "animate" : ""
        } ${userAttacked ? "successfulAttack" : ""} ${
          !gameRunning && "paused"
        }`}
      >
        <div className="user-text-container">
          {/* <div className="suggestion"> */}
          {/* <p>: {currentPhrase}</p> */}
          <div className="visual-progress">
            {/* {interleave(wrappedIdea, <span>&nbsp;</span>)} */}
            {/* {wrappedIdea} */}
            {visualMatches}
            {/* {console.log(wrappedIdea)} */}
            <span>{isCapsLockOn && "capsLockOn"}</span>
          </div>
          {/* </div> */}

          <input
            id="inputBox"
            type={"text"}
            // placeholder={currentPhrase}
            value={userText}
            ref={focusInput}
            onBlur={() => {
              focusInput.current.focus()
            }}
            className="user-text-input"
            // onkey up waw deprecated replaced with onkeydown
            onKeyDown={(e) => {
              e.key === "Enter" && scoreHandler()
            }}
            // autoFocus
            autoComplete="false"
            spellCheck="false"
            onChange={(e) => {
              setUserText(e.target.value.replace(" ", "_").replace("-", "‑"))
              compareValues(e.target.value.replace(" ", "_").replace("-", "‑"))
            }}
            disabled={isInputDisabled}
          ></input>
        </div>
        {/* <div className="feather-position-user">
          <Feather />
        </div> */}
        {/* <div className="extras">
          <span>perc match{percentageMatch}</span>
          <span>score:{score}</span>
          <span>high score :{highScore}</span>
        </div> */}
      </div>
    </div>
  )
}

export default UserInput
