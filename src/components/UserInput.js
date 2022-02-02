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
    visualMatches,
  } = useGlobalContext()

  return (
    <div className="user-input">
      <div className="user-profile-container">
        <div className="user-avatar-container">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/frederick-the-great-wilhelm-camphausen.jpg"
            alt="user avatar"
          />
        </div>
        <div className="suggestion">
          <p>: {currentPhrase}</p>
          <div className="visual-progress">
            {visualMatches.map((item, index) =>
              item.isCorrect ? (
                <div className="green">{item.char}</div>
              ) : (
                <div className="red">{item.char}</div>
              )
            )}
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder={currentPhrase}
        value={userText}
        onKeyPress={(e) => {
          //  e.key === "Enter" && setUserText("")
          if (e.key === "Enter") {
            if (percentageMatch > 80) {
              setSuccessfulAttack(true)
              setTimeout(() => {
                setSuccessfulAttack(false)
              }, 500)
            }
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
      <div className="extras">
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
    </div>
  )
}

export default UserInput
