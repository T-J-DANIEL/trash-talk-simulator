import React, { useState } from "react"
import {GameTimer} from "./GameTimer"
const Header = () => {
 
  return (
    <div className="header">
      <h1>Trash Talk Trainer</h1>
        <GameTimer/>
    </div>
  )
}

export default Header
