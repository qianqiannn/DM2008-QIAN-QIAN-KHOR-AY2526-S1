// DM2008
// Activity 1b (Georg Nees)


let x;
let y;
let w;

function setup() {
  createCanvas(800, 800);
  background(250, 245, 255); // pastel pink bg 
}

function draw() {
  // inverted mouse position 
  x = width - mouseX + random(-20, 20);
  y = height - mouseY + random(-20, 20);

  w = random(20, 70);

  // pastel colors
  let pastel = color(
    random(150, 255),
    random(150, 230),
    random(150, 255),
    180
  );

  stroke(pastel);
  strokeWeight(random(1, 3));
  noFill();

  // soft “petal block”
  rect(x, y, w, w, 15);
}

// "bloom" effect
function mousePressed() {
  let bloomSize = random(60, 120);

  let pastelBloom = color(
    random(170, 255),
    random(140, 210),
    random(160, 255)
  );

  noStroke();
  fill(pastelBloom);
  ellipse(mouseX, mouseY, bloomSize, bloomSize * 0.8);
}

// export the canvas
function keyPressed() {
  saveCanvas("activity1b-floral", "jpg");
}