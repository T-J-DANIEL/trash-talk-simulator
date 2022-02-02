import { useGlobalContext } from "../context"

const Opponent = () =>{
    const { opponentPhrase, successfulAttack } = useGlobalContext()
    return (
      <div
        className={`opponent ${successfulAttack ? "animate" : ""} ${
          successfulAttack ? "enlarge" : ""
        }`}
      >
        {successfulAttack && (
          <div className="hitMarker">
            <div className="clock-hand clock">
              <div></div>
              <div></div>
            </div>
            <div className="clock-hand anti">
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <div className="opp-user-container">
          <div className="op-avatar">
            <img
              src="https://i.pinimg.com/236x/a0/21/9d/a0219dd7fe12d9142e576ed3cfad1b10--dutch-republic-famous-men.jpg"
              alt=""
            />
          </div>
          <div>userName: </div>
        </div>
        <div className="opponent-text">{opponentPhrase}</div>
      </div>
    )
}

export default Opponent