import ReactDOM from "react-dom"

const ModalContainer = ({ children }) => {

  return ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="modal-container ">{children}</div>
    </div>,
    document.body
  )
}

export default ModalContainer
