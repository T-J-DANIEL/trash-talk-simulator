import { useGlobalContext } from "../context"
const UserInput = () => {
  const {
    userText,
    setUserText,
    currentPhrase,
    compareValues,
    percentageMatch,
    setSuccessfulAttack,
    isYeOlde,
    setIsYeOlde,
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
          onChange={(e) => {
            setUserText(e.target.value)
            compareValues(e.target.value)
            //if 100% or timer reaches 0 then next question
            // if score is higher than 80% then hitmarker and bonus points
            //if we get 5 over 80 in a ro we get ratdog special nuke
          }}
        />
      </div>
      <div>{percentageMatch}</div>
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
