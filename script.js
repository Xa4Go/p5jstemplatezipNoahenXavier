var rij = 0;
var kolom;

function setup() {
  canvas = createCanvas(451, 451);
  canvas.parent();
  background('coral');
  fill('white');
}

function draw() {
  for (var kolom = 0; kolom < 450; kolom += 50) {
    rect(kolom, rij, 50, 50);
  }
}