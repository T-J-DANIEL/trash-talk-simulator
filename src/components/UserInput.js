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
    comboChain,
    setComboChain,
  } = useGlobalContext()
  const interleave = (arr, thing) =>
    [].concat(...arr.map((n) => [n, thing])).slice(0, -1)

  const idea = visualMatches.map((item, currentIndex) =>
    item.map((item, index) =>
      item.isCorrect ? (
        <span key={index} className="green">{item.char}</span>
      ) : (
        <span key={index} className="red">{item.char}</span>
      )
    )
  )

  //wrap all in span
  const wrappedIdea = idea.map(item=><span>{item}</span>)
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
        onKeyPress={(e) => {
          //  e.key === "Enter" && setUserText("")
          if (e.key === "Enter") {
            if (percentageMatch > 80) {
              setSuccessfulAttack(true)
              setTimeout(() => {
                setSuccessfulAttack(false)
              }, 500)
              
              setComboChain((prev) => [...prev, <div className={`gold-coin gold-streak`} />])
            }
            setScore((prev) => prev + percentageMatch)
            setPercentageMatch(0)
            setUserText("")
            setComboChain([])
            
           
            newPhrases()
            
            //should call this it own function
          }
        }}
        onChange={(e) => {
          setUserText(e.target.value)
          // why wont this update on time?
          //maybe if we used a handle change function? it might force update every time
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
