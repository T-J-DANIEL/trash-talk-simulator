import { useGlobalContext } from "../../../context"
import ModalContainer from "../ModalContainer"
import ConfirmEndScreen from "./ConfirmEndScreen"
import PauseScreen from "./PauseScreen"
//settings component accessed by clicking hamburger button
const PauseGameModal = () => {
  //all these timer methods and timer state values  are imported from context
  const { confirmEndGame } = useGlobalContext()
  return (
    <ModalContainer>
      {confirmEndGame && <ConfirmEndScreen />}
      {!confirmEndGame && <PauseScreen />}
    </ModalContainer>
  )
}

export default PauseGameModal
