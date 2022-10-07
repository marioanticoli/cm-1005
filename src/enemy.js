/*  
---------------
Enemy extension
---------------

Implementing and calling the construction function was fairly easy after watching the video and I mostly achieved
what I wanted. What I had the most difficulty with, and in the end wasn’t  able to implement, is that I wanted the
throwing starts to rotate on themselves while flying. I tried to achieve this in many different ways but to no avail;
first I tried the builtin rotate() function, but this works relative to the origin, after I used the applyMatrix()
function, with the same result and finally I rolled out my own implementation by calculating matrices with rotation
transformation and, while I got better results, it was still wonting, so I dropped the idea.
Another difficulty I had, but this applies to the whole code, is the difficulty of following the current state with
such an architecture, so I decided to split it in different files for (slightly) better separation.
*/

function Enemy(y, speed, colour) {
  // set height and colour
  this.y = y;
  this.colour = colour;
  this.speed = speed;

  // set initial position to scolled position
  this.currentX = gameChar_world_x;

  this.update = function() {
    this.currentX -= speed;

    if (this.currentX < gameChar_world_x - width / 2) {
      this.currentX = gameChar_world_x + width / 2;
    }
  };

  this.draw = function() {
    this.update();
    fill(this.colour);

    triangle(
      this.currentX,
      this.y,
      this.currentX + 5,
      this.y + 15,
      this.currentX + 10,
      this.y
    );
    triangle(
      this.currentX,
      this.y - 10,
      this.currentX + 5,
      this.y - 25,
      this.currentX + 10,
      this.y - 10
    );
    triangle(
      this.currentX + 10,
      this.y,
      this.currentX + 25,
      this.y - 5,
      this.currentX + 10,
      this.y - 10
    );
    triangle(
      this.currentX,
      this.y,
      this.currentX - 15,
      this.y - 5,
      this.currentX,
      this.y - 10
    );
  };

  this.checkContact = function(gc_x, gc_y) {
    var d = dist(gc_x, gc_y, this.currentX, this.y);
    if (d < 30) {
      return true;
    }
    return false;
  };
}
