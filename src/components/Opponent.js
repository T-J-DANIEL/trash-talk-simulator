import { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../context"
//component for the opponent text display
const Opponent = () => {
  const {
    opponentPhrase,
    oppAttack,
    scroll,
    setScroll,
    responseTime,
    currentPhrase,
    userAttacked,
    setUserAttacked,
    gameRunning,
    // oppAttackTimer,
    oppAttackSuccess,
    level,
  } = useGlobalContext()

  //this checks what the difficulty is and then sets response time accordingly
  //TODO take out all this logic and leave presentational logic only

  // const [gameProgress, setGameProgress] = useState(gameRunning)

  // const responseTime = () => {
  //   switch (level) {
  //     case "easy":
  //       return 15000
  //     case "normal":
  //       return 10000
  //     case "hard":
  //       return 7000
  //     default:
  //       return 10000
  //   }
  // }



  //whats this    ?
  // const [timer, setTimer] = useState(false)
  //ref to access timer and ?
  // const timerRef = useRef(null)
  // //startOppAttempt fn
  // const oppSuccess = () => {
  //   //pause game
  //   pauseResume()
  //   //decrement player score
  //   setScore(prev=>prev-30)
  //   //clear player streak
  //   setStreak(0)
    //clear text animation
      //TODO new variable here or base it on pp attack?
    //play opp success animation
      //TODO oppAttack?
    //play user loss animation
      //same?
    //start timeout and at end stop success animation
      //set attack to false?
    //restart opp text scroll animation

    //new phrases
    //pauseResume() //resume game
    //set new opp timer
    
  // }
  // const resetAfterScore

  // const playerSuccess = () => {
  //   pauseResume()
    //calulate playe score and incrment
    //incremnt streak if required
    //clear opp text animatino
    //play user success animation
    //play opp loss animation
    //start timeout and at end stop success animation
    //new phrases
    //restart opp text scroll animation
    //pauseResume()

    //copied from context
    //TODOpercentageMatch<50? oppatck true else use attack true
    //   setUserAttack(true)
    //   setScore((prev) => prev + percentageMatch)
    //   setTimeout(() => {
    //     setUserAttack(false)

    //   }, 500)

    //   //same as above in 'enter' function really
    //   setPercentageMatch(0)
    //   setUserText("")
    //   setComboChain((prev) => [
    //     ...prev,
    //     <div className={`gold-coin gold-streak`}>{comboChain.length + 1}X</div>,
    //   ])
    //   // see this
    //   newPhrases()
    //   //should call this it own function
    // }
  // }
  //endOppAttempt fn
  //clear timeouts
  //end animation
  //postive or negative animation

  //when opponent phrase changes...
  // useEffect(() => {
  //   //stop the 'scroll reveal text' animation
  //   setTimeout(() => {
  //     setScroll(false)
  //     console.log("ended")
  //   }, 0)
  //   //start a new 'scroll reveal text' animation
  //   setTimeout(() => {
  //     setScroll(true)
  //     console.log("started")
  //   }, 20)
  //   //change the successful user attack state to false and clear the current countdown to attack and start a new countdown to attack all in order, 10ms difference
  //   setTimeout(() => {
  //     setUserAttacked(false)
  //     clearTimeout(timerRef.current)
  //   }, 30)
  //   setTimeout(
  //     () => {
  //       //in more detail we make an attack countdown, this will run when the difficulty setting response time is up
  //       //TODO something aint right here and change the variable names btw,
  //       //currently at end of timer if  user has succesfully attacked then we set the user is attacked state to false if the not then we set it to true however we need to clear this time out if the user has succesfully attacked not check at end.
  //       let attackTimer = setTimeout(() => {
  //         oppAttack === true
  //           ? setUserAttacked(false)
  //           : setUserAttacked(true)
  //         console.log("attack")
  //       }, responseTime)
  //       // attach current timer to timer ref
  //       timerRef.current = attackTimer
  //     },
  //     40,
  //     oppAttack
  //   )
  // }, [opponentPhrase])
  // TODO synchro issue, ending timer is causing ended,ended scroll, started
  //correct order is end start start scroll end scroll? check order of timouts they should be synced

  //if a successful attack is initiated then we add the animate class to opponent (shake and color red)
  const attackClasses = `opponent ${oppAttack ? "animate" : ""}`
  const textClasses = ` ${gameRunning ? `${level} play` : `${level} pause`}`
  // diff classes for each level

  return (
    <div className={attackClasses}>
      {userAttacked && (
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
      <p
        className={`${
          oppAttackSuccess ? "successfulAttack" : `opp-text-animation ${level}`
        } ${!gameRunning && `paused`}`}
        // className={`opp-text-animation ${
        //   gameRunning ? level : `${level} paused`
        // }`}
        //TODO need to have pause based on running and animation+level based on attack status

        //`${oppAttackSuccess?"enlarge":`opp-text-animation ${level}`} ${!gameRunning && `paused`}`
      >
        {opponentPhrase}
      </p>
      <span>
        {/* {oppAttackSuccess===true
          ? "ATTACKED"
          : `${gameRunning} ${level}`} */}
        {`${gameRunning} ${level}`}
        {`${oppAttackSuccess}`}
      </span>
    </div>
  )
}

export default Opponent
