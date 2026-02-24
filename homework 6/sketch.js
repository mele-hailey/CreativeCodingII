let frames = [];
let totalFrames = 4;
let frameIndex = 0;
let speed = 16;

let frames2 = [];
let totalFrames2 = 6;
let frameIndex2 = 0;
let speed2 = 36;

let isActionActive = false;

function preload (){
  for (let i = 0; i < totalFrames; i++){
    frames[i] = loadImage('idle/' + i + '.png')
  }
  
  for (let i = 0; i < totalFrames2; i++){
    frames2[i] = loadImage('walk/' + i + '.png')
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (isActionActive){}
  
  if (keyReleased){
     
    image(frames[frameIndex], 10, 350, 50, 50);
  
  if(frameCount % speed === 0){
    frameIndex++;
  }
  
  if (frameIndex >= frames.length){
    frameIndex = 0;
  }
  }
  
   if (keyIsDown(RIGHT_ARROW)){
     
     image(frames2[frameIndex2], 10, 350, 50, 50);
  
  if(frameCount % speed === 0){
    frameIndex2++;
  }
  
  if (frameIndex2 >= frames2.length){
    frameIndex2 = 0;
  }
   }
}

function keyPressed(){
  if(keyCode === ''){
    isActionActive = true;
  }
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW){
    isActionActive = false;
  }
}