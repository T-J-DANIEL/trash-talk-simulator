//TODO TASKS and features to add no styling:

//bad good perfect under input WITH NEGATIVE ANIMATION FOR STREAK
//mobile keyboard, focus on input open device keyboard when not needed

//finalize bubble position (maybe use clamp) text-wrap balanced
//add exclamation point feather
//scoring instant points and also order of feedback (message blanks before end of phase) and streak
//keyboard optional button
//if onscreeen keyboard is deployred and you pause when you unpause your physical kjeyboard will not focus
//when you swithc from onscreen keyboard to user keyboad you lose focuis
//test
    // what happens when you pause just before running out of time?
    //end game during countdown seems to mess it up
    //modal background not full screen oin mobile
    //text is selcetable draggable in menus
     // IDEA maybe opp pause while userattacks as well?
    //SIZE DOWN CLOUDS BASED ION KEYBOARD IS OPEN
    //pausing copountdown and stratin gnew game crashes countdown
    //IDEA STREAK MEDAL IS MDELA AROUND SW NECK charchetr glow when on streak
//svg's
//animations
//google cloud voices api
//final touches (sounds and styles) and attributions
//keyborad not fully disabled DURNG COUNTDOWEN??




//timer
//time running out fn
//bug fixes 
//game does not reset properly after losing three lives maybe even never at all??
//Need to use setShowHowTo and finish off start meu need to use sub componeents
    //sub components for menu conditional rendering (cleaner)
// on load check if page size is less than and set keyboard auto
//finalise text input and feather
//ADD BACKGORUND
//diff font for fool
//finalise header
//losing focus when clicking around
//game messes up wehn starting new game sort it out
//CORRECT LETTER NOISE
//add percentage completion to user (color of text box)
//thought cloud differnt sepereate trail cloud then becomes speech bubble
//full screen on mobile api
//can replace all conts wih one const for declarations
//finalise poortraits and pagelayout
        //PICTURE FRAME ANIMATIONS?
        //COOL picture frame above message? with plack on mobile picture is to the left or on both, attack animations on the picture
//portraits  of each at start/ends screen 
//display "sound off" on mainpage?
//fix timer
//make text not selectable
//startgame page
//timer ending urgent sound
//animations on score number when you score put ib heading bar light up animation on streak
//combo animation
//add countdown when starting ? conditional rendering
//Use speech bubbles instead attributions flaticon
//Frosted effect modals
//confirm close use conditional rendering
// need to make win/loss animation more in oyour face with opp message
//TEXT TO AUDIO ON WIN OR LOSS
//ANIMATIONS FOR BOTH
//remmeber blinking
    //Idle is thinking anim?
    //ATTACKED
    //WIN
    //Title anim is happy/ angry
    //opp message start speechbubble animation? 
//color outline is progress for full game timeer and opp textbox

//local memopry remmebers name hioghscore pic and difficluty
//full ui checkcup finalise cohesive style and colors
//finalise timing and scoring
//Light mode?

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
//solve timer issue ! Clear timer and set timer running at the time we left off when paused the timer is the issue
//when newgame is started sometimes the opp attaacks too soon (maybe a timer from previous game is still is going ) maybe after pausing? NEWGAME should stop and reset all timers
//red indiacator only works on easy mode and hard?
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
