import { useGlobalContext } from "../../../context"
import ModalContainer from "../ModalContainer"
import LandingScreen from "./LandingScreen"
import MainStartScreen from "./MainStartScreen"

const StartGameModal = () => {
  const { isFirstGame } = useGlobalContext()
  return (
    <ModalContainer>
      {isFirstGame && <LandingScreen />}
      {!isFirstGame && <MainStartScreen />}
    </ModalContainer>
  )
}

export default StartGameModal
