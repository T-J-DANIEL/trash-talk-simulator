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
      <div className="modal-container">
          <div className="modal-section">
            <h1 className="modal-header"><span>G</span>ame <span>O</span>ver!</h1>
          </div>
        <div className="modal-section end-game-text">
          <h3>Thou hast vanquished this poor quiveling fool.</h3>
          <p>
            {/* TODO special styling for new high score here and in header */}
            <span className="new-high-score">{newHigh && `New `}</span>High Score:{highScore}
          </p>
          
            
            <button
              className={`button btn ${shared && "shared-success"}`}
              onClick={() => {
                setShared(true)
                navigator.clipboard.writeText(
                  `Shakespearean wit high score!: ${highScore} points
                  Play at: ${document.location.href}
                  `
                )
                //timeout to reset share button visual
                setTimeout(() => {
                  setShared(false)
                }, 5000)
              }}
            >
              {shared ? "Copied" : "Share"}
            </button>
        
        <button className="button" onClick={startGame}>Start New Game</button>
        </div>
      </div>
    </div>
  )
}

export default EndGame
