import React from 'react'
import { useGlobalContext } from "../../../context"

const CountDownScreen = () => {
    const { countDown, gameState } = useGlobalContext()
  return (
    <div className="modal-section count-down-container">
      <h1 className={`count-down ${gameState === "pause" && "paused"}`}>
        {countDown}
      </h1>
    </div>
  )
}

export default CountDownScreen