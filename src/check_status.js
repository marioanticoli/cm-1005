// Function to check character has collected an item.
function checkCollectable(t_collectable) {
  if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos + t_collectable.size / 2,
      t_collectable.y_pos
    ) < 50
  ) {
    t_collectable.isFound = true;
    game_score++;
    get_coin.play();
  }
}

// Function to check has reached the saving point.
function checkFlagpole() {
  if (abs(flagpole.x_pos - gameChar_world_x) < 30) {
    flagpole.isReached = true;
  }
}

// Function to check character's lives
function checkPlayerDie() {
  if (gameChar_y > floorPos_y) {
    lives--;
    on_die.play();
    if (lives > 0) {
      startGame();
    }
  }
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon) {
  if (
    gameChar_world_x >= t_canyon.x_pos &&
    gameChar_world_x <= t_canyon.x_pos + t_canyon.width &&
    gameChar_y >= floorPos_y
  ) {
    charStatus.isPlummeting = true;
  }

  if (charStatus.isPlummeting) {
    gameChar_y += 3;
  }
}
