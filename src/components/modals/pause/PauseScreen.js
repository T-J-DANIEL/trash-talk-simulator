import React from "react"
import { useGlobalContext } from "../../../context"

const PauseScreen = () => {
  const {
    buttonDownSound,
    buttonUpSound,
    isSoundOn,
    setIsSoundOn,
    isMusicOn,
    setIsMusicOn,
    setConfirmEndGame,
    setIsCapsLockOn,
    closeSettings,
    gameState,
  } = useGlobalContext()
  return (
    <>
      <div className="modal-section">
        <h1 className="modal-heading">Paused</h1>
        <div className="button-container">
          <button
            className="button nav-button"
            onClick={(e) => {
              e.getModifierState("CapsLock")
                ? setIsCapsLockOn(true)
                : setIsCapsLockOn(false)
              closeSettings()
            }}
            onMouseDown={isSoundOn && buttonDownSound}
            onMouseUp={isSoundOn && buttonUpSound}
          >
            Resume
          </button>
          <button
            className="button nav-button"
            onClick={() => {
              setConfirmEndGame(true)
            }}
            onMouseDown={isSoundOn && buttonDownSound}
            onMouseUp={isSoundOn && buttonUpSound}
          >
            End Game
          </button>
        </div>
      </div>
      <div className="modal-section">
        <hr className="menu-separator" />
        <h2 className="modal-sub-heading">Sounds</h2>
        <div className="button-container sound-settings">
          <label className="button-container label" htmlFor="soundOnOff">
            <span className="label-text">Effects </span>
            <input
              type="checkBox"
              id="soundOnOff"
              onMouseDown={buttonDownSound}
              // onMouseDown={()=>{!isSoundOn && buttonDownSound()}}
              // onMouseDown={!isSoundOn && buttonDownSound}
              onMouseUp={buttonUpSound}
              // onMouseUp={!isSoundOn && buttonUpSound}
              checked={isSoundOn}
              onChange={() => {
                setIsSoundOn(!isSoundOn)
              }}
            />
          </label>
          <label className="button-container label" htmlFor="musicOnOff">
            <span className="label-text">Music</span>
            <input
              type="checkBox"
              id="musicOnOff"
              onMouseDown={!isMusicOn && buttonDownSound}
              onMouseUp={!isMusicOn && buttonUpSound}
              checked={isMusicOn}
              onChange={() => {
                setIsMusicOn(!isMusicOn)
              }}
            />
          </label>
        </div>
        <hr className="menu-separator" />
      </div>
    </>
  )
}

export default PauseScreen
