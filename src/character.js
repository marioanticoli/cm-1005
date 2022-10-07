/*  
------------------------------
Game character render function
------------------------------

Although this wasn't required, I decided to try and improve my previously poorly designed game character.
I substituted it with a robot vaguely inspired by Wall-E, but I thought it would be a waste to just delete
the old code, so, since I already had a screen before starting playing, I decided to add another in which
to present the user with the possibility to choose his preferred character.
*/

// Function to draw the game character.
function drawGameChar(character) {
  push();
  if (character == 1) {
    if (charStatus.isLeft && charStatus.isFalling) {
      // Left
      // body
      fill(204, 147, 34);
      rect(gameChar_x, gameChar_y - 45, 40, 40);
      // continuous track
      fill(120);
      ellipse(gameChar_x, gameChar_y - 15, 30, 30);
      ellipse(gameChar_x + 40, gameChar_y - 15, 30, 30);
      fill(0);
      ellipse(gameChar_x, gameChar_y - 15, 5, 5);
      ellipse(gameChar_x + 40, gameChar_y - 15, 5, 5);
      // arms
      fill(120);
      rect(gameChar_x + 10, gameChar_y - 45, 10, 5);
      // neck
      rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
      // face
      rect(gameChar_x + 2, gameChar_y - 75, 26, 15);
    } else if (charStatus.isRight && charStatus.isFalling) {
      // Right
      // body
      fill(204, 147, 34);
      rect(gameChar_x, gameChar_y - 45, 40, 40);
      // continuous track
      fill(120);
      ellipse(gameChar_x, gameChar_y - 15, 30, 30);
      ellipse(gameChar_x + 40, gameChar_y - 15, 30, 30);
      fill(0);
      ellipse(gameChar_x, gameChar_y - 15, 5, 5);
      ellipse(gameChar_x + 40, gameChar_y - 15, 5, 5);
      // arms
      fill(120);
      rect(gameChar_x + 20, gameChar_y - 45, 10, 5);
      // neck
      rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
      // face
      rect(gameChar_x + 12, gameChar_y - 75, 26, 15);
    } else if (charStatus.isLeft) {
      // Left
      // body
      fill(204, 147, 34);
      rect(gameChar_x, gameChar_y - 45, 40, 40);
      // continuous track
      fill(120);
      ellipse(gameChar_x, gameChar_y - 15, 30, 30);
      ellipse(gameChar_x + 40, gameChar_y - 15, 30, 30);
      fill(0);
      ellipse(gameChar_x, gameChar_y - 15, 5, 5);
      ellipse(gameChar_x + 40, gameChar_y - 15, 5, 5);
      // arms
      fill(120);
      rect(gameChar_x + 10, gameChar_y - 45, 10, 5);
      // neck
      rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
      // face
      rect(gameChar_x + 2, gameChar_y - 75, 26, 15);
    } else if (charStatus.isRight) {
      // Right
      // body
      fill(204, 147, 34);
      rect(gameChar_x, gameChar_y - 45, 40, 40);
      // continuous track
      fill(120);
      ellipse(gameChar_x, gameChar_y - 15, 30, 30);
      ellipse(gameChar_x + 40, gameChar_y - 15, 30, 30);
      fill(0);
      ellipse(gameChar_x, gameChar_y - 15, 5, 5);
      ellipse(gameChar_x + 40, gameChar_y - 15, 5, 5);
      // arms
      fill(120);
      rect(gameChar_x + 20, gameChar_y - 45, 10, 5);
      // neck
      rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
      // face
      rect(gameChar_x + 12, gameChar_y - 75, 26, 15);
    } else if (charStatus.isFalling || charStatus.isPlummeting) {
      // Frontal falling
      // body
      fill(204, 147, 34);
      rect(gameChar_x, gameChar_y - 45, 40, 40);
      // continuous track
      fill(120);
      rect(gameChar_x - 15, gameChar_y - 30, 15, 30);
      rect(gameChar_x + 40, gameChar_y - 30, 15, 30);
      // arms
      rect(gameChar_x - 10, gameChar_y - 55, 10, 15);
      rect(gameChar_x + 40, gameChar_y - 55, 10, 15);
      // neck
      rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
      // face
      rect(gameChar_x + 2, gameChar_y - 75, 36, 15);
      // eyes
      fill(255);
      ellipse(gameChar_x + 10, gameChar_y - 68, 10, 10);
      ellipse(gameChar_x + 30, gameChar_y - 68, 10, 10);
    } else {
      char1_frontal();
    }
  } else if (character == 2) {
    if (charStatus.isLeft && charStatus.isFalling) {
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x - 10, gameChar_y - 40);
      pop();
      fill(255, 200, 200);
      ellipse(gameChar_x, gameChar_y - 55, 30, 30);
      fill(255, 0, 0);
      rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
      push();
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x - 15, gameChar_y - 45);
      line(gameChar_x - 3, gameChar_y - 16, gameChar_x - 5, gameChar_y - 1);
      line(gameChar_x + 3, gameChar_y - 16, gameChar_x + 5, gameChar_y - 1);
      pop();
    } else if (charStatus.isRight && charStatus.isFalling) {
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x + 10, gameChar_y - 40);
      pop();
      fill(255, 200, 200);
      ellipse(gameChar_x, gameChar_y - 55, 30, 30);
      fill(255, 0, 0);
      rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
      push();
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x + 15, gameChar_y - 45);
      line(gameChar_x - 3, gameChar_y - 16, gameChar_x - 5, gameChar_y - 1);
      line(gameChar_x + 3, gameChar_y - 16, gameChar_x + 5, gameChar_y - 1);
    } else if (charStatus.isLeft) {
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x + 10, gameChar_y - 25);
      pop();
      fill(255, 200, 200);
      ellipse(gameChar_x, gameChar_y - 55, 30, 30);
      fill(255, 0, 0);
      rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
      push();
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x - 15, gameChar_y - 30);
      line(gameChar_x - 3, gameChar_y - 16, gameChar_x - 5, gameChar_y - 1);
      line(gameChar_x + 3, gameChar_y - 16, gameChar_x + 5, gameChar_y - 1);
    } else if (charStatus.isRight) {
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x - 10, gameChar_y - 25);
      pop();
      fill(255, 200, 200);
      ellipse(gameChar_x, gameChar_y - 55, 30, 30);
      fill(255, 0, 0);
      rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
      push();
      stroke(0);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(gameChar_x, gameChar_y - 35, gameChar_x + 15, gameChar_y - 30);
      line(gameChar_x - 3, gameChar_y - 16, gameChar_x - 5, gameChar_y - 1);
      line(gameChar_x + 3, gameChar_y - 16, gameChar_x + 5, gameChar_y - 1);
    } else if (charStatus.isFalling || charStatus.isPlummeting) {
      fill(255, 200, 200);
      ellipse(gameChar_x, gameChar_y - 55, 30, 30);
      fill(255, 0, 0);
      rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
      fill(0);
      rect(gameChar_x - 10, gameChar_y - 15, 5, 14);
      rect(gameChar_x + 5, gameChar_y - 15, 5, 14);
      rect(gameChar_x - 15, gameChar_y - 50, 5, 15);
      rect(gameChar_x + 10, gameChar_y - 40, 5, 10);
    } else {
      char2_frontal();
    }
  }
  pop();
}

