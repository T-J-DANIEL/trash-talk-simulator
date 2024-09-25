import { useGlobalContext } from "../../context"
// import Feather from "./Feather"

import ThoughtCloud from "../shared/ThoughtCloud"
import SpeechBubbleTail from "../shared/SpeechBubbleTail"
import ThoughtBubbleTrail from "../shared/ThoughtBubbleTrail"
import StreakCoin from "./StreakCoin"
import UserAvatar from "./UserAvatar"
//component for user's input
//TODO too much imported all over the place take a look a this stuff everywhere
// import useGameState from "../hooks/useGameState"
import PlaceholderAvatar from "../shared/PlaceHolderAvatar"
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
          oppAttackSuccess ? "opponent-defeat-animation" : ""
        } ${userAttackSuccess ? "successfulAttack" : ""} ${
          !gameRunning && "paused"
        }`}
      >
    </div> */}
      {/* <Portrait /> */}
      <div className="user">
        <div
          className={`user-text-container ${
            // userAttackSuccess && "show-speech"
            userAttackSuccess && "opp-successful-attack"
          }`}
        >
          {/* classname above ^^^  */}
          {/* <div className="suggestion"> */}
          {/* <p>: {currentPhrase}</p> */}
          <ThoughtCloud
            classInfo={`user-thought-bubble ${
              userAttackSuccess && "hide-on-opp-success"
            }`}
            percentageMatch={percentageMatch}
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
            onPaste={(e) => {
              e.preventDefault()
              return false
            }}
            onCopy={(e) => {
              e.preventDefault()
              return false
            }}
            value={userText}
            ref={focusInput}
            maxLength={currentPhrase.length}
            onBlur={() => {
              showMobileKeyboard && focusInput.current.focus()
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
            {/* <ThoughtBubbleTrail
              classInfo={`user-thought-bubble-tail ${
                userAttackSuccess && "hide-on-opp-success"
              }`}
            /> */}
            <SpeechBubbleTail
              classInfo={`user-speech-bubble-tail ${
                !userAttackSuccess && "hide-on-opp-success"
              }`}
            />
          <div className="user-avatar-container">
              <UserAvatar />
              {/* <StreakCoin streak={streak} streakArray={streakArray} />  */}
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
//     oppAttackSuccess ? "opponent-defeat-animation" : ""
//   } ${userAttackSuccess ? "successfulAttack" : ""} ${
//     !gameRunning && "paused"
//   }`}
// >
