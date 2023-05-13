import React from "react"
import { useGlobalContext } from "../../../context"
const LandingScreen = () => {
  const { setIsFirstGame } = useGlobalContext()
  return (
    <>
      <div className="title-container">
        <h1 className="modal-heading title">Shakespearean Wit </h1>
        <h3 className="tagline">A typing game</h3>
      </div>
      <br />
      <h2 className="tagline">Created by Tim Daniel</h2>
      <br />
      <h2>Attributions </h2>
      By continuing you agree to give access to Local memory .....
      <div className="button-container">
        <button
          className="button start-button first"
          onClick={(e) => {
            setIsFirstGame(false)
          }}
        >
          Play!
        </button>
      </div>
    </>
  )
}

export default LandingScreen
