//TODO TASKS and features to add no styling:
//COOL picture frame above message? with plack on mobile picture is to the left or on both, attack animations on the picture
//button clicking sounds and timer ending  sounds
//animations on score number when you score put ib heading bar light up animation on streak
//animation to show if high score has been bested on end screen (newHigh score state already exists) use state value 
//show average accuracy  (avgAcc state already exists)
//when combo reaches higher then 5 just change color and number
//display pic and name selector seperate componnet for user avatar
//add countdown when starting ? conditional rendering
//ad sounds using usesounds npm hook
//local memopry remmebers name hioghscore pic and difficluty
//full ui checkcup finalise cohesive style and colors
//finalise timing and scoring

//TODO REFACTORING:
//confirm close use conditional rendering
//move util functions in context to utils file
//refactor including creating functions instead of so many setSTates and add reducer
//change usefects for usememo where required
//finish end game screen with score share function
//get online
//use an insult generator fo modern day mode?

//TODO KNOWN BUGS
//game continues after end screen
//if game is left at end screen it continues by itself (maybe timeouts are being cleared and must be putin local memory)
// If  game is left at pause screen for extended time the timers no longer work (mayb ebecause browser is clearing timeouts fro performance)
//when resuming after extended time it just goes to end game screen
// >>>> SOLUTION?: maybe place timer variables lin local memory
//escape button useffect causes flout also messes up everything when pressed at start screen needs to be disabled

//TODO WHAT TO DO NOW?
//work on scoring attack and combo streaks functions and animations
//tighten up all animations
//finalize layout
//finalize all layouts and css including mobile
//add sound effects
//publish this project on github
//refactor in useReducer
//could we use a useMemo some where?
//later add css in js method or similar

//todo history
