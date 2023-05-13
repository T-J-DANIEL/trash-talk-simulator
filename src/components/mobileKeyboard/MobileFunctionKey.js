import { useGlobalContext } from "../../context"

const MobileFunctionKey = ({ keyValue}) => {
  const {
    setUserText,
    compareValues,
    focusInput,
    isMobileShift,
    setIsMobileShift,
    scoreHandler,
  } = useGlobalContext()

  return (
    <button
      className={`mobile-function-key mobile-function-${keyValue}`}
      onClick={() => {
        if (keyValue === "shift") setIsMobileShift(!isMobileShift)
        if (keyValue === "backSpace") {
          focusInput.current.value = focusInput.current.value.slice(0, -1)
          setUserText(
            focusInput.current.value.replace(" ", "_").replace("-", "‑")
          )
          compareValues(
            focusInput.current.value.replace(" ", "_").replace("-", "‑")
          )
          setIsMobileShift(false)
        }
        if (keyValue === "enter") {
          scoreHandler()
          setIsMobileShift(false)
        }
      }}
    >
      {/* svg background in css */}
    </button>
  )
}

export default MobileFunctionKey
