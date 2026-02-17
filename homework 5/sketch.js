let images = [];
let numImages = 5;


let frames = [];
let totalFrames = 20;
let frameIndex = 0;
let speed = 5;


function preload (){
  for (let i = 0; i < numImages; i++){
    let path = 'images/' + i + '.png';
    images.push(loadImage(path));    
  }

  for (let i = 0; i < totalFrames; i++){
    frames[i] = loadImage('sprites/' + i + '.png')
  }
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255, 182, 193);
   for (let i = 0; i < images.length; i++) {
    image(images[i], i * 200, 0, 200, 200);
   }
  
  for (let i = 0; i < images.length; i++) {
    image(images[i], i * 200, 800, 200, 200);
   }
  
  image(frames[frameIndex], 300, 250);
  
  if(frameCount % speed === 0){
    frameIndex++;
  }
  
  if (frameIndex >= frames.length){
    frameIndex = 0;
  }
}