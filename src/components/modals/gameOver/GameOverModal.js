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
        <h1 className="modal-heading">Game Over!</h1>
        <h2 className="modal-sub-heading end-game-text">{`${
          lives ? "The fool was vanquished!" : "You were bested by the fool!"
        }`}</h2>
      </div>
      <hr className="menu-separator" />
      <div className="button-container score-container">
        <h2 className="modal-sub-heading">
          Score:
          <br />
          <span className="new-high-score">{!newHigh && `${score}`}</span>
        </h2>
        <h2 className="modal-sub-heading">
          <span className="new-high-score">{newHigh && `New `}</span>High&nbsp;Score:
          <br />
          {highScore||0}
        </h2>

        <button
          className={`button share-button ${shared && "shared-success"}`}
          onClick={() => {
            setShared(true)
            navigator.clipboard.writeText(
              `Shakespearean Wit high score!: ${highScore} points
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
      </div>
      <hr className="menu-separator" />
      <div className="modal-section">
        <button
          className="button nav-button"
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
