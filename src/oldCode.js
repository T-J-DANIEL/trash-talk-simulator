// const splitLists = (list) => {
//   let count = 0
//   return list.split(" ").reduce(
//     (total, item, index) => {
//       total[count].push(item)
//       count = count < 2 ? count + 1 : 0
//       return total
//     },
//     [[], [], []]
//   )
// }
// console.log(
//   splitLists(
//     "artless base-court apple-john bawdy bat-fowling baggage beslubbering beef-witted barnacle bootless beetle-headed bladder churlish boil-brained boar-pig cockered clapper-clawed bugbear clouted clay-brained bum-bailey craven common-kissing canker-blossom currish crook-pated clack-dish dankish dismal-dreaming clotpole dissembling dizzy-eyed coxcomb droning doghearted codpiece errant dread-bolted death-token fawning earth-vexing dewberry fobbing elf-skinned flap-dragon froward fat-kidneyed flax-wench frothy fen-sucked flirt-gill gleeking flap-mouthed foot-licker goatish fly-bitten fustilarian gorbellied folly-fallen giglet impertinent fool-born gudgeon infectious full-gorged haggard jarring guts-griping harpy loggerheaded half-faced hedge-pig lumpish hasty-witted horn-beast mammering hedge-born hugger-mugger mangled hell-hated joithead mewling idle-headed lewdster paunchy ill-breeding lout pribbling ill-nurtured maggot-pie puking knotty-pated malt-worm puny milk-livered mammet qualling motley-minded measle rank onion-eyed minnow reeky plume-plucked miscreant roguish pottle-deep moldwarp ruttish pox-marked mumble-news saucy reeling-ripe nut-hook spleeny rough-hewn pigeon-egg spongy rude-growing pignut surly rump-fed puttock tottering shard-borne pumpion unmuzzled sheep-biting ratsbane vain spur-galled scut venomed swag-bellied skainsmate villainous tardy-gaited strumpet warped tickle-brained varlot wayward toad-spotted vassal weedy unchin-snouted whey-face yeasty weather-bitten wagtail"
//   )[2]
// )


// const opponentAttackPhase = () =>{

  //   // setSt("exit")
  //   clearTimeout(timerId.current)
  //   //oppattack animation (pausable)
  //     setOppAttackSuccess(true)
  //     //disable use input (pause does not effect this)
  //     setIsInputDisabled(true)
  //     setStart(Date.now())
  //     setRemaining(2000)
  //     //Start time must be variable how to plug it in?
  //     timerId.current = setTimeout(()=>{
  //         setOppAttackSuccess(false)
  //         setIsInputDisabled(false)
  //         newPhrases()
  //         //start new scroll animation
  //         setSt("start")

  //     },2000)

  //   //set a timeout
  //   }

  //game running animatino starts at end change status to attacking
  // Assignments to the 'timerId' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.eslintreact-hooks/exhaustive-deps


//phrase choosing function v1
// //Function to get new random phrases for user and opponent
  // const newPhrases = () => {
  //   //copy phrase list into new working array
  //   let workingArray = [...currentPhraseList]

  //   //NOTE opp and user both use same code can be replaced with a function

  //   //For User
  //   //pick a random phrase from this workingArray
  //   const randomUserIndex = Math.floor(Math.random() * workingArray.length)
  //   //and set it as the current phrase
  //   setCurrentPhrase(workingArray[randomUserIndex].insult)
  //   //remove this phrase from the working array so it cannot be chosen for opp
  //   workingArray = workingArray.filter((_, index) => index !== randomUserIndex)

  //   //For Opp
  //   //pick random phrase from this now filtered working array for opp
  //   const randomOppIndex = Math.floor(Math.random() * workingArray.length)
  //   setOpponentPhrase(workingArray[randomOppIndex].insult)
  //   //and filter it out frm working array
  //   workingArray = workingArray.filter(
  //     (item, index) => index !== randomOppIndex
  //   )
  //   //set our current array to be our working array so when we call new phrase next time it won contain the phrases we just used
  //   setCurrentPhraseList(workingArray)
  //   //clear users text box, ready for new input
  //   setUserText("")
  // }

  //phrase choosing function v2 (added functions to clean up code)
  // const newPhrases = () => {
  //   //copy phrase list into new working array
  //   let workingArray = [...currentPhraseList]
  //   const getRandomIndex = () =>
  //     Math.floor(Math.random() * workingArray.length)
  //   const filterWorkingArray = (contender) => {
  //     workingArray.filter((_, index) => index !== contender)
  //   }

  //   //For User
  //   //pick a random phrase from this workingArray
  //   const randomUserIndex = getRandomIndex()
  //   //and set it as the current phrase
  //   setCurrentPhrase(workingArray[randomUserIndex].insult)
  //   //remove this phrase from the working array so it cannot be chosen for opp
  //   filterWorkingArray(randomUserIndex)

  //   //For Opp
  //   //pick random phrase from this now filtered working array for opp
  //   const randomOppIndex = getRandomIndex()
  //   setOpponentPhrase(workingArray[randomOppIndex].insult)
  //   //and filter it out frm working array
  //   filterWorkingArray(randomOppIndex)

  //   //Game setup
  //   //set our current array to be our working array so when we call new phrase next time it won contain the phrases we just used
  //   setCurrentPhraseList(workingArray)
  //   //clear users text box, ready for new input
  //   setUserText("")
  // }
  
  // const newPhrasesv2 = () => {
  //   //copy phrase list into new working array
  //   let workingArray = [...currentPhraseList]

  //   //choose a random index from the working array
  //   const getRandomIndex = () => Math.floor(Math.random() * workingArray.length)
  //   const filterWorkingArray = (contender) => {
  //     workingArray.filter((_, index) => index !== contender)
  //   }

  //   //For User
  //   //pick a random phrase from this workingArray
  //   const randomUserIndex = getRandomIndex()
  //   //and set it as the current phrase
  //   setCurrentPhrase(workingArray[randomUserIndex].insult)
  //   //remove this phrase from the working array so it cannot be chosen for opp
  //   filterWorkingArray(randomUserIndex)

  //   //For Opp
  //   //pick random phrase from this now filtered working array for opp
  //   const randomOppIndex = getRandomIndex()
  //   setOpponentPhrase(workingArray[randomOppIndex].insult)
  //   //and filter it out frm working array
  //   filterWorkingArray(randomOppIndex)

  //   //Game setup
  //   //set our current array to be our working array so when we call new phrase next time it won contain the phrases we just used
  //   setCurrentPhraseList(workingArray)
  //   //clear users text box, ready for new input
  //   setUserText("")
  // }
  
//old opp code
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

  //attack code
  //  e.key === "Enter" && setUserText("")
          //If opponent is successful then user is stopped,there is animation and then we get new phrase
          //   if (e.key === "Enter") {
          //     if (percentageMatch > 80) {
          //       setOppAttacked(true)
          //       // setTimeout(() => {
          //       //   setOppAttack(false)
          //       // }, 500)

          //       setComboChain((prev) => [
          //         ...prev,
          //         <div className={`gold-coin gold-streak`} />,
          //       ])
          //     }
          //     setScore((prev) => prev + percentageMatch)
          //     setPercentageMatch(0)
          //     setUserText("")
          //     setComboChain([])
          //     newPhrases()
          //     //  TODO should call this it own function instead of so many steps
          //     //if user accuracy is low it should count as a failed attack and opponent should attack successfully
          //     //there should also be a brief pause bttween each question for the animation success  or fail
          //   }