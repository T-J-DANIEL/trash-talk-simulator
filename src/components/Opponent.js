import { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../context"
//component for the opponent text display
const Opponent = () => {
  const {
    opponentPhrase,
    oppAttack,
    scroll,
    setScroll,
    level,
    currentPhrase,
    userAttacked,
    setUserAttacked,
  } = useGlobalContext()

  //this checks what the difficulty is and then sets response time accordingly
  const responseTime = () => {
    switch (level) {
      case "easy":
        return 15000
      case "normal":
        return 10000
      case "hard":
        return 7000
      default:
        return 10000
    }
  }
  //Rewritten this to use switch case and have default
  /*  const responseTime =
    level === "easy"
      ? 15000
      : level === "normal"
      ? 10000
      : level === "hard"
      ? 7000
      : "" */

  //whats this    ?
  const [timer, setTimer] = useState(false)
  //ref to access timer and ?
  const timerRef = useRef(null)

  //when opponent phrase changes...
  useEffect(() => {
    //stop the 'scroll reveal text' animation
    setTimeout(() => {
      setScroll(false)
      console.log("ended")
    }, 0)
    //start a new 'scroll reveal text' animation
    setTimeout(() => {
      setScroll(true)
      console.log("started")
    }, 20)
    //change the successful user attack state to false and clear the current countdown to attack and start a new countdown to attack all in order, 10ms difference
    setTimeout(() => {
      setUserAttacked(false)
      clearTimeout(timerRef.current)
    }, 30)
    setTimeout(
      () => {
        //in more detail we make an attack countdown, this will run when the difficulty setting response time is up
        //TODO something aint right here and change the variable names btw,
        //currently at end of timer if  user has succesfully attacked then we set the user is attacked state to false if the not then we set it to true however we need to clear this time out if the user has succesfully attacked not check at end.
        let attackTimer = setTimeout(() => {
          oppAttack === true
            ? setUserAttacked(false)
            : setUserAttacked(true)
          console.log("attack")
        }, responseTime)
        // attach current timer to timer ref
        timerRef.current = attackTimer
      },
      40,
      oppAttack
    )
  }, [opponentPhrase])
  // TODO synchro issue, ending timer is causing ended,ended scroll, started
  //correct order is end start start scroll end scroll? check order of timouts they should be synced

  //if a successful attack is initiated then we add the animate class to opponent (shake and color red)
  const attackClasses = `opponent ${oppAttack ? "animate" : ""}`
  const textClasses = `opponent-text ${scroll ? level : ""}`
  // diff classes for each level
  return (
    <div className={attackClasses}>
      {oppAttack && (
        <div className="hitMarker">
          <div className="clock-hand clock">
            <div></div>
            <div></div>
          </div>
          <div className="clock-hand anti">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="opp-user-container">
        <div className="op-avatar">
          <img
            src="https://i.pinimg.com/236x/a0/21/9d/a0219dd7fe12d9142e576ed3cfad1b10--dutch-republic-famous-men.jpg"
            alt=""
          />
        </div>
        <div>user{level}: </div>
      </div>
      <p className={textClasses}>{opponentPhrase}</p>
      <span>
        {userAttacked && oppAttack
          ? "NOT"
          : userAttacked
          ? "ATTACKED"
          : "*"}
      </span>
    </div>
  )
}

export default Opponent
