import { useGlobalContext } from "../context"
import "../opp-styles.css"
import Feather from "./Feather"
import ThoughtCloud from "../ThoughtCloud"
import OppAvatar from "./OppAvatar"
//component for the opponent text display
const Opponent = () => {
  const {
    opponentPhrase,
    oppAttack,
    currentPhrase,
    userAttackSuccess,
    setUserAttackSuccess,
    gameRunning,
    // oppAttackTimer,
    oppAttackSuccess,
    gameEnded,
    level,
    remaining,
    panicMode,
    gameState,
  } = useGlobalContext()

  return (
    <div className="opp-container">
      <div
        className={`opponent ${
          oppAttackSuccess && "opp-successful-attack-animation"
        }`}
      >
        <ThoughtCloud
          classInfo={`thought-bubble ${
            oppAttackSuccess && "hide-on-opp-success"
          } ${
            !gameEnded &&
            !oppAttackSuccess &&
            !userAttackSuccess &&
            `opp-text-animation ${level}`
          } ${!gameRunning && "paused"}`}
          panicMode={panicMode}
        />
        <div className={`opp-phrase-container `}>
          {/* this div below did not exist it was just the p tag*/}
          <div className={`${
              !gameEnded && oppAttackSuccess
                ? "opp-successful-attack"
                : `${
                    !gameEnded &&
                    !oppAttackSuccess &&
                    !userAttackSuccess &&
                    `opp-text-animation ${level}`
                  }`
            } ${userAttackSuccess && "hide-on-opp-success"} ${
              !gameRunning && "paused"
            }`}>
            <p
              className={`opponent-phrase
              `}
            >
            {opponentPhrase}
          </p>
          </div>

          <OppAvatar userAttackSuccess={userAttackSuccess} />
        </div>
        {/* <Feather /> */}
      </div>
    </div>
  )
}

export default Opponent

//if game has not ended and opp successfully attacks(end of time)
// !gameEnded && oppAttackSuccess
//   ? "successfulAttack"
//has user attacked? play defeat animation
// :
// userAttackSuccess?
// "opponent-defeat-animation"
//if neither then play the thinking animation
// : panicMode?
// "panicAnimation"
// :
// "opp-text-animation"

// className={`opponent
// ${oppAttackSuccess && "successfulAttack"} ${userAttackSuccess?"opponent-defeat-animation":"opp-text-animation"} ${level}  ${!gameRunning && "paused"}
// `}
// className={`opponent  ${
//   !gameEnded && oppAttackSuccess
//     ? "successfulAttack"
//     : userAttackSuccess
//     ? "opponent-defeat-animation"
//     : "opp-text-animation"
// } ${level} ${!gameRunning && "paused"}`}
//if a successful attack is initiated then we add the opponent-defeat-animation class to opponent (shake and color red)
// const attackClasses = `opponent ${
//   oppAttack ? "opponent-defeat-animation" : ""
// }`
// const textClasses = ` ${gameRunning ? `${level} play` : `${level} pause`}`
// TODO need to add opp attacked animation based on userAttackSuccess
            //if game has not ended and opp is succesfull then succesfull attack animation
            //if user attack is succesfull then opponent-defeat-animation