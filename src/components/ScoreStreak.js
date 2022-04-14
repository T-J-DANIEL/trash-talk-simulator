import { useGlobalContext } from "../context"
//component that shows user score and gold coin streak
const ScoreStreak = () => {
  const { score, streakArray ,comboChain} = useGlobalContext()
  return (
    //score
    //streak
    //wpm
    //average accuracy
    <div className="score-streak-container">
      <div className="outline">Score: {score}</div>
      <div className="flex">
        <div>Streak:</div>
        <div className="streak-container">{comboChain}</div>
      </div>
    </div>
  )
}

export default ScoreStreak
