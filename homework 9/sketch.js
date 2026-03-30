let monster;
let monsterSprite
let star;
let asteroid;
let ufos;
let blood;

let starImg;
let asteroidImg;
let ufoImg;

let score;

var myFont;


function preload(){
  
  myFont = loadFont('assets/kablammo.ttf');
  
  monsterSprite = loadAni(imageSequence('assets/monster/sprite', 6));
  
  starImg = loadImage("assets/star.png");
  
  asteroidImg = loadImage("assets/asteroid.png");
  
  ufoImg = loadImage("assets/ufo.png");
  
}

function setup(){
  createCanvas(800,200);
  
  monster = new Sprite();
  monster.addAni(monsterSprite);
  monster.scale = 1;
  monster.w = 15;
  monster.h = 15;
  monster.rotationLock = true;
  monster.debug = true;
  monster.health = 5;
  
  star = new Group();
  star.image = starImg;
  star.scale = 0.05;
  star.x = () => random(width);
  star.y = () => random(height);
  star.diameter = starImg.width * 0.5;
  star.amount = 10;
  
  monster.collides(star, starHit);
  
  asteroid = new Group();
  asteroid.image = asteroidImg;
  asteroid.scale = 0.04;
  asteroid.x = () => random(width);
  asteroid.y = () => random(height);
  asteroid.diameter = asteroidImg.width * 0.5;
  asteroid.amount = 10;
  
  monster.collides(asteroid, asteroidHit);
  
  ufos = new Group();
  ufos.image = ufoImg;
  ufos.scale = 0.05;
  ufos.x = () => random(width);
  ufos.y = () => random(height);
  ufos.diameter = ufoImg.width * 0.8;
  ufos.amount = 5;
  ufos.health = 2;
  
  monster.collides(ufos, ufoHit);
  
  score = 0;
  
  blood = new Group ();
  blood.diameter = 4;
  blood.x = () => monster.x;
  blood.y = () => monster.y;
  blood.vel.x = () => random(-5, 5);
  blood.vel.y = () => random(-5, 5);
  blood.life = 30;
  blood.fill = 'pink';
  
textAlign(CENTER);
  
}

function draw(){
   background(66, 48, 77);
  
  if (kb.pressing('left')) monster.x -=5;
  if (kb.pressing('right')) monster.x +=5;
  if (kb.pressing('up')) monster.y -=5;
  if (kb.pressing('down')) monster.y +=5;
  
  
  fill('lightpink');
  textSize(30);
  text('Stars Gathered: ' + score, 650, 25);
  
  
   textFont (myFont);
  fill('lightgreen');
  textSize(30);
  text("HP: " + monster.health, 50, 25);
  
  
   if (monster.health == 0){
    fill ('lightpink');
     textFont(myFont);
     textSize(40);
    text('GAME OVER', 375, 85);
  }
  
  if (ufos.amount == 0){
    fill ('lightpink');
    textFont(myFont);
    textSize(40);
    text('YOU WIN', 375, 85);
  }
  
  if (monster.collides(ufos, ufoHit)) {
    blood.amount = 50;
  }
}


function imageSequence(prefix, numberOfFrames, ext=".png"){
  let sequence = [];
  for (let i = 0; i < numberOfFrames; i++) {
    sequence[i] = prefix + i + ext;
  }
  return sequence;
}


function starHit(monster, star) {
  score++;
  monster.health++;
  star.remove();
}


function asteroidHit(monster,asteroid){
}


function ufoHit(monster, ufo) {
  monster.health--;
  ufos.health--;
  if (ufos.health == 0) {
  ufos.remove();
  }
}