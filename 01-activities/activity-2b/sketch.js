function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245, 240, 255); // pastel purple bg 

  // Upon mouse click, shape become bigger and brighter
  let baseSize = mouseIsPressed ? 55 : 40;
  let bright = mouseIsPressed ? 255 : 200;

  for (let i = 0; i < width; i += 50) {

    // alternate every other shape
    if ((i / 50) % 2 === 0) {
      fill(255, bright, 220);
      noStroke();
      ellipse(i + 25, height / 2, baseSize);
    } else {
      fill(200, 180, bright);
      noStroke();
      rect(i + 5, height / 2 - baseSize / 2, baseSize - 10, baseSize - 10, 12);
    }
  }
}