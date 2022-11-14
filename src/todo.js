//TODO TASKS and features to add no styling:

//add percentage completion to user
//dinalise header
// Idle animations 3d animations 
// ::After lastin array quill cursor
// Jackpot sound if you get high score at end 
//disable pause screen when in start game mode
//display "sound off" on mainpage?
// need to make loss animation more in oyour face with opp message
//COOL picture frame above message? with plack on mobile picture is to the left or on both, attack animations on the picture
//button clicking sounds and timer ending  sounds
//writing noises?
//animations on score number when you score put ib heading bar light up animation on streak
//animation to show if high score has been bested on end screen (newHigh score state already exists) use state value 
//show average accuracy  (avgAcc state already exists)
//when combo reaches higher then 5 just change color and number
//display pic and name selector seperate componnet for user avatar
//add countdown when starting ? conditional rendering
//local memopry remmebers name hioghscore pic and difficluty
//full ui checkcup finalise cohesive style and colors
//finalise timing and scoring
//maybe no text box?
//confirm close use conditional rendering

//TODO REFACTORING:
//button click noise function (reusability)
//move util functions in context to utils file
//refactor including creating functions instead of so many setSTates and add reducer
//change usefects for usememo where required
//get online
//use an insult generator fo modern day mode?
//refactor in useReducer
//later add css in js method or similar


//TODO KNOWN BUGS
//issue with incorrect sound keeps sounding when last letter is correct
//solve timer issue ! Clear timer and set timer running at the time we left off when paused the timer is the issue
//when newgame is started sometimes the opp attaacks too soon (maybe a timer from previous game is still is going ) maybe after pausing? NEWGAME should stop and reset all timers
//red indiacator only works on easy mode
//game continues after end screen
//if game is left at end screen it continues by itself (maybe timeouts are being cleared and must be put in local memory)
// If  game is left at pause screen for extended time the timers no longer work (mayb ebecause browser is clearing timeouts fro performance)
//when resuming after extended time it just goes to end game screen
// >>>> SOLUTION?: maybe place timer variables lin local memory
//escape button useffect causes flout also messes up everything when pressed at start screen needs to be disabled
//IMPORTANT the timer npm module is at fault here!

//TODO WHAT TO DO NOW?
//work on scoring attack and combo streaks functions and animations
//tighten up all animations
//finalize layout
//finalize all layouts and css including mobile
//publish this project on github

//todo history
