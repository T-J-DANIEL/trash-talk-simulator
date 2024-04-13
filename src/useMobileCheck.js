import React from "react"
import { useGlobalContext } from "./context"
const useMobileCheck = () => {
  const { setShowMobileKeyboard } = useGlobalContext()
  let isMobileDevice = window.matchMedia(
    "only screen and (max-width: 800px)"
  ).matches
  if (isMobileDevice) {
    // The viewport is less than 768 pixels wide
    //Conditional script here
    //mobileKeyboard true
    // alert("This is not a mobile device.")
    // setShowMobileKeyboard(true)
  } else {
    //The viewport is greater than 700 pixels wide
    //mobile keyboard false
    // setShowMobileKeyboard(false)
    // setShowMobileKeyboard(false)
  }
}

export default useMobileCheck
