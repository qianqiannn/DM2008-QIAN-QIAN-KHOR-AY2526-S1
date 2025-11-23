let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Step 3: make one cookie object
  cookie = new Cookie("chocolate", 80, width/2, height/2);
}

function draw() {
  background(230);

  // Step 4: display the cookie
  cookie.show();
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, sz, x, y) {
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    // Choose color based on flavor
    if (this.flavor == "chocolate") {
      fill(150, 90, 40);
    } else if (this.flavor == "vanilla") {
      fill(230, 210, 140);
    } else if (this.flavor == "matcha") {
      fill(120, 170, 100);
    } else {
      fill(200); // default
    }

    ellipse(this.x, this.y, this.sz);
  }

  // Step 5: movement method
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // Step 6: randomize flavor
  randomizeFlavor() {
    const options = ["chocolate", "vanilla", "matcha", "strawberry"];
    this.flavor = random(options);
  }
}

// Step 5: move cookie with arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW)  cookie.move(-10, 0);
  if (keyCode === RIGHT_ARROW) cookie.move(10, 0);
  if (keyCode === UP_ARROW)    cookie.move(0, -10);
  if (keyCode === DOWN_ARROW)  cookie.move(0, 10);
}

// Step 6: randomize flavor when clicking
function mousePressed() {
  cookie.randomizeFlavor();
}