// DM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0;        
let size = 50;    
let bgColor;
let mode = 1;     // current visual mode

function setup() {
  createCanvas(400, 400);
  bgColor = color(240);
}

function draw() {
  background(bgColor);

  // conditionals to call diff modes
  if (mode === 1) {
    pastelBallMode();
  } 
  else if (mode === 2) {
    floatingFlowerMode();
  } 
  else if (mode === 3) {
    bouncyHeartMode();
  }
}


// Mode 1 -- purple ball going across
function pastelBallMode() {
  fill(200, 170, 255);
  noStroke();
  ellipse(x, height / 2, size);

  x += 2;
  if (x > width + size / 2) {
    x = -size / 2;
  }
}


// Mode 2 -- shrinking growing flower
let flowerSize = 20;
let grow = true;

function floatingFlowerMode() {
  translate(width / 2, height / 2);

  fill(255, 220, 230);
  noStroke();

  // flower petals
  for (let i = 0; i < 6; i++) {
    ellipse(0, flowerSize, 30, 50);
    rotate(PI / 3);
  }

  // centre
  fill(255, 250, 180);
  ellipse(0, 0, 40);

  // shrink grow anim
  if (grow) {
    flowerSize += 0.5;
    if (flowerSize > 40) grow = false;
  } else {
    flowerSize -= 0.5;
    if (flowerSize < 20) grow = true;
  }
}


// Mode 3 -- heart bouncing around
let hx = 200;
let hy = 200;
let vx = 2;
let vy = 1.5;

function bouncyHeartMode() {
  fill(255, 180, 200);
  noStroke();

  heart(hx, hy, 50);

  // movement
  hx += vx;
  hy += vy;

  // bounce
  if (hx < 0 || hx > width)  vx *= -1;
  if (hy < 0 || hy > height) vy *= -1;
}

// heart helper funct
function heart(x, y, size) {
  beginShape();
  vertex(x, y + size / 4);
  bezierVertex(x - size / 2, y - size / 4, x - size / 2, y + size / 2, x, y + size / 1.2);
  bezierVertex(x + size / 2, y + size / 2, x + size / 2, y - size / 4, x, y + size / 4);
  endShape(CLOSE);
}


// Switch case to change object shape
function keyPressed() {
  switch (key) {
    case '1':
      bgColor = color(245, 230, 250);
      mode = 1;
      break;

    case '2':
      bgColor = color(225, 245, 235);
      mode = 2;
      break;

    case '3':
      bgColor = color(235, 240, 255);
      mode = 3;
      break;

    default:
      bgColor = color(240);
  }
}