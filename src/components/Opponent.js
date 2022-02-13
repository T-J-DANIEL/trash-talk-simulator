import { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../context"

const Opponent = () => {
  const {
    opponentPhrase,
    successfulAttack,
    scroll,
    setScroll,
    level,
    currentPhrase,
    userAttacked,
    setUserAttacked,
  } = useGlobalContext()

  const responseTime =
    level === "easy"
      ? 15000
      : level === "normal"
      ? 10000
      : level === "hard"
      ? 7000
      : ""
  const [timer, setTimer] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setScroll(false)
      console.log("ended")
    }, 0)
    setTimeout(() => {
      setScroll(true)
      console.log("started")
    }, 20)

    setTimeout(() => {
      setUserAttacked(false)
      clearTimeout(timerRef.current)
    }, 30)

    setTimeout(() => {
      let attackTimer = setTimeout(() => {
        successfulAttack === true ? setUserAttacked(false) : setUserAttacked(true)
        console.log("attack")
      }, responseTime)
      timerRef.current = attackTimer
    }, 40,successfulAttack)
  }, [opponentPhrase])

  //scyncro issue, ending timer is causeing ended,ended scrol, started
  //correct order is end start start scroll end scroll
  const attackClasses = `opponent ${successfulAttack ? "animate" : ""}`
  const textClasses = `opponent-text ${scroll ? level : ""}`
  // diff classes for each level
  return (
    <div className={attackClasses}>
      {successfulAttack && (
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
      <span>{userAttacked && successfulAttack? "NOT" : userAttacked? "ATTACKED" : "*"}</span>
    </div>
  )
}

export default Opponent
