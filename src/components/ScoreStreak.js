import { useGlobalContext } from "../context"
//component that shows user score and gold coin streak
const ScoreStreak = () => {
  const { score, streak ,streakArray} = useGlobalContext()
  return (
    //score
    //streak
    //wpm
    //average accuracy
    <div className="score-streak-container">
      <div className="outline">Score: {score}</div>
      <div className="flex">
        <div>Streak:</div>
        <div className="streak-container">
         {streakArray}
          {/* {streak?<div className="gold-coin gold-streak">{streak}X</div>:""} */}
        </div>
      </div>
    </div>
  )
}

export default ScoreStreak
