import { GameTimer } from "../GameTimer"
import TestGameTimer from "./TestGameTimer"
import { useGlobalContext } from "../../context"
const Header = () => {
  const {
    score,
    displaySettings,
    isSoundOn,
    button_pop,
    button_push,
    lives,
    setIsCapsLockOn,
    oppAttackSuccess,
    gameRunning,
  } = useGlobalContext()
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-upper-section">
          <button
            onClick={(e) => {
              e.getModifierState("CapsLock")
                ? setIsCapsLockOn(true)
                : setIsCapsLockOn(false)
              displaySettings()
            }}
            onMouseDown={isSoundOn ? button_pop : undefined}
            onMouseUp={isSoundOn ? button_push : undefined}
          >
            <div className="settings-button">
              <div className="settings-button-bar"></div>
              <div className="settings-button-bar"></div>
              <div className="settings-button-bar"></div>
            </div>
            {/* TODO :settings button if game paused or SW logo */}
          </button>

          <div className="header-component">
            <div className="header-headings score-title">
              Score:<span className="score">{score}</span>
            </div>
          </div>
          <div className="header-component">
            <h1 className="header-headings timer-title">Time</h1>
            <TestGameTimer />
          </div>
        </div>
        <div className="header-lower-section">
          <hr />
          <div className="header-component lives-container">
            <div className="button-container">
              {Array.from({ length: [lives] }).map((_) => (
                <div
                  className={`lives-left ${oppAttackSuccess && "flash"} ${
                    !gameRunning && `paused`
                  }`}
                ></div>
              ))}
              {Array.from({ length: [3 - lives] }).map((_) => (
                <div className="lives-left lives-lost"></div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Header
