/*  
---------------
Music extension
---------------

Implementing sound was quite easy. The only things I had to pay attention were mostly to do with some features of the
browser. I had to preload the sounds to avoid accessing them before they were ready (having flying objects sometimes
they hit the character as soon as the game starts). Another problem was that Chrome refused to play sounds unless there
was first a user interaction. I achieved this by implementing a “start” screen and a check if the corresponding key has
been pressed. Being the first of the two extensions I created, I had to listen to this slightly background loop music
for a certain time; this led me to the decision of implementing volume controls for it and forced me to put a bar with
commands on the bottom of the screen.
*/

var on_die;
var get_coin;
var bg_loop;
var finished;
var isPlaying;
var volume;

function backgroundMusic(start) {
  if (!start) {
    bg_loop.stop();
  } else if (start && !bg_loop.isLooping()) {
    bg_loop.loop();
  }
}
