let head;

let myFont;

let pattern1;
let pattern2;
let pattern3;
let pattern4;
let pattern5;

let boxes = [];
let spheres = [];
let cones = [];
let ellipsoids = [];
let cylinders = [];

let mousex = 0;
let mousey = 0;
let mousez = 0;

function preload(){
  
  head = loadModel('assets/head.obj', true);
  
  myFont = loadFont('assets/kablammo.ttf');
  
  pattern1 = loadImage('assets/pattern1.jpg');
  pattern2 = loadImage('assets/pattern2.png');
  pattern3 = loadImage('assets/pattern3.jpg');
  pattern4 = loadImage('assets/pattern4.jpg');
  pattern5 = loadImage('assets/pattern5.jpg');
  
}

function setup(){
  createCanvas(500, 500, WEBGL);
  
  for (let i = 0; i < 5; i++){
    boxes.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10,30),
    })
  }
  
  for (let i = 0; i < 5; i++){
    spheres.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10,30),
    })
  }
  
  for (let i = 0; i < 5; i++){
    cones.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10,30),
    })
  }
  
  for (let i = 0; i < 5; i++){
    ellipsoids.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10,30),
    })
  }
  
  for (let i = 0; i < 5; i++){
    cylinders.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10,30),
    })
  }
  
}

function draw() {
  background('lightblue');
  
  push();
  scale(1);
  rotateY(frameCount * 0.01);
  rotateX(1800);
  normalMaterial();
  model(head);
  pop();
  
  for (let b of boxes){
   push();
   noStroke();
   normalMaterial();
   texture(pattern2);
   rotateY(frameCount * 0.02)
   rotateX(frameCount * 0.04);
   translate(mousex, mousey, mousez);
   box(b.size);
   pop();
 }
  
 for (let s of spheres){
   push();
   noStroke();
   normalMaterial();
   texture(pattern1);
   rotateY(frameCount * 0.02);
   rotateX(frameCount * 0.02);
   translate(mousex, mousey, mousez);
   sphere(s.size);
   pop();
 }
  
  
  for (let c of cones){
   push();
   noStroke();
   normalMaterial();
   texture(pattern3);
   rotateY(frameCount * 0.01)
   rotateX(frameCount * 0.03);
   translate(mousex, mousey, mousez);
   cone(c.size);
   pop();
 }
  
  for (let t of cylinders){
   push();
   noStroke();
   normalMaterial();
   texture(pattern4);
   rotateY(frameCount * 0.05)
   rotateX(frameCount * 0.02);
   translate(mousex, mousey, mousez);
   cylinder(t.size);
   pop();
 }
  
  for (let e of ellipsoids){
   push();
   noStroke();
   normalMaterial();
   texture(pattern5);
   rotateY(frameCount * 0.06)
   rotateX(frameCount * 0.05);
   translate(mousex, mousey, mousez);
   ellipsoid(e.size);
   pop();
 }
  
  push();
  translate(-250,-250,0);
  fill('blue');
  textSize(25);
  textFont(myFont);
  text('abstract', 20, 30);
  pop();
  
  push();
  translate(-250,-220,0);
  fill('blue');
  textSize(20);
  textFont(myFont);
  text('By Hailey Mele', 20, 30);
  pop();
  
}

function mousePressed(){
  mousex = random(-350, 300);
  mousey = random(-200, 200);
  mousez = random(-100, 100);
}