
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 230, 255); // light blue background

  // Body of Snake
  fill(50, 180, 70);      // green snake color
  noStroke();

  // body segments
  ellipse(200, 250, 120, 60);
  ellipse(170, 210, 110, 55);
  ellipse(190, 170, 95, 50);
  ellipse(230, 150, 85, 45);
  ellipse(270, 170, 75, 40);

  // head
  fill(60, 200, 80);
  ellipse(310, 180, 70, 55);

  // eye
  fill(255);
  ellipse(325, 170, 18, 18);

  fill(0);
  ellipse(325, 170, 8, 8);

  // tongue
  stroke(200, 0, 0);
  strokeWeight(3);
  line(345, 185, 365, 195);
  line(365, 195, 360, 188); // the split part of tongue

  noStroke();
  
  // leave this last
  helperGrid(); // do not edit or remove
}
