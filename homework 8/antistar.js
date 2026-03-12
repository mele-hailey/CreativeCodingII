class Antistar{
   constructor() {
    this.r = 20;
    this.x = random(10,width);
    this.y = 140;  
  }
  
  display() {
    image(Greenstar, this.x, this.y, this.r, this.r);
    
  }
}