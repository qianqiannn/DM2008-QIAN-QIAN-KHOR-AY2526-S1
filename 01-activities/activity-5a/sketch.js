/*
  Colliding Stars – my version with stars instead of circles.
  I kept the logic similar to the original, just cleaned up the structure and naming.
*/

// Config Vars =====
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const STAR_OUTER_RADIUS = 30;
const STAR_POINTS = 5;

let starSprites = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // Init 2 stars
  starSprites.push(new StarSprite(200, 200, STAR_OUTER_RADIUS));
  starSprites.push(new StarSprite(300, 200, STAR_OUTER_RADIUS));
}

function draw() {
  background("#CFF0FC");

  for (let i = 0; i < starSprites.length; i++) {
    const star = starSprites[i];
    star.update();
    star.render();
  }

  // Check for collision
  for (let i = 0; i < starSprites.length; i++) {
    for (let j = i + 1; j < starSprites.length; j++) {
      starSprites[i].handleCollision(starSprites[j]);
    }
  }
}

// Draw star at given coordinate
function drawStar(cx, cy, innerRadius, outerRadius, points) {
  const angle = TWO_PI / points;
  const halfAngle = angle / 2;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    // outer point
    let sx = cx + cos(a) * outerRadius;
    let sy = cy + sin(a) * outerRadius;
    vertex(sx, sy);

    // inner point
    sx = cx + cos(a + halfAngle) * innerRadius;
    sy = cy + sin(a + halfAngle) * innerRadius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

class StarSprite {
  constructor(x, y, outerRadius) {

    this.position = createVector(x, y);
    this.velocity = this.createRandomVelocity();

    this.outerRadius = outerRadius;
    this.innerRadius = outerRadius * 0.5; 


    this.fillColor = color(100, 180, 220);
  }

  // Randomize star speed
  createRandomVelocity() {
    const vx = random(-5, 12);
    const vy = random(-3, 6);
    return createVector(vx, vy);
  }

  // Move the star per frame
  update() {
    this.position.add(this.velocity);
    this.checkEdges();
  }

  render() {
    noStroke();
    fill(this.fillColor);
    drawStar(this.position.x, this.position.y, this.innerRadius, this.outerRadius, STAR_POINTS);
  }

  // Flip velocity and keep position const
  checkEdges() {
    // left / right
    if (this.position.x - this.outerRadius < 0 || this.position.x + this.outerRadius > width) {
      this.velocity.x *= -1;
      this.position.x = constrain(this.position.x, this.outerRadius, width - this.outerRadius);
    }

    // top / bottom
    if (this.position.y - this.outerRadius < 0 || this.position.y + this.outerRadius > height) {
      this.velocity.y *= -1;
      this.position.y = constrain(this.position.y, this.outerRadius, height - this.outerRadius);
    }
  }

  // Change colour upon collision
  handleCollision(otherStar) {
    const distanceBetweenCenters = dist(
      this.position.x,
      this.position.y,
      otherStar.position.x,
      otherStar.position.y
    );

    const combinedRadius = this.outerRadius + otherStar.outerRadius;

    if (distanceBetweenCenters < combinedRadius) {
      // I randomise the colours so each collision feels different.
      this.fillColor = color(random(255), random(255), random(255));
      otherStar.fillColor = color(random(255), random(255), random(255));

      this.velocity.mult(-1);
      otherStar.velocity.mult(-1);

      this.velocity = this.createRandomVelocity();

      // Prevent stickiness
      this.separateFrom(otherStar);
    }
  }

  separateFrom(otherStar) {
    const direction = p5.Vector.sub(this.position, otherStar.position);
    const distance = direction.mag() || 0.0001; // I avoid dividing by zero here.
    const overlap = (this.outerRadius + otherStar.outerRadius) - distance;

    if (overlap > 0) {
      direction.normalize();
      const offset = overlap / 2;

      this.position.add(p5.Vector.mult(direction, offset));
      otherStar.position.sub(p5.Vector.mult(direction, offset));
    }
  }
}