class Runsprite{
   constructor(sheet, frameWidth, frameHeight, frameCount, speed, x, y) {
    this.sheet = sheet;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameCount = frameCount;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.frames = [];

   
    for (let i = 0; i < this.frameCount; i++) {
      
      let img = this.sheet.get(i * this.frameWidth, 0, this.frameWidth, this.frameHeight);
      this.frames.push(img);
    }
  }

  hits(badstar){
    return collideRectRect(this.x, this.y, this.r, this.r,badstar.x,badstar.y, badstar.r,badstar.r);
  }
  
  update() {
    
    this.currentFrame += this.speed;
   
    if (this.currentFrame >= this.frameCount) {
      this.currentFrame = 0;
    }
  }

  display() {
   
    image(this.frames[floor(this.currentFrame)], this.x, this.y);
  }
  
  
  
}