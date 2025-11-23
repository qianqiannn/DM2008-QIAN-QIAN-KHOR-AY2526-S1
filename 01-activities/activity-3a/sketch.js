
// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// Store each flower in an array
let flowers = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Default -- 3 flowers on screen
  flowers.push({
    x: 100,
    y: 200,
    size: 50,
    col: color(255, 200, 220)
  });
  flowers.push({
    x: 200,
    y: 200,
    size: 70,
    col: color(220, 240, 255)
  });
  flowers.push({
    x: 300,
    y: 200,
    size: 60,
    col: color(255, 240, 200)
  });
}

function draw() {
  background(245, 240, 255);

  // Loop through array using .length
  for (let i = 0; i < flowers.length; i++) {
    let f = flowers[i];

    fill(f.col);

    // Form the flower (5 circles)
    push();
    translate(f.x, f.y);
    for (let p = 0; p < 5; p++) {
      ellipse(0, -f.size / 2, f.size);
      rotate(PI / 2.5);
    }
    // center of flower
    fill(255, 245, 180);
    ellipse(0, 0, f.size * 0.6);
    pop();
  }

  // instructions
  fill(120);
  textSize(12);
  text("Click to add flower or Press 'r' to REMOVE last flower", 10, height - 10);
}

// Upon mouse click, random size and color flower appears
function mousePressed() {
  flowers.push({
    x: mouseX,
    y: mouseY,
    size: random(40, 80),
    col: color(
      random(200, 255),
      random(180, 240),
      random(200, 255)
    )
  });
}

// Key removes flowers
function keyPressed() {
  if (key === 'r') {
    flowers.pop();  // remove last flower
  }
}