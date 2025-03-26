// Classes are made up of constructor (setup), display, and update

let foams, city, beanie, af1, durag, cap, converse, glasses, crocs;
let doritos,heaven, halo, wings,hands;
let peng1,peng2,peng3,peng4, peng5;
let penguins = []
let stop;


function preload() {
  foams = loadImage('foams1.png');
  city = loadImage('city.jpg');
  beanie = loadImage('hat.webp');
  af1 = loadImage('baf.png');
  durag = loadImage('yankee.png');
  snowyland = loadImage('snowyland.jpg')
  cap = loadImage('cap.png')
  converse = loadImage('converse.png')
  glasses = loadImage('glasses.png')
  crocs = loadImage('crocs.png')
  doritos = loadImage('doritos.png')
  heaven = loadImage('heaven.webp')
  halo = loadImage('halo.png')
  wings = loadImage('wings.png')
  hands = loadImage('hands.png')
}

function setup() {
  createCanvas(500, 500);
  background(0);
  rectMode(CENTER);
  imageMode(CENTER);

  godPenguin = new GOD(-200, height / 2, 1, 1, 0, 1, 0); 


  // peng1 = new PENGUIN(random(height), random(width), .3, .3, 0, random(-1, 1), random(-1,1), 'on fonem grave'); 
  // peng2 = new NERD(random(height), random(width), .3,.3,0,random(-1, 1), random(-1,1), 'I enjoy mathematics' )
  // peng3 = new FAT(random(height), random(width), .3,.3,0,random(-1, 1), random(-1,1), 'Me Hungry' )
  // peng4 = new FAST(random(height), random(width), .3,.3,0,5, 5, 'I AM SPEED')
}

function draw() {
  background(150);
  image(snowyland, 250, 200, 600, 600)

  // peng1.display();
  // peng1.update();
  // peng2.display();
  // peng2.update();
  // peng3.display();
  // peng3.update();
  // peng4.display();
  // peng4.update();
  // peng4.update();
  for (let penguin of penguins) {
    penguin.display();
    penguin.update();
    penguin.acc();
  }
  if (penguins.length >=30){
image(heaven, width/2,height/2, 500,500)
  godPenguin.update();  // Update movement
  godPenguin.display(); // Display God Penguin
  }

}


class PENGUIN {
  constructor(x, y, scaleX, scaleY, rotation, speedx, speedy, lcoms) {
    this.lx = x;
    this.ly = y;
    this.sx = scaleX;
    this.sy = scaleY;
    this.rot = rotation;
    this.speedx = speedx;
    this.speedy = speedy;
    this.coms = lcoms;
  }

  display() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sx, this.sy);
    
    this.rightArm();
    this.feet();
    this.body();
    this.belly();
    this.leftArm();
    this.eyes();
    this.eyebrows();
    this.beak();
    this.hat();
    
    fill(0)
    textSize(80)
    text(this.coms,-280,-200)
    pop();
  }

  update() {
    // Move the penguin
    this.lx += this.speedx;
    this.ly += this.speedy;

    // Screen wrapping
    if (this.lx > 550) this.lx = -50;       
    if (this.lx < -50) this.lx = 550;       
    if (this.ly > 550) this.ly = -50;      
    if (this.ly < -50) this.ly = 550;      
  }
  acc() {
    if (keyIsDown(87)) { // 'W' key - move up
      this.speedy = random(-10, -5); 
      this.coms = 'BAAAAAAAAAAH'
    } else if (keyIsDown(83)) { // 'S' key - move down
      this.speedy = random(5, 10); 
       this.coms = 'BAAAAAAAAAHH'
    } 
  
    if (keyIsDown(65)) { // 'A' key - move left
      this.speedx = random(-10, -5); 
       this.coms = 'BAAAAAAAAAAAH'
    } else if (keyIsDown(68)) { // 'D' key - move right
      this.speedx = random(5, 10); 
       this.coms = 'BAAAAAAAAAAAAAH'
    } 
  }
  body() {
    noStroke();
    fill(0);
    ellipse(0, 0, 150, 180);
    rect(0, 50, 150, 120, 5);
  }

  belly() {
    fill(255);
    ellipse(15, 10, 120, 150);
    rect(15, 50, 120, 100, 5);
  }

  rightArm() {
    fill(0);
    ellipse(60, 50, 50, 100);
  }

  leftArm() {
    fill(0);
    ellipse(-60, 50, 50, 100);
  }

  eyes() {
    fill(255);
    stroke(0);
    ellipse(10, -10, 40);
    fill(0);
    ellipse(15, -10, 30);
    fill(255);
    ellipse(23, -17, 7);

    fill(255);
    ellipse(60, -10, 40);
    fill(0);
    ellipse(65, -10, 30);
    fill(255);
    ellipse(71, -17, 7);
  }

  eyebrows() {
    fill(0);
    arc(10, -25, 40, 15, PI, 0);
    arc(60, -25, 40, 15, PI, 0);
  }

  beak() {
    fill('orange');
    triangle(35, 25, 75, 10, 35, -5);
  }

  feet() {
    image(foams, 50 + 10, 110, 110, 140);
    image(foams, -30 + 10, 110, 110, 140);
  }

  hat() {
    image(beanie, -1, -90 + 15, 200, 80);
  }
}


