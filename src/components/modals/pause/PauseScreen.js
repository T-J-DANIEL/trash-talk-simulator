import React from "react"
import { useGlobalContext } from "../../../context"

const PauseScreen = () => {
  const {
    button_pop,
    button_push,
    isSoundOn,
    setIsSoundOn,
    isMusicOn,
    setIsMusicOn,
    setConfirmEndGame,
    setIsCapsLockOn,
    closeSettings,
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
            onMouseDown={isSoundOn && button_pop}
            onMouseUp={isSoundOn && button_push}
          >
            Resume
          </button>
          <button
            className="button nav-button"
            onClick={() => {
              setConfirmEndGame(true)
            }}
            onMouseDown={isSoundOn && button_pop}
            onMouseUp={isSoundOn && button_push}
          >
            End Game
          </button>
        </div>
      </div>
      <div className="modal-section">
        <h2 className="modal-heading">Sound</h2>
        <div className="button-container">
          <label className="button-container label" htmlFor="soundOnOff">
            <span className="label-text">Effects </span>
            <input
              type="checkBox"
              id="soundOnOff"
              onMouseDown={!isSoundOn && button_pop}
              onMouseUp={!isSoundOn && button_push}
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
              onMouseDown={!isMusicOn && button_pop}
              onMouseUp={!isMusicOn && button_push}
              checked={isMusicOn}
              onChange={() => {
                setIsMusicOn(!isMusicOn)
              }}
            />
          </label>
        </div>
      </div>
    </>
  )
}

export default PauseScreen
