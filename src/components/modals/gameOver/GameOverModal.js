import { useGlobalContext } from "../../../context"
// component that displays when the game ends
import ModalContainer from "../ModalContainer"
const GameOverModal = () => {
  const {
    startGame,
    highScore,
    avgAcc,
    newHigh,
    shared,
    setShared,
    lives,
    score,
    setIsNewGame,
    setGameEnded,
  } = useGlobalContext()
  return (
    <ModalContainer>
      <div className="modal-section">
        <h1 className="modal-header">
          <span>G</span>ame <span>O</span>ver!
        </h1>
      </div>
      <div className="modal-section end-game-text">
        <h3>{`${
          lives ? "The fool was vanquished!" : "You were bested by the fool!"
        }`}</h3>
        <p>
          {/* TODO special styling for new high score here and in header */}
          Score:{" "}
          <span className="new-high-score">{!newHigh && `${score}`}</span>
          <br />
          <span className="new-high-score">{newHigh && `New `}</span>High Score:
          {highScore}
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

        <button
          className="button"
          onClick={
            () => {
              setIsNewGame(true)
              setGameEnded(false)
            }
            // startGame
          }
        >
          Start New Game
        </button>
      </div>
    </ModalContainer>
  )
}

export default GameOverModal