class NERD {
  constructor(x, y, scaleX, scaleY, rotation, speedx, speedy, lcoms) {
    this.lx = x;
    this.ly = y;
    this.sx = scaleX;
    this.sy = scaleY;
    this.rot = rotation;
    this.speedx = speedx;
    this.speedy = speedy;
    this.coms = lcoms;
  }

  display() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sx, this.sy);
    
    this.rightArm();
    this.feet();
    this.body();
    this.belly();
    this.leftArm();
    this.eyes();
    this.eyebrows();
    this.beak();
    this.hat();
    this.glasses();
    
    fill(0)
    textSize(80)
    text(this.coms,-280,-200)
    pop();
  }

  update() {
    // Move the penguin
    this.lx += this.speedx;
    this.ly += this.speedy;

    // Screen wrapping
    if (this.lx > 550) this.lx = -50;       
    if (this.lx < -50) this.lx = 550;       
    if (this.ly > 550) this.ly = -50;      
    if (this.ly < -50) this.ly = 550;      
  }
  acc() {
    if (keyIsDown(87)) { // 'W' key - move up
      this.speedy = random(-10, -5); 
      this.coms = 'BAAAAAAAAAAH'
    } else if (keyIsDown(83)) { // 'S' key - move down
      this.speedy = random(5, 10); 
       this.coms = 'BAAAAAAAAAHH'
    } 
  
    if (keyIsDown(65)) { // 'A' key - move left
      this.speedx = random(-10, -5); 
       this.coms = 'BAAAAAAAAAAAH'
    } else if (keyIsDown(68)) { // 'D' key - move right
      this.speedx = random(5, 10); 
       this.coms = 'BAAAAAAAAAAAAAH'
    } 
  }
  body() {
    noStroke();
    fill(0);
    ellipse(0, 0, 150, 180);
    rect(0, 50, 150, 120, 5);
  }

  belly() {
    fill(255);
    ellipse(15, 10, 120, 150);
    rect(15, 50, 120, 100, 5);
  }

  rightArm() {
    fill(0);
    ellipse(60, 50, 50, 100);
  }

  leftArm() {
    fill(0);
    ellipse(-60, 50, 50, 100);
  }

  eyes() {
    fill(255);
    stroke(0);
    ellipse(10, -10, 40);
    fill(0);
    ellipse(15, -10, 30);
    fill(255);
    ellipse(23, -17, 7);

    fill(255);
    ellipse(60, -10, 40);
    fill(0);
    ellipse(65, -10, 30);
    fill(255);
    ellipse(71, -17, 7);
  }

  eyebrows() {
    fill(0);
    arc(10, -25, 40, 15, PI, 0);
    arc(60, -25, 40, 15, PI, 0);
  }

  beak() {
    fill('orange');
    triangle(35, 25, 75, 10, 35, -5);
  }

  feet() {
    image(converse, 50 + 10, 90, 110, 140);
    image(converse, -30 + 10, 90, 110, 140);
  }

  hat() {
    image(cap, -30, -70 + 15, 200, 200);
  }
  glasses(){
    image(glasses,40, -30 + 15, 110, 70)
  }
}

class FAT {
  constructor(x, y, scaleX, scaleY, rotation, speedx, speedy, lcoms) {
    this.lx = x;
    this.ly = y;
    this.sx = scaleX;
    this.sy = scaleY;
    this.rot = rotation;
    this.speedx = speedx;
    this.speedy = speedy;
    this.coms = lcoms;
  }

