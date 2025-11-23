let agents = [];
const NUM_START = 12;

function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(HSB, 360, 100, 100, 255);

  // Create the initial agents
  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(16, 40);
    let sx = random(-2, 2);
    let sy = random(-2, 2);
    agents.push(new Agent(x, y, sz, sx, sy));
  }
}

function draw() {
  background(230);

  // Update + draw all agents
  for (let ag of agents) {
    ag.update();
    ag.driftColor();   // extra method
    ag.show();
  }

  // Remove dying agents safely (backwards loop)
  for (let i = agents.length - 1; i >= 0; i--) {
    if (agents[i].sz <= 5) {
      agents.splice(i, 1);
    }
  }
}

// Add new agent on click
function mousePressed() {
  const sz = random(20, 40);
  const sx = random(-2, 2);
  const sy = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, sz, sx, sy));
}

// Clear system
function keyPressed() {
  if (key === "C") {
    agents = [];
  }
}

// ============================
// Agent Class
// ============================
class Agent {
  constructor(x, y, sz, dx, dy) {
    this.x = x;
    this.y = y;
    this.sz = sz;

    this.dx = dx;
    this.dy = dy;

    this.h = random(360);
    this.alpha = 200;
    this.pulse = random(100); // offset for size oscillation
  }

  // Method #1 — movement + changing size
  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Screen wrap
    if (this.x > width)  this.x = 0;
    if (this.x < 0)      this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0)      this.y = height;

    // Property that changes over time: pulsing size
    this.sz += sin(frameCount * 0.05 + this.pulse) * 0.3;

    // Slowly shrink over time
    this.sz -= 0.01;
  }

  // Method #2 — extra custom behavior
  driftColor() {
    this.h = (this.h + 0.4) % 360;  // hue cycles over time
  }

  // Draw the agent
  show() {
    fill(this.h, 80, 100, this.alpha);
    ellipse(this.x, this.y, this.sz);
  }
}