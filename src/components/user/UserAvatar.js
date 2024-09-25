import shakeimage from "../shared/emojishake.png"

import { useGlobalContext } from "../../context"

const PlaceHolderAvatar = ({ classInfo }) => {
  const { oppAttacked, streak, streakArray } = useGlobalContext()
  const userAvatarStyles = `user-avatar ${
    oppAttacked ? "userAttacked" : "idle"
  }`
  return (
    <div className="user-avatar">
      <img src={shakeimage} className={userAvatarStyles} alt="#" />
     
    </div>
  )
}
export default PlaceHolderAvatar
