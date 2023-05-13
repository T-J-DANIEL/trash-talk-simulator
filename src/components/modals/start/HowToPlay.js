
import { useGlobalContext } from "../../../context"
const HowToPlay = () => {
  const {
    setShowHowTo,
  } = useGlobalContext()
  return (
    <div className="modal-section">
      <h2 className="modal-sub-heading ">How to play?</h2>
      <ul className="ruleset">
        <li>Deliver your retort faster than the fool!</li>
        <hr />
        <li>
          <strong>Press enter</strong> at 85% accuracy to get partial points.
        </li>
        <hr />
        <li>Get 100% accuracy to get full points.</li>
        <hr />
        <li>Build up a streak of 100% scores for extra points.</li>
        <hr />
        <li className="mobile-hidden">
          Press escape to pause/unpause the game.
        </li>
      </ul>
      <div className="button-container">
        <button
          onClick={() => {
            setShowHowTo(false)
          }}
          className="button nav-button"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default HowToPlay
