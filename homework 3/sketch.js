let particles = [];

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 50; i++) {
        particles.push(new Particle(random(width), random(height)));
      }
}

function draw() {
  background(mouseX,125,mouseY);
  
   fill(mouseX,165,mouseY);
  square(100,100,1000);
  
  fill(mouseX,275,mouseY);
  text("Half-light", 20, 40);
  
  fill(mouseX,275,mouseY);
  text("click + drag here!", 20, 70);
  
  fill(mouseX, 200, mouseY);
  square(200,200,1000);
  
  fill(mouseX,225,mouseY);
  square(300,300,1000);
  
   fill(mouseX,275,mouseY);
  square(400,400,1000);
  
  fill(mouseX,125,mouseY);
  rect(705,705,20,700);
  
  fill(mouseX,125,mouseY);
  text("Hailey Mele", 840, 990);
  textSize(30);
  
    fill(mouseX,125,mouseY,127);
  stroke(127, 63, 120);
  translate(715,715);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 80, 320);
    rotate(PI/5);
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
      
      if (mouseIsPressed) {
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle(mouseX, mouseY));
        }
      }
    }

    class Particle {
      constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(1, 3));
        this.acc = createVector(0, 0);
        this.life = 255;
        this.maxLife = 255;
        this.size = random(5, 15);
      }
      
      applyForce(force) {
        this.acc.add(force);
      }
      
      update() {
        this.applyForce(p5.Vector.random2D().mult(0.1));
        
        let mouse = createVector(mouseX, mouseY);
        let diff = p5.Vector.sub(this.pos, mouse);
        let distance = diff.mag();
        if (distance < 50) {
          diff.normalize();
          diff.mult(0.5);
          this.applyForce(diff);
        }
        
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        this.life -= 2;
      }
      
      display() {
        let alpha = map(this.life, 0, this.maxLife, 0, 255);
        fill(255, 0, 100, alpha);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size);
      }
      
      isDead() {
        return this.life <= 0;
      }
}