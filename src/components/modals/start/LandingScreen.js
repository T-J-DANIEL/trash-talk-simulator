import React from "react"
import Attributions from "../Attributions"
import { useGlobalContext } from "../../../context"
const LandingScreen = () => {
  const { setIsFirstGame, showAttributions, setShowAttributions } =
    useGlobalContext()
  return (
    <>
      {showAttributions && <Attributions />}
      {!showAttributions && (
        <>
          <div className="title-container">
            <h1 className="modal-heading sw-title">Shakespearean Wit </h1>
            <h3 className="tagline">A typing game</h3>
          </div>

          <h3 className="tagline">Created by Tim Daniel</h3>
          <div className="modal-section">
            <div className="button-container">
              <button
                className="button attributions-button"
                onClick={(e) => {
                  setShowAttributions(true)
                }}
              >
                Show Sound Effects Attributions
              </button>
            </div>
          </div>

          <div className="modal-section">
            <p className="cache-info">
              This game saves your score to your browser cache, your score may
              be erased if you clear your history.
              {/* <hr className="menu-separator" /> */}
            </p>
            <div className="button-container">
              <button
                className="button start-button first"
                onClick={(e) => {
                  setIsFirstGame(false)
                  if (window.innerWidth <= 600) {
                    document.documentElement.requestFullscreen()
                  }
                }}
              >
                Play!
              </button>
            </div>
            <button
              className="button "
              onClick={(e) => {
                document.documentElement.requestFullscreen()
              }}
            >
              Full <br />
              Screen
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default LandingScreen
