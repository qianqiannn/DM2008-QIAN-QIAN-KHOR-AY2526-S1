function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(245, 240, 255);

  // Call your function in different places (TODO 2)
  drawFlower(100, 150, 50, color(255, 200, 220));
  drawFlower(300, 150, 80, color(220, 240, 255));
  drawFlower(200, 300, 60, color(255, 240, 200));

  // Challenge: call inside a loop (TODO 3)
  for (let x = 50; x < width; x += 70) {
    drawFlower(x, 50, 40, color(200, random(150, 230), random(180, 255)));
  }
}

// Custom function (TODO 1)
function drawFlower(x, y, s, col) {
  push();
  translate(x, y);

  fill(col);

  // 4 simple petals
  ellipse(0, -s / 2, s, s * 0.8);
  ellipse(0, s / 2, s, s * 0.8);
  ellipse(-s / 2, 0, s * 0.8, s);
  ellipse(s / 2, 0, s * 0.8, s);

  // center
  fill(255, 245, 180);
  ellipse(0, 0, s * 0.7);

  pop();
}

