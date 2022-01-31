import { useGlobalContext } from "../context"
const UserInput = () => {
  const {
    userText,
    setUserText,
    currentPhrase,
    compareValues,
    percentageMatch,
    setPercentageMatch,
    setSuccessfulAttack,
    isYeOlde,
    setIsYeOlde,
    score,
    setScore,
    newPhrases,
    isInputDisabled,
    setIsinputDisabled,
  } = useGlobalContext()

  return (
    <div className="user-input">
      <div className="suggestion">
        <p>{currentPhrase}</p>
      </div>
      <div className="user-avatar-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt="user avatar"
        />
      </div>
      <div className="user-profile-container">
        <input
          type="text"
          value={userText}
          onKeyPress={(e) => {
          //  e.key === "Enter" && setUserText("")
            if(e.key === "Enter"){
             if(percentageMatch>80) {setSuccessfulAttack(true)
              setTimeout(()=>{setSuccessfulAttack(false)},500)}
              
              setScore((prev) => prev + percentageMatch)
              setPercentageMatch(0)
              setUserText("")
              newPhrases()
              //should call this it own function
              }

          }}
          onChange={(e) => {
            setUserText(e.target.value)
            compareValues(e.target.value)
            
            //if 100% or timer reaches 0 then next question
            // if score is higher than 80% then hitmarker and bonus points
            //if we get 5 over 80 in a ro we get ratdog special nuke
          }}
          disabled={isInputDisabled}
        />
      </div>
      <span>{percentageMatch}</span>
      <span>{score}</span>
      <button
        onClick={(e) => {
          setSuccessfulAttack((prev) => !prev)
        }}
      >
        attack
      </button>
    </div>
  )
}

export default UserInput