  display() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sx, this.sy);
    
    this.rightArm();
    this.feet();
    this.body();
    this.belly();
    this.leftArm();
    this.eyes();
    this.eyebrows();
    this.beak();
    this.hat();
    this.doritos();
    
    fill(0)
    textSize(80)
    text(this.coms,-280,-200)
    pop();
  }

  update() {
    // Move the penguin
    this.lx += this.speedx;
    this.ly += this.speedy;

    // Screen wrapping
    if (this.lx > 550) this.lx = -50;       
    if (this.lx < -50) this.lx = 550;       
    if (this.ly > 550) this.ly = -50;      
    if (this.ly < -50) this.ly = 550;      
  }
  acc() {
    if (keyIsDown(87)) { // 'W' key - move up
      this.speedy = random(-3, -1); 
      this.coms = 'I hate cardio mane'
    } else if (keyIsDown(83)) { // 'S' key - move down
      this.speedy = random(1, 3); 
       this.coms = 'I hate cardio mane'
    } 
  
    if (keyIsDown(65)) { // 'A' key - move left
      this.speedx = random(-3, -1); 
       this.coms = 'I hate cardio mane'
    } else if (keyIsDown(68)) { // 'D' key - move right
      this.speedx = random(1, 3); 
       this.coms = 'I hate cardio mane'
    } 
  }
  body() {
    noStroke();
    fill(0);
    ellipse(0, 0, 150, 180);
    rect(0, 50, 150, 120, 5);
  }

  belly() {
    fill(255);
    ellipse(15, 10, 150, 150);
    rect(15, 50, 170, 100, 50);
  }

  rightArm() {
    fill(0);
    ellipse(60, 50, 80, 100);
  }

  leftArm() {
    fill(0);
    ellipse(-60, 50, 60, 100);
  }

  eyes() {
    fill(255);
    stroke(0);
    ellipse(10, -10, 40);
    fill(0);
    ellipse(15, -10, 30);
    fill(255);
    ellipse(23, -17, 7);

    fill(255);
    ellipse(60, -10, 40);
    fill(0);
    ellipse(65, -10, 30);
    fill(255);
    ellipse(71, -17, 7);
  }

  eyebrows() {
    fill(0);
    arc(10, -25, 40, 15, PI, 0);
    arc(60, -25, 40, 15, PI, 0);
  }

  beak() {
    fill('orange');
    triangle(35, 25, 75, 10, 35, -5);
  }

  feet() {
    image(foams, 50 + 10, 110, 110, 140);
    image(foams, -30 + 10, 110, 110, 140);
  }

  hat() {
    image(beanie, -1, -90 + 15, 200, 80);
  }
  doritos(){
    image(doritos, -40, 70, 80, 80)
  }
}

class FAST{
  constructor(x, y, scaleX, scaleY, rotation, speedx, speedy, lcoms) {
    this.lx = x;
    this.ly = y;
    this.sx = scaleX;
    this.sy = scaleY;
    this.rot = rotation;
    this.speedx = speedx;
    this.speedy = speedy;
    this.coms = lcoms;
  }

  display() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sx, this.sy);
    
    this.rightArm();
    this.feet();
    this.body();
    this.belly();
    this.leftArm();
    this.eyes();
    this.eyebrows();
    this.beak();
    this.hat();
    
    fill(0)
    textSize(80)
    text(this.coms,-280,-200)
    pop();
  }

  update() {
    // Move the penguin
    this.lx += this.speedx;
    this.ly += this.speedy;

    // Screen wrapping
    if (this.lx > 550) this.lx = -50;       
    if (this.lx < -50) this.lx = 550;       
    if (this.ly > 550) this.ly = -50;      
    if (this.ly < -50) this.ly = 550; 
  }
  acc() {
    if (keyIsDown(87)) { // 'W' key - move up
      this.speedy = random(-20, -10); 
      this.coms = 'BAAAAAAAAAAH'
    } else if (keyIsDown(83)) { // 'S' key - move down
      this.speedy = random(10, 20); 
       this.coms = 'BAAAAAAAAAHH'
    } 
  
    if (keyIsDown(65)) { // 'A' key - move left
      this.speedx = random(-20, -10); 
       this.coms = 'BAAAAAAAAAAAH'
    } else if (keyIsDown(68)) { // 'D' key - move right
      this.speedx = random(10, 20); 
       this.coms = 'BAAAAAAAAAAAAAH'
    } 
  }
  body() {
    noStroke();
    fill(0);
    ellipse(0, 0, 150, 180);
    rect(0, 50, 150, 120, 5);
  }

  belly() {
    fill(255);
    ellipse(15, 10, 120, 150);
    rect(15, 50, 120, 100, 5);
  }

  rightArm() {
    fill(0);
    ellipse(60, 50, 50, 100);
  }

  leftArm() {
    fill(0);
    ellipse(-60, 50, 50, 100);
  }

  eyes() {
    fill(255);
    stroke(0);
    ellipse(10, -10, 40);
    fill(0);
    ellipse(15, -10, 30);
    fill(255);
    ellipse(23, -17, 7);

    fill(255);
    ellipse(60, -10, 40);
    fill(0);
    ellipse(65, -10, 30);
    fill(255);
    ellipse(71, -17, 7);
  }

  eyebrows() {
    fill(0);
    arc(10, -25, 40, 15, PI, 0);
    arc(60, -25, 40, 15, PI, 0);
  }

  beak() {
    fill('orange');
    triangle(35, 25, 75, 10, 35, -5);
  }

  feet() {
    scale(-1,1); //flip shoes
    image(crocs, 20 + 10, 110, 110, 70);
    image(crocs, -60 + 10, 110, 110, 70);
    scale(-1,1); //flip rest of body back to normal
  }

  hat() {
    image(beanie, -1, -90 + 15, 200, 80);
  }
}

