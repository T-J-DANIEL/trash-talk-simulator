import React from "react"
import { useGlobalContext } from "../../../context"

const ConfirmEndScreen = () => {
  const { endGame, setShowPauseScreen, setConfirmEndGame } = useGlobalContext()
  return (
    <>
      <div className="modal-section">
        <h1 className="modal-heading">End Game?</h1>
        <div className="button-container">
          <button
            className="button nav-button"
            onClick={() => {
              setConfirmEndGame(false)
              endGame()
              setShowPauseScreen(false)
            }}
          >
            Yes
          </button>
          <button
            className="button nav-button"
            onClick={() => {
              setConfirmEndGame(false)
            }}
          >
            No
          </button>
        </div>
      </div>
    </>
  )
}

export default ConfirmEndScreen