function char1_frontal() {
  // Frontal
  // body
  fill(204, 147, 34);
  rect(gameChar_x, gameChar_y - 45, 40, 40);
  // continuous track
  fill(120);
  rect(gameChar_x - 15, gameChar_y - 30, 15, 30);
  rect(gameChar_x + 40, gameChar_y - 30, 15, 30);
  // arms
  rect(gameChar_x - 10, gameChar_y - 45, 10, 5);
  rect(gameChar_x + 40, gameChar_y - 45, 10, 5);
  // neck
  rect(gameChar_x + 15, gameChar_y - 60, 10, 15);
  // face
  rect(gameChar_x + 2, gameChar_y - 75, 36, 15);
  // eyes
  fill(255);
  ellipse(gameChar_x + 10, gameChar_y - 68, 10, 10);
  ellipse(gameChar_x + 30, gameChar_y - 68, 10, 10);
}

function char2_frontal() {
  fill(255, 200, 200);
  ellipse(gameChar_x, gameChar_y - 55, 30, 30);
  fill(255, 0, 0);
  rect(gameChar_x - 10, gameChar_y - 45, 20, 30);
  fill(0);
  rect(gameChar_x - 10, gameChar_y - 15, 5, 14);
  rect(gameChar_x + 5, gameChar_y - 15, 5, 14);
  rect(gameChar_x - 15, gameChar_y - 40, 5, 20);
  rect(gameChar_x + 10, gameChar_y - 40, 5, 20);
}
