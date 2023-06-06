import React from "react"
import { useGlobalContext } from "../../../context"
const LandingScreen = () => {
  const { setIsFirstGame } = useGlobalContext()
  return (
    <>
      <div className="title-container">
        <h1 className="modal-heading title">Shakespearean Wit </h1>
        <h3 className="tagline">A typing game</h3>
      </div>
      {/* <hr className="menu-separator" /> */}
      <h3>Created by Tim Daniel</h3>

      <div className="modal-section">
        <div className="button-container">
          <button
            className="button attributions-button"
            onClick={(e) => {
              setIsFirstGame(false)
            }}
          >
            Show Sound Effects Attributions
          </button>
        </div>
      </div>
      
      <div className="modal-section">
          <p className="cache-info">
            This game saves your scores to your browser cache, as such your scores
            may be erased if you clear your history.
          {/* <hr className="menu-separator" /> */}
          </p>
        <div className="button-container">
          <button
            className="button start-button first"
            onClick={(e) => {
              setIsFirstGame(false)
            }}
          >
            Play!
          </button>
        </div>
      {/* <hr className="menu-separator" /> */}
      </div>
    </>
  )
}

export default LandingScreen
