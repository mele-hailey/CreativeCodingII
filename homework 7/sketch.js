let stars = [];
let numImages = 6;
let randomIndex;

let frames = [];
let totalFrames = 4;
let frameIndex = 0;
let speed = 8;

let frames2 = [];
let totalFrames2 = 6;
let frameIndex2 = 0;
let speed2 = 8;

let frames3 = [];
let totalFrames3 = 8;
let frameIndex3 = 0;
let speed3 = 8;

var x = 10;
var y = 150;

let boundary = 40;

var timerValue = 60;
var startButton;

function preload (){
  for (let i = 0; i < numImages; i++){
    let path = 'stars/' + i + '.png';
    stars.push(loadImage(path));    
  }
  
  for (let i = 0; i < totalFrames; i++){
    frames[i] = loadImage('idle/' + i + '.png')
  }
  
  for (let i = 0; i < totalFrames2; i++){
    frames2[i] = loadImage('move/' + i + '.png')
  }
  
  for (let i = 0; i < totalFrames3; i++){
    frames3[i] = loadImage('jump/' + i + '.png')
  }
}

function setup() {
  createCanvas(1000, 200);
  
  textAlign(CENTER);
  setInterval(timeIt,1000);

  randomIndex = floor(random(numImages));
  
}

function draw() {
  background(150);
  
  image(stars[randomIndex],(0, width - 50), 170, 30, 30);
  
  if (keyIsPressed && key == "d"){
        image(frames2[frameIndex2], x+=5, y, 50, 50);
  
  if(frameCount % speed === 0){
    frameIndex2++;
  }
  
  if (frameIndex2 >= frames2.length){
    frameIndex2 = 0;
  }
  }
  
   if (keyIsPressed && key == "a"){
        image(frames2[frameIndex2], x-=5, y, 50, 50);
  
  if(frameCount % speed2 === 0){
    frameIndex2++;
  }
  
  if (frameIndex2 >= frames2.length){
    frameIndex2 = 0;
  }
  }

      //hold down w for jump animation
  if (keyIsPressed && key == 'w'){
        image(frames3[frameIndex3], x, y, 50, 50);
  
  if(frameCount % speed3 === 0){
    frameIndex3++;
  }
  
  if (frameIndex3 >= frames3.length){
    frameIndex3 = 0;
  }
  }
  
  if (!keyIsPressed){
     image(frames[frameIndex], x, y, 50, 50);
  
  if(frameCount % speed === 0){
    frameIndex++;
  }
  
  if (frameIndex >= frames.length){
    frameIndex = 0;
  }
  }
  
   if (x < boundary) {
    x = boundary
  } else if (x > width - boundary) {
    x = width - boundary;
  }
  
  if (timerValue <= 60){
    fill (0,0,0);
    text(timerValue + ' SECONDS', width/2, height/2);
  }
  
   if (timerValue == 0){
    fill (0,0,0);
    text('GAME OVER', width/2, height/2 +15);
  }
  
}

function timeIt(){
  if (timerValue > 0){
    timerValue--;
  }
}