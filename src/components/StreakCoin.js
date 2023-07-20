import React from "react"

const StreakCoin = ({ streak,streakArray}) => {
  return (
    <div className={`coin ${streakArray&&"gold-streak"}`}>
      <div className="svg-inner">
        <svg
          className="test-example"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -30 500 500"
        >
          <path
            className="coin-path"
            id="text-svg"
            d="M73.2 148.6c4-6.1 65.5-96.8 178.6-95.6 111.3 1.2 170.8 90.3 175.1 97"
          ></path>
          <text className="coin-text" x="60">
            <textPath href="#text-svg">Streak</textPath>
          </text>
        </svg>
      </div>
      <p className="streak-number">{streak}x</p>
    </div>
  )
}

export default StreakCoin


// .coin path {
//   fill: transparent;
// }

// .coin text {
//   fill: #FF9800;
//   font-size:7.85rem;
//   font-weight:bold;
// }
// .coin{
//   width: 12em;
//   height: 12em;
//   border-radius:50%;
//   margin:2em;
//   padding: 2em;
//   display: grid;
//   place-items:center;
//   background: wheat;
//   position: relative;
//   outline: 5px dotted orange;
//   outline-offset:-.5em;
// }
// .streak-number{
//   position: absolute;
//   font-size:7em;
//   color: #FF9800;
//   top: 35%;
// }