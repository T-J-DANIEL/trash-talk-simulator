import { useGlobalContext } from "../context"

const Opponent = () =>{
    const { opponentPhrase, successfulAttack } = useGlobalContext()
    return (
      <div className={`opponent ${successfulAttack?"animate":""} `}>
        {successfulAttack&&<div className="hitMarker">
          <div className="clock-hand clock">
              <div></div>
              <div></div>
          </div>
          <div className="clock-hand anti">
              <div></div>
              <div></div>
          </div>
        </div>}
        <div className="opAvatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGO3j7Oj2XxYmd06-QxZVDiUDLIXz40m1bwg&usqp=CAU"
            alt=""
          />
        </div>
        <div>userName</div>
        <div className="opponentText">
          <p>{opponentPhrase}</p>
        </div>
      </div>
    )
}

export default Opponent