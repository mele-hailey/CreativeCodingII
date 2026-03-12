class  Collectstars{
   constructor() {
    this.r = 20;
    this.x = random(10,width);
    this.y = 140;  
  }
  
  display() {
    image(Bluestar, this.x, this.y, this.r, this.r);
    image(Pinkstar, this.x, this.y, this.r, this.r);
    image(Redstar, this.x, this.y, this.r, this.r);
    image(Whitestar, this.x, this.y, this.r, this.r);
    image(Yellowstar, this.x, this.y, this.r, this.r);
    
  }
}