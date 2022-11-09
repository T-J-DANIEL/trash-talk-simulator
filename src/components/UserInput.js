import { useGlobalContext } from "../context"
import Feather from "./Feather"
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
  } = useGlobalContext()

  // successfulAttack
  return (
    <div
      className={`user-input ${oppAttackSuccess ? "animate" : ""} ${
        userAttacked ? "successfulAttack" : ""
      } ${!gameRunning && "paused"}`}
    >
      <div className="user-profile-container">
        <div className="user-avatar-container">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/frederick-the-great-wilhelm-camphausen.jpg"
            alt="user avatar"
          />
        </div>
        <div className="suggestion">
          {/* <p>: {currentPhrase}</p> */}
          <div className="visual-progress">
            {interleave(wrappedIdea, <span>&nbsp;</span>)}
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder={currentPhrase}
        value={userText}
        ref={focusInput}
        // onKeyDown={() => {
        //   playTypingSound()
        // }}
        // onKeyUp={
        //   stopTypingSound
        // }
        onKeyPress={(e) => {
          
          
          // e.key === "Enter"? scoreHandler():playTypingSound()
        
          e.key === "Enter" && scoreHandler()
        }}
        spellcheck="false"
        onChange={(e) => {
          //TODO why are you changing both state values?

          setUserText(e.target.value)

          compareValues(e.target.value)
          //if 100% or timer reaches 0 then next question
          // if score is higher than 80% then hitmarker and bonus points
          //if we get 5 over 80 in a ro we get ratdog special nuke
          //TODO maybe more stats under extras
        }}
        disabled={isInputDisabled}
      />
      {/* <Feather /> */}
      {/* <div className="extras">
        <span>perc match{percentageMatch}</span>
        <span>score:{score}</span>
        <span>high score :{highScore}</span>
      </div> */}
    </div>
  )
}

export default UserInput
