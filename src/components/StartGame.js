import ReactDOM from "react-dom"
import { useGlobalContext } from "../context"
const StartGame = () => {
    const { setIsNewGame } = useGlobalContext()
    return (
      <div className="overlay-container">
        <div className="start-game-inner-container">
          <h1>Rules</h1>
          <p>
            curse thy opponent as quickly as thine be capable, build up thine
            combo to geteth extra points.
          </p>
          <button onClick={()=>{setIsNewGame(false)}}>start game</button>
        </div>
      </div>
    )
}

export default StartGame