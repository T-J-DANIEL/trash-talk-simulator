import { useGlobalContext } from "../context"

//component for user's input
//TODO too much imported all over the place take a look a this stuff everywhere
const UserInput = () => {
  const {
    userText,
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
    comboChain,
    setComboChain,
    oppAttackSuccess,
    gameRunning,
    focusInput,
  } = useGlobalContext()

  const interleave = (arr, thing) =>
    [].concat(...arr.map((n) => [n, thing])).slice(0, -1)

  const idea = visualMatches.map((item, currentIndex) =>
    item.map((item, index) =>
      item.isCorrect ? (
        <span key={index} className="green">
          {item.char}
        </span>
      ) : (
        <span key={index} className="red">
          {item.char}
        </span>
      )
    )
  )

  //wrap all in span
  const wrappedIdea = idea.map((item) => <span>{item}</span>)
  return (
    //{`user input ${oppAttackSuccesfull?"animate":""}`}
    <div
      className={`user-input ${oppAttackSuccess ? "animate" : ""} ${
        !gameRunning && "paused"
      }`}
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
        onKeyPress={(e) => {
          //  e.key === "Enter" && setUserText("")
          //If opponent is successful then user is stopped,there is animation and then we get new phrase
          if (e.key === "Enter") {
            if (percentageMatch > 80) {
              setOppAttacked(true)
              // setTimeout(() => {
              //   setOppAttack(false)
              // }, 500)

              setComboChain((prev) => [
                ...prev,
                <div className={`gold-coin gold-streak`} />,
              ])
            }
            setScore((prev) => prev + percentageMatch)
            setPercentageMatch(0)
            setUserText("")
            setComboChain([])
            newPhrases()
            //  TODO should call this it own function instead of so many steps
            //if user accuracy is low it should count as a failed attack and opponent should attack successfully
            //there should also be a brief pause bttween each question for the animation success  or fail
          }
        }}
        onChange={(e) => {
          setUserText(e.target.value)
          //TODOwhy wont this update on time?
          //maybe if we used a handle change function? it might force update every time
          compareValues(e.target.value)
          //if 100% or timer reaches 0 then next question
          // if score is higher than 80% then hitmarker and bonus points
          //if we get 5 over 80 in a ro we get ratdog special nuke
          //TODO maybe more stats under extras
        }}
        disabled={isInputDisabled}
      />
      <div className="extras">
        <span>{percentageMatch}</span>
        <span>{score}</span>
        <button
          onClick={(e) => {
            setOppAttacked((prev) => !prev)
          }}
        >
          attack
        </button>
      </div>
    </div>
  )
}

export default UserInput
