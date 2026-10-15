var video;

var raster = {
  aantalRijen: 12,
  aantalKolommen: 18,
  celGrootte: null,

  berekenCelGrootte() {
    this.celGrootte = canvas.width / this.aantalKolommen;
  },
  teken() {
    push();
    noFill();
    stroke("grey");
    for (rij = 0; rij < this.aantalRijen; rij++) {
      for (kolom = 0; kolom < this.aantalKolommen; kolom++) {
        rect(
          kolom * this.celGrootte,
          rij * this.celGrootte,
          this.celGrootte,
          this.celGrootte,
        );
      }
    }
    pop();
  },
};


  
var jos = {
  x: 400,
  y: 300,
  animatie: [],
  aantalFrames: 6,
  frameNummer: 3,
  stapGrootte: null,
  gehaald: false,

  beweeg() {//left
    if (keyIsDown(65)) { 
      this.x -= this.stapGrootte;
      this.frameNummer = 2;
    }//right
    if (keyIsDown(68)) { 
      this.x += this.stapGrootte;
      this.frameNummer = 1;
    }//up
    if (keyIsDown(87)) { 
      this.y -= this.stapGrootte;
      this.frameNummer = 4;
    }//down
    if (keyIsDown(83)) { 
      this.y += this.stapGrootte;
      this.frameNummer = 5;
    }
    
    this.x = constrain(this.x, 0, canvas.width);
    this.y = constrain(this.y, 0, canvas.height - raster.celGrootte);

    if (this.x == canvas.width) {
      this.gehaald = true;
    }
  },

  wordtGeraakt(vijand) {
    if (this.x == vijand.x && this.y == vijand.y) {
      return true;
    } else {
      return false;
    }
  },

  toon() {
    image(
      this.animatie[this.frameNummer],
      this.x,
      this.y,
      raster.celGrootte,
      raster.celGrootte,
    );
  },
};

var alice = {
  x: 700,
  y: 200,
  sprite: null,
  stapGrootte: null,

  beweeg() {
    this.x += floor(random(-1, 2)) * this.stapGrootte;
    this.y += floor(random(-1, 2)) * this.stapGrootte;

    this.x = constrain(this.x, 0, canvas.width - raster.celGrootte);
    this.y = constrain(this.y, 0, canvas.height - raster.celGrootte);
  },

  toon() {
    image(this.sprite, this.x, this.y, raster.celGrootte, raster.celGrootte);
  },
};

var bal = {
  diameter: 40,
  straal: null,
  x: null,
  y: null,
  snelheidX: 8,
  snelheidY: 5,

  beweeg() {
    this.x += this.snelheidX;
    this.y += this.snelheidY;

    if (this.x < this.straal || this.x > canvas.width - this.straal) {
      this.snelheidX *= -1;
    }
    if (this.y < this.straal || this.y > canvas.height - this.straal) {
      this.snelheidY *= -1;
    }
  },

  teken() {
    fill(128, 0, 255, 1);
    ellipse(this.x, this.y, this.diameter);
  },
};

var bom = {
     diameter: 60,
      straal: null,
      x: null,
      y: null,
      snelheidX: 5,
      snelheidY: 5,

      beweeg() {
        this.x += this.snelheidX;
        this.y += this.snelheidY;

        if (this.x < this.straal || this.x > canvas.width - this.straal) {
          this.snelheidX *= 0.5;
        }
        if (this.y < this.straal || this.y > canvas.height - this.straal) {
          this.snelheidY *= 0.5;

      
        }
      },
  teken() {
    fill(255, 0, 0, 1);
    ellipse(this.x, this.y, this.diameter);
  },
};
var bob = {
  x: 200,
  y: 500,
  sprite: null,
  stapGrootte: null,

  beweeg() {
    this.x += floor(random(-1, 2)) * this.stapGrootte;
    this.y += floor(random(-1, 2)) * this.stapGrootte;

    this.x = constrain(this.x, 0, canvas.width - raster.celGrootte);
    this.y = constrain(this.y, 0, canvas.height - raster.celGrootte);
  },

  toon() {
    image(this.sprite, this.x, this.y, raster.celGrootte, raster.celGrootte);
  },
};

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  alice.sprite = loadImage("images/sprites/Alice100px/Alice.png");
  bob.sprite = loadImage("images/sprites/Bob100px/Bob.png");
  for (var b = 0; b < jos.aantalFrames; b++) {
    frameJos = loadImage("images/sprites/Jos100px/Jos_" + b + ".png");
    jos.animatie.push(frameJos);
  }
}



function setup() {
  canvas = createCanvas(900, 600);
  canvas.parent();
  frameRate(10);
  textFont("Verdana");
  textSize(90);
  raster.berekenCelGrootte();
  frameRate(50);
  colorMode(RGB, 128, 0, 255, 1);
  noStroke();
  bal.straal = bal.diameter / 2;
  bal.x = bal.straal;
  bal.y = bal.straal;
  colorMode(RGB, 255, 200, 1); 
  bom.straal = bom.diameter / 2;
  bom.x = bom.straal;
  bom.y = bom.straal;
  colorMode(RGB, 255, 255, 1); 
  jos.stapGrootte = 1 * raster.celGrootte;
  alice.stapGrootte = 1 * raster.celGrootte;
  bob.stapGrootte = 1 * raster.celGrootte;
  bom.stapGrootte = 0.5 * raster.celGrootte;
  bal.stapGrootte = 1 * raster.celGrootte;

  video = createVideo("133143-755982926.mp4");
  video.elt.muted = true;
  video.elt.playsInline = true;
  video.hide();
  video.loop();
}

function draw() {

  background(brug);
  if (video && video.elt.readyState >= 2) {
    image(video, 0, 0, canvas.width, canvas.height);
  }
  raster.teken();
  jos.beweeg();
  alice.beweeg();
  bom.beweeg();
  bob.beweeg();
  bal.beweeg();
  bal.teken();
  jos.toon();
  alice.toon();
  bom.teken();
  bob.toon();

 
  
  if (jos.wordtGeraakt(bob)) {
    background("red");
    fill("white");
    text("Je hebt verloren...", 30, 300);
    noLoop();
  }
  if (jos.wordtGeraakt(bom)) {
    noLoop();
  }
  if (jos.wordtGeraakt(alice)){
    background("red");
    fill("white");
    text("Je hebt verloren...", 30, 300);
    noLoop();
  }
  if (jos.gehaald) {
    background("green");
    fill("white");
    text("Je hebt gewonnen!", 30, 300);
    noLoop();
  }
}