//sprites
let idlespritesheet;
let runspritesheet;
let monsterIdle;
let monsterRun;

//character placement at start
var x = 10;
var y = 125;

//boundary
let boundary = 20;

//timer
var timerValue = 60;
var startButton;

//food
let Greenstar;
let Bluestar;
let Pinkstar;
let Redstar;
let Whitestar;
let Yellowstar;

let badstar = [];
let goodstars = [];

//audio
var bgmusic;
var losehealth;
var collectstar;

//text font
var myFont;

//health + stars collected
var HP;
var starsgathered;


function preload (){
  
  myFont = loadFont('fonts/'+ 'kablammo.ttf');
  
  Greenstar = loadImage('stars/' + 'Green.png');
  Bluestar = loadImage('stars/' + 'Blue.png');
  Pinkstar = loadImage('stars/' + 'Pink.png');
  Redstar = loadImage('stars/' + 'Red.png');
  Whitestar = loadImage('stars/' + 'White.png');
  Yellowstar = loadImage('stars/' + 'Yellow.png');
  
  idlespritesheet = loadImage('idle/' + 'idlespritesheet.png');
  runspritesheet = loadImage('run/' + 'runspritesheet.png');
  
  bgmusic = loadSound('audio/'+ 'bgmusic.wav')
  losehealth = loadSound('audio/'+ 'losehealth.wav')
  collectstar = loadSound('audio/'+ 'collectstar.wav')
  
}

function setup() {
  createCanvas(1000, 200);
  
  console.log('Collect as many stars are you can before the timer runs out! But avoid the Green ones,    those are toxic!');
  
  textAlign(CENTER);
  setInterval(timeIt,1000);
  
  monsterIdle = new Idlesprite(idlespritesheet, 32, 32, 4, 0.2, 100, 100);
  monsterRun = new Runsprite(runspritesheet, 32, 32, 6, 0.2, 100, 100);
  
  starsgathered = 0;
  HP = 10;
  
  rectMode(CENTER);

}


function draw() {
  background(66, 48, 77);
  
   if (random(1) < 0.01) {
    badstar.push(new Antistar());
  }
  
   if (random(1) < 0.01) {
    goodstars.push(new Collectstars());
  }
  
  if (keyIsPressed && key == "d"){
    monsterRun.update();
    monsterRun.display();
    monsterRun.x = x+=5;
    monsterRun.y = y;
  }
  
   if (keyIsPressed && key == "a"){
    monsterRun.update();
    monsterRun.display();
    monsterRun.x = x-=5;
    monsterRun.y = y;
  }
  
  if (!keyIsPressed){
    monsterIdle.update();
    monsterIdle.display();
    monsterIdle.x = x;
    monsterIdle.y = y;
  }
  
   if (x < boundary) {
    x = boundary
  } else if (x > width - boundary) {
    x = width - boundary;
  }
  
  if (timerValue <= 60){
    fill ('white');
    textFont(myFont);
    textSize(40);
    text(timerValue + ' SECONDS', 375, 50);
  }
  
   if (timerValue == 0){
    fill ('lightpink');
     textFont(myFont);
     textSize(40);
    text('GAME OVER', 375, 85);
  }

   for (let b of badstar) {
    b.display();
    if (monsterRun.hits(b)) {
      b.hide();
      losehealth.play();
      losehealth.setVolume(1);
      HP--;
    }
     
     for (let s of goodstars) {
    s.display();
    if (monsterRun.hits(s)) {
      s.hide();
      collectstar.play();
      collectstar.setVolume(1);
      starsgathered++;
    }
   }
  }
  
  textFont (myFont);
  fill('lightgreen');
  textSize(30);
  text("HP: " + HP, 100, 25);
  
  
  fill('lightpink');
  textSize(30);
  text('Stars Gathered: ' + starsgathered, 745, 25);
  
}
  
//bg music
function mousePressed() {
  bgmusic.loop();
  bgmusic.setVolume(0.2);
}

  
//timer function
function timeIt(){
  if (timerValue > 0){
    timerValue--;
  }
}