import { useGlobalContext } from "../context"
import Feather from "./Feather"
import Portrait from "./Portrait"
import ThoughtCloud from "../ThoughtCloud"
import SpeechBubbleTail from "../SpeechBubbleTail"
import ThoughtBubbleTrail from "./ThoughtBubbleTrail"
import StreakCoin from "./StreakCoin"
//component for user's input
//TODO too much imported all over the place take a look a this stuff everywhere
// import useGameState from "../hooks/useGameState"
import PlaceholderAvatar from "./PlaceHolderAvatar"
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
    streak,
    showMobileKeyboard,
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
    userAttackSuccess,
    displaySettings,
    playTypingSound,
    isSoundOn,
    stopTypingSound,
    isCapsLockOn,
    setIsCapsLockOn,
    displayText,
    capsRef,
    streakArray,
  } = useGlobalContext()
  // useGameState()
  // successfulAttack
  return (
    <div className="user-container">
      {/* <div
        className={`user-avatar-container ${
          oppAttackSuccess ? "animate" : ""
        } ${userAttackSuccess ? "successfulAttack" : ""} ${
          !gameRunning && "paused"
        }`}
      >
        <Portrait />
      </div> */}
      <div className="user">
        <div
          className={`user-text-container ${
            userAttackSuccess && "show-speech"
          }`}
        >
          {/* classname above ^^^  */}
          {/* <div className="suggestion"> */}
          {/* <p>: {currentPhrase}</p> */}
          <ThoughtCloud
            classInfo={`user-thought-bubble ${
              userAttackSuccess && "hide-on-opp-success"
            }`}
          />
          <div className="caps-lock-indicator">
            {isCapsLockOn && "CAPS LOCK"}
          </div>
          <div className="visual-progress">
            {/* {interleave(wrappedIdea, <span>&nbsp;</span>)} */}
            {/* {wrappedIdea} */}
            {visualMatches}
            {/* {console.log(visualMatches.forEach(item=>item.innerHTML))} */}
            {/* <span>{isCapsLockOn && "capsLockOn"}</span> */}
          </div>
          {/* </div> */}
          <input
            id="inputBox"
            type={"text"}
            // placeholder={currentPhrase}
            value={userText}
            ref={focusInput}
            maxLength={currentPhrase.length}
            onBlur={() => {
              !showMobileKeyboard && focusInput.current.focus()
            }}
            className="user-text-input"
            // onkey up was deprecated replaced with onkeydown
            onKeyDown={(e) => {
              e.key === "Enter" && scoreHandler()
            }}
            // autoFocus
            autoComplete="off"
            spellCheck="false"
            onChange={(e) => {
              //each letter typed is checked for "_" or "-" and replaced
              setUserText(e.target.value.replace(" ", "_").replace("-", "‑"))
              compareValues(e.target.value.replace(" ", "_").replace("-", "‑"))
            }}
            disabled={isInputDisabled}
          ></input>
          <StreakCoin streak={streak} streakArray={streakArray} />
          <div className="user-avatar-container">
            {/* <ThoughtBubbleTrail
              classInfo={`user-thought-bubble-tail ${
                userAttackSuccess && "hide-on-opp-success"
              }`}
            /> */}
            <PlaceholderAvatar classInfo={"user-avatar"} />
            <SpeechBubbleTail
              // classInfo={`user-speech-bubble-tail`}
              classInfo={`user-speech-bubble-tail ${
                !userAttackSuccess && "hide-on-opp-success"
              }`}
            />
          </div>
        </div>
      </div>
      {/* <div className="feather-position-user">
          <Feather />
        </div> */}
      {/* <div className="extras">
          <span>perc match{percentageMatch}</span>
          <span>score:{score}</span>
          <span>high score :{highScore}</span>
        </div> */}

      {/* <div
        className={`accuracy-indicator ${
          percentageMatch >= 85 && "accuracy-85plus"
        } ${percentageMatch === 100 && "accuracy-100"}`}
      ></div>
      <div className={`accuracy-indicator`}>{isCapsLockOn && "CAPS LOCK"}</div> */}
    </div>
  )
}

export default UserInput
//   <div
      //   className={`user-scroll-container ${
      //     oppAttackSuccess ? "animate" : ""
      //   } ${userAttackSuccess ? "successfulAttack" : ""} ${
      //     !gameRunning && "paused"
      //   }`}
      // >