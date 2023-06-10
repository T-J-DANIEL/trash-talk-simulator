import { useGlobalContext } from "../context"
import Feather from "./Feather"
import ThoughtCloud from "../ThoughtCloud"
import OppAvatar from "./OppAvatar"
//component for the opponent text display
const Opponent = () => {
  const {
    opponentPhrase,
    oppAttack,
    currentPhrase,
    userAttacked,
    setUserAttacked,
    gameRunning,
    // oppAttackTimer,
    oppAttackSuccess,
    gameEnded,
    level,
    remaining,
    panicMode,
  } = useGlobalContext()

  //if a successful attack is initiated then we add the animate class to opponent (shake and color red)
  const attackClasses = `opponent ${oppAttack ? "animate" : ""}`
  // const textClasses = ` ${gameRunning ? `${level} play` : `${level} pause`}`
  // TODO need to add opp attacked animation based on userAttacked

  return (
    <div className="opp-container">
      <div
        className={`opponent ${oppAttackSuccess && "show-speech"} ${
          oppAttackSuccess && "successfulAttack"
        }`}
      >
        {/* opp text box */}

        <div
          //TODO ADDED a div here around p tag is this better?
          className={`opp-phrase-container `}
          // className={"opp-phrase-container" +
          //   !gameEnded &&
          //   `${
          //     oppAttackSuccess
          //       ? "successfulAttack"
          //       : userAttacked
          //       ? "animate"
          //       : `opp-text-animation ${level}`
          //   } ${!gameRunning && `paused`} `
          // }
        >
          <p
            className={`opponent-phrase ${
              !gameEnded && oppAttackSuccess
                ? "successfulAttack"
                : userAttacked
                ? "animate"
                : "opp-text-animation"
            } ${level}
             ${!gameRunning && "paused"}`}
          >
            {opponentPhrase}
          </p>
          <ThoughtCloud
            classInfo={`thought-bubble ${
              oppAttackSuccess && "opp-attack-success"
            }`}
          />
          <OppAvatar />
        </div>
        {/* <Feather /> */}
      </div>
    </div>
  )
}

export default Opponent

{
  /* <span> */
}
{
  /* {oppAttackSuccess===true
    ? "ATTACKED"
    : `${gameRunning} ${level}`} */
}
{
  /* {`${gameRunning} ${level}`}
  {`${oppAttackSuccess}`} */
}
{
  /* </span> */
}
{
  /* <h1>{panicMode?"PANIC!!!!!!!!!!!!!!!":""}</h1> */
}
