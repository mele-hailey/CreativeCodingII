function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255,125,150);
   fill(255,165,150);
  square(100,100,1000);
  fill(255, 200, 150);
  square(200,200,1000);
  fill(255,225,150);
  square(300,300,1000);
   fill(255,275,150);
  square(400,400,1000);
  fill(255,125,150);
  rect(705,705,20,700);
  fill(255,125,150,127);
  stroke(127, 63, 120);
  translate(715,715);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 80, 320);
    rotate(PI/5);
  }
}