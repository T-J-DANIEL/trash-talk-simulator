import React from 'react'
import EasySpeech from "easy-speech"
EasySpeech.init({ maxTimeout: 5000, interval: 250 })
  .then(() => console.debug("load complete"))
  .catch((e) => console.error(e))
    const speakFunction = (value, pitchDiff = 0, rateDiff = 0) => {
      EasySpeech.speak({
        text: value,
        // voice: myLangVoice, // optional, will use a default or fallback
        pitch: 2 - pitchDiff,
        rate: 1.7 - rateDiff,
        volume: 1,
        // there are more events, see the API for supported events
        boundary: (e) => console.debug("boundary reached"),
      })
    }

    const oppSpeak = () => {
     speakFunction(opponentPhrase)
    }
    const userSpeak = () => {
     speakFunction(userText.replaceAll("_", " "), 1, 0.5)
   
    }
    const pauseSpeak = () =>{
        EasySpeech.pause()
    }
    const resumeSpeak = () =>{
        EasySpeech.resume()
    }

const useSpeech = () => {
  return (
    <div>useSpeech</div>
  )
}

export default useSpeech