class GOD{
  constructor(x, y, scaleX, scaleY, rotation, speedx, speedy, lcoms) {
    this.lx = x;
    this.ly = y;
    this.sx = scaleX;
    this.sy = scaleY;
    this.rot = rotation;
    this.speedx = speedx;
    this.speedy = speedy;
    this.coms = lcoms;
  }

  display() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sx, this.sy);
    
    // this.wings();
    this.rightArm();
    this.feet();
    this.body();
    this.belly();
    this.leftArm();
    this.eyes();
    this.eyebrows();
    this.beak();
    this.hat();

    fill(0)
    textSize(80)
    text(this.coms,-280,-200)
    pop();
  }

  update() {
    if (this.lx < 120) {
      this.lx += this.speedx;
    }else{



      textSize(20);
      textAlign(LEFT, TOP);
      textWrap(WORD);
      rect(350, 250, 300, 180)
      text('I plead you to stop fonem. With penguins multiplying beyond measure the fish grow scarce and the oceans run dry. Balance is sacred, yet you tip the scales toward ruin.', 360, 165, 300);
   
    }
    
  }

  body() {
    noStroke();
    fill(0);
    ellipse(0, 0, 150, 180);
    rect(0, 50, 150, 120, 5);
  }

  belly() {
    fill(255);
    ellipse(15, 10, 120, 150);
    rect(15, 50, 120, 100, 5);
  }

  rightArm() {
    fill(0);
    ellipse(60, 50, 50, 100);

  }

  leftArm() {
    fill(0);
    ellipse(-60, 50, 50, 100);
  }

  eyes() {
    fill(255);
    stroke(0);
    ellipse(10, -10, 40);
    fill(0);
    ellipse(15, -10, 30);
    fill(255);
    ellipse(23, -17, 7);

    fill(255);
    ellipse(60, -10, 40);
    fill(0);
    ellipse(65, -10, 30);
    fill(255);
    ellipse(71, -17, 7);
  }

  eyebrows() {
    fill(0);
    arc(10, -25, 40, 15, PI, 0);
    arc(60, -25, 40, 15, PI, 0);
  }

  beak() {
    fill('orange');
    triangle(35, 25, 75, 10, 35, -5);
  }

  feet() {
    image(foams, 50 + 10, 110, 110, 140);
    image(foams, -30 + 10, 110, 110, 140);
  }

  hat() {
    image(halo, -1, -90 + 15, 200, 80);
  }


}
function keyPressed() {
  let x = width / 2;
  let y = height / 2;

  if (key === '1') {
    penguins.push(new PENGUIN(x, y, 0.3, 0.3, 0, random(-1, 1), random(-1, 1), 'on fonem grave'));
  } else if (key === '2') {
    penguins.push(new NERD(x, y, 0.3, 0.3, 0, random(-1, 1), random(-1, 1), 'I enjoy mathematics'));
  } else if (key === '3') {
    penguins.push(new FAT(x, y, 0.3, 0.3, 0, random(-1, 1), random(-1, 1), 'Me Hungry'));
  } else if (key === '4') {
    penguins.push(new FAST(x, y, 0.3, 0.3, 0, 5, random(-5,5), 'I AM SPEED'));
  }

  
}


