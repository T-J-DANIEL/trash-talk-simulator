import React from "react"

const mobileCheck = () => {
let isMobileDevice = window.matchMedia(
  "only screen and (min-width: 800px)"
).matches
if (isMobileDevice) {
  // The viewport is less than 768 pixels wide
  //Conditional script here
  //mobileKeyboard true
  // alert("This is not a mobile device.")
} else {
  //The viewport is greater than 700 pixels wide
  //mobile keyboard false
}
  
}

export default mobileCheck
