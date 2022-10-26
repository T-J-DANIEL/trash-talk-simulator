import { useGlobalContext } from "../context"
// component that displays when the game ends

const EndGame = () => {
  const {
    startGame,
    highScore,
    avgAcc,
    newHigh,
    shared,
    setShared,
    
  } = useGlobalContext()
  return (
    <div className="overlay-container">
      <div className="start-game-inner-container">
        <h1>Game Over!</h1>
        <p>Thou hast vanquished this poor quiveling fool.</p>
        <p>
          {/* TODO special styling for new high score here and in header */}
          <span className="new-high-score">{newHigh && `New `}</span>High Score:{highScore}
        </p>
        <p>Average accuracy:{avgAcc}</p>
        <p>
          Share score:
          <button
            className={`btn ${shared && "shared-success"}`}
            onClick={() => {
              setShared(true)
              navigator.clipboard.writeText(
                `Shakespearean roast battle high score: ${highScore}`
              )
              //timeout to reset share button visual
              setTimeout(() => {
                setShared(false)
              }, 5000)
            }}
          >
            {shared ? "Copied" : "Share"}
          </button>
        </p>
        <button onClick={startGame}>Start New Game</button>
      </div>
    </div>
  )
}

export default EndGame
