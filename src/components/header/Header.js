// import { GameTimer } from "../GameTimer"
import TestGameTimer from "./TestGameTimer"
import StreakCoin from "../user/StreakCoin"
import { useGlobalContext } from "../../context"
const Header = () => {
  const {
    score,
    displaySettings,
    isSoundOn,
    buttonDownSound,
    buttonUpSound,
    lives,
    setIsCapsLockOn,
    oppAttackSuccess,
    gameRunning,
    streak,
streakArray
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
            onMouseDown={isSoundOn ? buttonDownSound : undefined}
            onMouseUp={isSoundOn ? buttonUpSound : undefined}
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
              {streak > 1 && (
                <StreakCoin
                  streak={streak}
                  streakArray={streakArray}
                  gameRunning={gameRunning}
                />
              )}
           
              {/* {<StreakCoin streak={streak} streakArray={streakArray} />} */}
              <p className="score-title-text">
                Score:<span className="score">{score}</span>
              </p>
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
                >
                  <svg class={`heart ${!gameRunning && `paused`} `}viewBox="0 0 32 29.6">
                    <path
                      d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                    />
                  </svg>
                </div>
              ))}
              {Array.from({ length: [3 - lives] }).map((_) => (
                <div className="lives-left lives-lost">
                  <svg class="heart" viewBox="0 0 32 29.6">
                    <path
                      d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                    />
                  </svg>
                </div>
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
