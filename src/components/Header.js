import React, { useState } from "react"
import {GameTimer} from "./GameTimer"
import { useGlobalContext } from "../context"
const Header = () => {
 const {timerExists} = useGlobalContext()
  return (
    <div className="header">
      {timerExists?<GameTimer/>:<h1>Trash Talk Trainer</h1>}
    </div>
  )
}

export default Header
