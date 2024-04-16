import { useGlobalContext } from "../../context"
import Hitmarker from "../shared/Hitmarker"
import SpeechBubbleTail from "../shared/SpeechBubbleTail"
import PlaceHolderAvatar from "../shared/PlaceHolderAvatar"
import ThoughtBubbleTrail from "../shared/ThoughtBubbleTrail"
//component for the opponent text display

const OppAvatar = ({userAttackSuccess}) => {
  const {
    opponentPhrase,
    oppAttack,
    currentPhrase,
    // userAttackSuccess,
    setUserAttackSuccess,
    gameRunning,
    // oppAttackTimer,
    oppAttackSuccess,
    gameEnded,
    level,
    remaining,
    panicMode,
  } = useGlobalContext()
  return (
    <div className="opp-avatar-container">
      {userAttackSuccess && <Hitmarker />}
      <SpeechBubbleTail
        classInfo={`opp-speech-bubble-tail ${
          !oppAttackSuccess && "hide-on-opp-success"
        }`}
      />
      <PlaceHolderAvatar
        classInfo={`opp-avatar ${
          userAttackSuccess && "opponent-defeat-animation"
        }`}
      />
      {/* <ThoughtBubbleTrail
        classInfo={`thought-bubble-tail ${
          oppAttackSuccess && "hide-on-opp-success"
        }`}
      /> */}
    </div>
  )
}

export default OppAvatar
