function Player(game) {
  this.game = game;

  this.x = this.game.canvas.width * 0.5;
  this.y = 560;
  this.w = 85;
  this.h = 145;

  

  this.img = new Image();
  this.img.src = "img/metal-slug-player.png";
  this.img.frames = 12;
  this.img.frameIndex = 0;
  //this.bullet = [];
  
  this.setListeners();
  
}


Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    //drawImage(image1, sx1, sy1, sWidth1, sHeight1, dx, dy, dWidth, dHeight);
    this.img, //image
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


Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === KEY_LEFT) {
      this.x -= 10;
    }

    if (event.keyCode === KEY_RIGHT) {
      this.x +=10;
    }
  }.bind(this);
};


Player.prototype.animateImg = function() {
  if (this.img.frameIndex >= 12) {
    this.img.frameIndex = 0;
  } else {
    this.img.frameIndex++;
  }
};


Player.prototype.move =function(){

};

var KEY_LEFT = 37;
var KEY_RIGHT = 39;