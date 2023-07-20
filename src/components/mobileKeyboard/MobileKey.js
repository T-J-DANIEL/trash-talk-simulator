import { useGlobalContext } from "../../context"

const MobileKey = ({keyValue,extraClass}) => {
  const {
    setUserText,
    compareValues,
    focusInput,
    isMobileShift,
    setIsMobileShift,
    isInputDisabled
  } = useGlobalContext()
  const key = isMobileShift ? keyValue.toUpperCase() : keyValue
  return (
    <button
      disabled={isInputDisabled}
      className={`mobile-key ${keyValue === " " && "spaceBar"} ${extraClass}` }
      onTouchStart ={() => {
        focusInput.current.value = focusInput.current.value + key
        setUserText(
          focusInput.current.value.replace(" ", "_").replace("-", "‑")
        )
        compareValues(
          focusInput.current.value.replace(" ", "_").replace("-", "‑")
        )
        setIsMobileShift(false)
      }}
    >
      {key}
    </button>
  )
}

export default MobileKey
