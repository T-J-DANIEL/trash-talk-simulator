import { useGlobalContext } from "../context"
import Feather from "./Feather"
import Portrait from "./Portrait"
import ThoughtCloud from "../ThoughtCloud"
import SpeechBubbleTail from "../SpeechBubbleTail"
import ThoughtBubbleTrail from "./ThoughtBubbleTrail"
//component for user's input
//TODO too much imported all over the place take a look a this stuff everywhere
import useGameState from "../hooks/useGameState"
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
  useGameState()
  // successfulAttack
  return (
    <div className="user-container">
      {/* <div
        className={`user-avatar-container ${
          oppAttackSuccess ? "animate" : ""
        } ${userAttacked ? "successfulAttack" : ""} ${
          !gameRunning && "paused"
        }`}
      >
        <Portrait />
      </div> */}

      <div className={`user-text-container ${userAttacked && "show-speech"}`}>
        {/* classname above ^^^  */}
        {/* <div className="suggestion"> */}
        {/* <p>: {currentPhrase}</p> */}
        <ThoughtCloud
          classInfo={`user-thought-bubble ${
            userAttacked && "opp-attack-success"
          }`}
        />
        <div className="caps-lock-indicator">{isCapsLockOn && "CAPS"}</div>
        <div className="visual-progress">
          {/* {interleave(wrappedIdea, <span>&nbsp;</span>)} */}
          {/* {wrappedIdea} */}
          {visualMatches}
          {/* {console.log(wrappedIdea)} */}
          {/* <span>{isCapsLockOn && "capsLockOn"}</span> */}
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
        {/* <h2 className="modal-sub-heading">Streak</h2> */}
        {/* {<div className="">{streakArray ? streakArray : "-"}</div>} */}
        <div className="user-avatar-container">
          <ThoughtBubbleTrail
            classInfo={`user-thought-bubble-tail ${
              userAttacked && "opp-attack-success"
            }`}
          />
          <PlaceholderAvatar classInfo={"placeholder-avatar user-avatar"} />

          <SpeechBubbleTail
            // classInfo={`user-speech-bubble-tail`}
            classInfo={`user-speech-bubble-tail ${
              !userAttacked && "opp-attack-success"
            }`}
          />
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
      //   } ${userAttacked ? "successfulAttack" : ""} ${
      //     !gameRunning && "paused"
      //   }`}
      // >