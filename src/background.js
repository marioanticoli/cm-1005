// --------------------------------
// Background and objects rendering
// --------------------------------

// Function to draw cloud objects.
function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(240);
    ellipse(
      clouds[i].x_pos,
      clouds[i].y_pos,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      (clouds[i].x_pos * 6) / 7,
      clouds[i].y_pos,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      (clouds[i].x_pos * 4) / 3,
      (clouds[i].y_pos * 15) / 14,
      (clouds[i].width * 4) / 5,
      (clouds[i].height * 4) / 5
    );
  }
}

// Function to draw mountains objects.
function drawMountains() {
  for (var i = 0; i < mountains.length; i++) {
    fill(110);
    triangle(
      mountains[i].x_pos,
      floorPos_y,
      mountains[i].x_pos + mountains[i].width,
      floorPos_y,
      mountains[i].x_pos + mountains[i].width / 2,
      floorPos_y - mountains[i].height
    );
    fill(130);
    triangle(
      mountains[i].x_pos + mountains[i].width / 3,
      floorPos_y,
      mountains[i].x_pos + (mountains[i].width * 4) / 3,
      floorPos_y,
      mountains[i].x_pos + (mountains[i].width * 7) / 9,
      floorPos_y - (mountains[i].height * 5) / 9
    );
    fill(255);
    triangle(
      mountains[i].x_pos + mountains[i].width / 2,
      floorPos_y - mountains[i].height,
      mountains[i].x_pos + mountains[i].width / 2 - mountains[i].width / 10,
      floorPos_y - (mountains[i].height * 4) / 5,
      mountains[i].x_pos + mountains[i].width / 2 + mountains[i].width / 10,
      floorPos_y - (mountains[i].height * 4) / 5
    );
  }
}

// Function to draw trees objects.
function drawTrees() {
  for (var i = 0; i < trees_x.length; i++) {
    fill(150, 50, 50);
    rect(trees_x[i], treePos_y, 30, 80);
    fill(0, 255, 0);
    ellipse(trees_x[i] + 14, treePos_y - 40, 100, 90);
    ellipse(trees_x[i] - 26, treePos_y - 40, 50, 60);
    ellipse(trees_x[i] + 54, treePos_y - 30, 60, 60);
  }
}

// Function to draw canyon objects.
function drawCanyon(t_canyon) {
  fill(110, 10, 10);
  quad(
    t_canyon.x_pos,
    floorPos_y,
    t_canyon.x_pos + t_canyon.width / 10,
    height,
    t_canyon.x_pos + (t_canyon.width * 9) / 10,
    height,
    t_canyon.x_pos + t_canyon.width,
    floorPos_y
  );
  fill(150, 20, 20);
  quad(
    t_canyon.x_pos + t_canyon.width / 10,
    floorPos_y,
    t_canyon.x_pos + (t_canyon.width * 2) / 10,
    height,
    t_canyon.x_pos + (t_canyon.width * 8) / 10,
    height,
    t_canyon.x_pos + (t_canyon.width * 9) / 10,
    floorPos_y
  );
  fill(180, 80, 50);
  quad(
    t_canyon.x_pos + (t_canyon.width * 2) / 10,
    floorPos_y,
    t_canyon.x_pos + (t_canyon.width * 4) / 10,
    height,
    t_canyon.x_pos + (t_canyon.width * 6) / 10,
    height,
    t_canyon.x_pos + (t_canyon.width * 7) / 10,
    floorPos_y
  );
}

// Function to render flagpole
function renderFlagpole() {
  push();
  fill(0);
  rect(
    flagpole.x_pos,
    floorPos_y - flagpole.height,
    flagpole.width,
    flagpole.height
  );
  if (flagpole.isReached) {
    fill(0, 255, 0);
    triangle(
      flagpole.x_pos,
      floorPos_y - (1 * flagpole.height) / 6 - 10,
      flagpole.x_pos - flagpole.width * 5,
      floorPos_y - 10,
      flagpole.x_pos,
      floorPos_y - 10
    );
    backgroundMusic(false);
    finished.play(0, 0, 1, 1, 2);
  } else {
    fill(255, 0, 0);
    triangle(
      flagpole.x_pos,
      floorPos_y - flagpole.height,
      flagpole.x_pos - flagpole.width * 5,
      floorPos_y - (5 * flagpole.height) / 6,
      flagpole.x_pos,
      floorPos_y - (5 * flagpole.height) / 6
    );
  }
  pop();
}

// Function to draw collectable objects.
function drawCollectable(t_collectable) {
  stroke(220, 0, 100);
  fill(255, 0, 0);
  quad(
    t_collectable.x_pos,
    t_collectable.y_pos,
    t_collectable.x_pos + t_collectable.size,
    t_collectable.y_pos,
    t_collectable.x_pos + (t_collectable.size * 3) / 4,
    t_collectable.y_pos - t_collectable.size / 4,
    t_collectable.x_pos + t_collectable.size / 4,
    t_collectable.y_pos - t_collectable.size / 4
  );
  triangle(
    t_collectable.x_pos,
    t_collectable.y_pos,
    t_collectable.x_pos + t_collectable.size,
    t_collectable.y_pos,
    t_collectable.x_pos + t_collectable.size / 2,
    t_collectable.y_pos + t_collectable.size / 2
  );
  noStroke();
}

// Function to draw lives indicator
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// Function to show volume
function showVolume() {
  var r, g, b;
  if (volume <= 0.1) {
    [r, g, b] = [0, 0, 0];
  } else if (volume <= 0.5) {
    [r, g, b] = [0, 200, 50];
  } else if (volume <= 0.8) {
    [r, g, b] = [250, 250, 0];
  } else {
    [r, g, b] = [255, 0, 100];
  }
  stroke(0);
  fill(r, g, b);
  rect(width * 0.85, height * 0.05, 10, 15);
  quad(
    width * 0.85 + 10,
    height * 0.05,
    width * 0.85 + 25,
    height * 0.05 - 5,
    width * 0.85 + 25,
    height * 0.05 + 20,
    width * 0.85 + 10,
    height * 0.05 + 15
  );
}

// Function to show commands
function showCommands() {
  push();
  fill(0);
  rect(0, height - 50, width, 50);
  fill(255);
  textSize(25);
  text("Jump: spacebar", 50, height - 15);
  text("Volume: +/-", 250, height - 15);
  text("Pause/Restart: p", width / 3 + 50, height - 15);
  pop();
}

function chooseCharacter() {
  textSize(35);
  push();
  translate(-250, -100);
  char1_frontal();
  pop();
  push();
  translate(250, -100);
  char2_frontal();
  pop();
  var pausedText = "Click on the character to choose one.";
  stroke(0);

  text(pausedText, (width - textWidth(pausedText)) / 2, height * 0.3);
  pop();
}
