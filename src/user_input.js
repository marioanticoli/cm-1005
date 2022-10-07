// --------------------------
// User interaction functions
// --------------------------

function keyPressed() {
  console.log(keyCode);
  if (keyCode == 37) {
    charStatus.isLeft = true;
  }
  if (keyCode == 39) {
    charStatus.isRight = true;
  }
  if (keyCode == 32 && gameChar_y == floorPos_y) {
    gameChar_y -= 100;
  }
  if (keyCode == 32 && lives < 1) {
    lives = 3;
    startGame();
  }
  if (keyCode == 32 && flagpole.isReached) {
    flagpole.isReached = false;
    lives = 3;
    startGame();
  }
  // + key
  if (keyCode == 187) {
    volume = min(volume + 0.1, 1);
    bg_loop.setVolume(volume);
  }
  // - key
  if (keyCode == 189) {
    volume = max(volume - 0.1, 0);
    bg_loop.setVolume(volume);
  }
  // p key
  if (keyCode == 80) {
    isPaused = !isPaused;
  }
}

function keyReleased() {
  if (keyCode == 37) {
    charStatus.isLeft = false;
  }
  if (keyCode == 39) {
    charStatus.isRight = false;
  }
}

function mousePressed() {
  if (char != 0) {
    // check volume control
    d = dist(width * 0.85, height * 0.05, mouseX, mouseY);
    if (d <= 20) {
      volume = volume ? 0 : 0.6;
      bg_loop.setVolume(volume);
    }
  } else if (mouseX >= 245 && mouseX <= 318 && mouseY >= 255 && mouseY <= 332) {
    // check selected first character
    char = 1;
  } else if (mouseX >= 744 && mouseX <= 778 && mouseY >= 260 && mouseY <= 331) {
    // check selected second character
    char = 2;
  }
}

function mouseMoved() {
  cursor(ARROW);
  // change cursor to hand when clicking events are active
  if (
    char != 0 &&
    mouseX >= width * 0.85 &&
    mouseX <= width * 0.85 + 25 &&
    mouseY >= height * 0.05 - 20 &&
    mouseY <= height * 0.05 + 20
  ) {
    cursor(HAND);
  } else if (
    char == 0 &&
    ((mouseX >= 245 && mouseX <= 318 && mouseY >= 255 && mouseY <= 332) ||
      (mouseX >= 744 && mouseX <= 778 && mouseY >= 260 && mouseY <= 331))
  ) {
    cursor(HAND);
  }
}
