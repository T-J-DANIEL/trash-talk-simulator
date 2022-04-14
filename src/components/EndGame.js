
import { useGlobalContext } from "../context"
// component that displays when the game ends
const EndGame = () => {
  const { startGame } = useGlobalContext()
  return (
    <div className="overlay-container">
      <div className="start-game-inner-container">
        <h1>Game Over!</h1>
        <p>Thou hast vanquished this poor quiveling fool.</p>
        <button onClick={startGame}>start game</button>
      </div>
    </div>
  )
}

export default EndGame
