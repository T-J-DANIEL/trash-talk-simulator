import React, { useState } from "react"
// TODO maybe use https://stackoverflow.com/questions/59942101/call-useeffect-only-when-state-increases
const StreakCoin = ({ streak, streakArray, gameRunning }) => {
  return (
    <div
      className={`coin-shape  ${streakArray && "gold-streak"} ${
        !gameRunning && "paused"
      }`}
    >
      <div className="coin-streak-number">{streak}x</div>
      <div className="coin-streak-title">STREAK </div>
    </div>
  )
}

export default StreakCoin
