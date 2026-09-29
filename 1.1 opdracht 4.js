function setup() {
  canvas = createCanvas(450, 450);
  background('cornflowerblue');
  canvas.parent();
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0, 350, 450, 100);

  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100, 280, 100, 100);

  fill('gray');
  
  triangle(100, 280, 150, 200, 200, 280);

  
  noStroke();
  fill('grey');
  rect(115, 320, 30, 60);

  
  fill('khaki');
  ellipse(375, 75, 150);

  
  fill('sienna');
  rect(300, 250, 40, 130);

  fill('olive');
  ellipse(320, 200, 100, 150);
}
