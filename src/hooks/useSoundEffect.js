// TODO
// finalise sounds and volumes
// attributions
// merge voice or no?
//error when attacking after pause  if enemey has attcjked already then attack will be sussesfull and glithc out system
//exit fullscreen button

// import React from "react"
import useSound from "use-sound"
import user_success from "../assets/sounds/user_success.mp3"
// C:\Users\user\dev\trash-talk-simulator\public\assets\sounds\3s_countdown.mp3
import opp_attack_success from "../assets/sounds/opp_attack_success.mp3"
import streak_sound from "../assets/sounds/streak_sound.mp3"
//remove countdown below
import threeSec_countdown from "../assets/sounds/3s_countdown.mp3"
import button_pop_up from "../assets/sounds/button_pop_up.mp3"
import button_push_down from "../assets/sounds/button_push_down.mp3"
// import buttonUpSound_down from "../sounds/buttonUpSound_down.mp3"
// import user_type_sound from "../assets/sounds/user_type_sound_ver2.mp3"
import incorrect_sound from "../assets/sounds/incorrect_sound.mp3"
import end_game_sound from "../assets/sounds/end_game_sound.mp3"
import high_score_end_sound from "../assets/sounds/high_score_end_sound.mp3"

import music from "../assets/sounds/music.mp3"
import correct_sound from "../assets/sounds/correct_sound.mp3"

const useSoundEffect = () => {
  const [successSound] = useSound(user_success)
  const [failSound] = useSound(opp_attack_success, { volume: 0.4 })
  const [incorrectSound] = useSound(incorrect_sound, { volume: 0.4 })
  const [streakSound] = useSound(streak_sound, { volume: 0.3 })
  const [countDownSound] = useSound(threeSec_countdown)

  const [buttonDownSound] = useSound(button_pop_up, { volume: 0.2 })
  const [buttonUpSound] = useSound(button_push_down, { volume: 0.2 })

  const [endSound] = useSound(end_game_sound, { volume: 0.3 })
  const [highScoreEndSound] = useSound(high_score_end_sound)
  // const [playOppWritingSound, exposedData] = useSound(opp_writing_sound, {
  //   volume: 0,
  // })
  //use exposedData.pause and exposedData.stop
  const [playMusicSound, musicFunctions] = useSound(music)
  const [correctSound] = useSound(correct_sound, {volume: 0.3,})
  //use musicFunctions.pause and musicFunctions.stop
  // const [playTypingSound] = useSound(user_type_sound, {
  //   interrupt: true,
  //   volume: 0.2,
  // })

  // Exporting variables from the function
  return {
    successSound,
    failSound,
    incorrectSound,
    streakSound,
    countDownSound,
    buttonDownSound,
    buttonUpSound,
    endSound,
    highScoreEndSound,
    playMusicSound,
    correctSound,
    // playTypingSound,
    musicFunctions,
  }
}

export default useSoundEffect
