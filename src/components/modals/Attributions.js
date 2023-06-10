import { useGlobalContext } from "../../context"
// component that displays when the game ends

const Attributions = () => {
  const { setShowAttributions } = useGlobalContext()
  return (
    <>
      <div className="modal-section">
        <h2 className="modal-sub-heading">Attributions</h2>
        <ul className="attributions-list">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum iusto necessitatibus sequi atque vero. </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum iusto necessitatibus sequi atque vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum iusto necessitatibus sequi atque vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum iusto necessitatibus sequi atque vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum iusto necessitatibus sequi atque vero.</li>
        </ul>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setShowAttributions(false)
          }}
          className="button nav-button"
        >
          Back
        </button>
      </div>
    </>
  )
}

export default Attributions
