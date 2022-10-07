var isPaused;

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var charStatus;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

var game_score;
var flagpole;
var lives;

var enemies;

// character
var char;

// preload sounds
function preload() {
  on_die = loadSound("assets/sounds/on_die.wav");
  get_coin = loadSound("assets/sounds/get_coin.wav");
  bg_loop = loadSound("assets/sounds/bg_loop.mp3");
  finished = loadSound("assets/sounds/finished.mp3");
}

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;

  // initialize sounds
  isPlaying = false;
  volume = 0;
  bg_loop.setVolume(volume);

  // initialize live counter
  lives = 3;

  // initialize game state
  isPaused = true;
  charStatus = {
    isLeft: false,
    isRight: false,
    isFalling: false,
    isPlummeting: false
  };

  char = 0;
  // initialize game
  startGame();
}

function draw() {
  if (char == 0) {
    // choose character
    chooseCharacter();
  } else if (isPaused) {
    push();
    fill(0);
    textSize(35);
    rect(0, 0, width, height);
    fill(255);
    var pausedText = "Start with 'p'";
    text(pausedText, (width - textWidth(pausedText)) / 2, height / 2);
    pop();
  } else {
    background(100, 155, 255); // fill the sky blue

    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height / 4); // draw some green ground

    push();
    translate(scrollPos, 0);

    // Draw clouds.
    drawClouds();

    // Draw mountains.
    drawMountains();

    // Draw trees.
    drawTrees();

    // Draw canyons.
    for (var i = 0; i < canyons.length; i++) {
      drawCanyon(canyons[i]);
      checkCanyon(canyons[i]);
    }

    // Draw collectable items.
    for (var i = 0; i < collectables.length; i++) {
      if (!collectables[i].isFound) {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
      }
    }

    // render flagpole
    if (!flagpole.isReached) {
      checkFlagpole();
    }
    renderFlagpole();

    // render enemies
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].draw();

      var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
      if (isContact) {
        lives--;
        on_die.play();
        if (lives > 0) {
          startGame();
          break;
        }
      }
    }

    pop();

    // show volume control
    showVolume();

    // show commands
    showCommands();

    // write score to screen
    fill(0);
    textSize(20);
    text(`Score: ${game_score}`, 50, 50);

    // draw lives to screen
    for (var i = 3; i > 0; i--) {
      push();
      stroke(0);
      if (lives < i) {
        fill(150);
      } else {
        fill(255, 0, 0);
      }
      heart(150 + i * 30, 30, 20);
      pop();
    }

    // Draw game character.

    drawGameChar(char);

    // stop game if character died
    if (lives < 1) {
      textSize(30);
      stroke(255);
      fill(0);
      text("Game over. Press space to continue.", width / 2 - 200, height / 2);
      isPlaying = false;
      backgroundMusic(isPlaying);
      return;
    }

    // ask to continue is level completed
    if (flagpole.isReached) {
      textSize(30);
      stroke(255);
      fill(0);
      text(
        "Level complete. Press space to continue.",
        width / 2 - 200,
        height / 2
      );
      return;
    }

    // Logic to make the game character move or the background scroll.
    if (charStatus.isLeft) {
      if (gameChar_x > width * 0.4) {
        gameChar_x -= 5;
      } else {
        scrollPos += 5;
      }
    }

    if (charStatus.isRight) {
      if (gameChar_x < width * 0.6) {
        gameChar_x += 5;
      } else {
        scrollPos -= 5; // negative for moving against the background
      }
    }

    // Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y) {
      gameChar_y += 1;
      charStatus.isFalling = true;
    } else {
      charStatus.isFalling = false;
    }

    // Update real position of gameChar for collision detection.
    gameChar_world_x = gameChar_x - scrollPos;

    checkPlayerDie();
  }
}

function startGame() {
  isPlaying = true;
  setTimeout(() => {
    backgroundMusic(isPlaying);
  }, 100);
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // initialize score
  game_score = 0;

  // initialize saving point
  flagpole = {
    x_pos: 4000,
    isReached: false,
    width: 10,
    height: 180
  };

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  // Boolean variables to control the movement of the game character.
  charStatus.isLeft = false;
  charStatus.isRight = false;
  charStatus.isFalling = false;
  charStatus.isPlummeting = false;

  // Initialise arrays of scenery objects.
  //trees
  trees_x = [200, 400, 800, 950, 1200, 1400, 1800, 1950];
  treePos_y = floorPos_y - 80;

  //clouds
  clouds = [
    { x_pos: 150, y_pos: 150, width: 100, height: 40 },
    { x_pos: 300, y_pos: 100, width: 210, height: 60 },
    { x_pos: 700, y_pos: 120, width: 190, height: 100 },
    { x_pos: 1000, y_pos: 150, width: 50, height: 20 },
    { x_pos: 1150, y_pos: 150, width: 100, height: 40 },
    { x_pos: 1300, y_pos: 100, width: 210, height: 60 },
    { x_pos: 1700, y_pos: 120, width: 190, height: 100 },
    { x_pos: 2000, y_pos: 150, width: 50, height: 20 }
  ];

  // mountains
  mountains = [
    { x_pos: 50, width: 100, height: 350 },
    { x_pos: 290, width: 150, height: 250 },
    { x_pos: 500, width: 300, height: 350 },
    { x_pos: 800, width: 400, height: 450 },
    { x_pos: 1290, width: 150, height: 250 },
    { x_pos: 1500, width: 300, height: 350 },
    { x_pos: 1800, width: 400, height: 450 },
    { x_pos: 3000, width: 100, height: 350 }
  ];

  // canyons
  canyons = [
    { x_pos: 200, width: 200 },
    { x_pos: 900, width: 350 },
    { x_pos: 1500, width: 200 },
    { x_pos: 2500, width: 350 }
  ];

  //collectable
  collectables = [
    { x_pos: 400, y_pos: 400, size: 50 },
    { x_pos: 650, y_pos: 300, size: 50 },
    { x_pos: 1100, y_pos: 350, size: 50 },
    { x_pos: 1400, y_pos: 400, size: 50 },
    { x_pos: 1650, y_pos: 300, size: 50 },
    { x_pos: 1850, y_pos: 400, size: 50 },
    { x_pos: 2000, y_pos: 330, size: 50 },
    { x_pos: 2100, y_pos: 430, size: 50 }
  ];

  enemies = [];
  for (var i = 0; i < 1; i++) {
    enemies.push(
      new Enemy(
        random(floorPos_y, 300),
        random(1, 1.5) * 4,
        color(random(200, 250), random(50, 100), random(0, 50))
      )
    );
  }
}
