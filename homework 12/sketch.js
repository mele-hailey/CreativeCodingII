let myFont;

function preload(){
  myFont = loadFont('assets/kablammo.ttf');
}

function setup(){
  createCanvas(500, 500, WEBGL);
}

function draw(){
  background('lightpink');
  
  push();
  normalMaterial();
  translate(-90,80,0);
  rotateY(frameCount * 0.02);
  stroke('hotpink')
  fill('white');
  cylinder(10,200,10);
  pop();
  
  push();
  normalMaterial();
  translate(-90,-60,0);
  rotateY(frameCount * 0.02);
  stroke('hotpink');
  sphere();
  pop();
  
  push();
  normalMaterial();
  translate(150,-100,0);
  rotateX(frameCount * 0.02);
  stroke('lightblue');
  fill('purple');
  sphere();
  
  normalMaterial();
  translate(0,-70,0);
  stroke('lightblue');
  fill('purple');
  cone();
  
  normalMaterial();
  translate(0,140,0);
  rotateX(1800);
  stroke('lightblue');
  fill('purple');
  cone();
  pop();
  
  push();
  translate(-250,-250,0);
  fill('blue');
  textSize(25);
  textFont(myFont);
  text('Sweet Shop', 20, 30);
  pop();
  
  push();
  translate(-250,-220,0);
  fill('blue');
  textSize(20);
  textFont(myFont);
  text('By Hailey Mele', 20, 30);
  pop();
}