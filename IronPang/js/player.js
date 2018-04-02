function Player(game) {
  this.game = game;

  this.x = this.game.canvas.width * 0.5;
  this.y0 = 500;
  this.y = 560;
  this.w = 85;
  this.h = 145;

  this.vy = 0;
  this.g = 0.4;

  this.img = new Image();
  this.img.src = "img/metal-slug copia.png";
  this.img.frames = 12;
  this.img.frameIndex = 0;
  //this.bullet = [];
  
  
  
}


Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    //drawImage(image1, sx1, sy1, sWidth1, sHeight1, dx, dy, dWidth, dHeight);
    this.img, //imagen
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  if (this.game.framesCounter % 1 === 0) {
    this.animateImg();
  }
  

};


Player.prototype.animateImg = function() {
  if (this.img.frameIndex >= 11) {
    this.img.frameIndex = 1;
  } else {
    this.img.frameIndex++;
  }
};