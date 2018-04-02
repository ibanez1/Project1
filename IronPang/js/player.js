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

  this.speed = 10;

  this.bullets = [];
  
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
    this.h,

    
  );
};



Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
      if (this.img.frameIndex < 11) {
        this.img.frameIndex++;
      } else this.img.frameIndex = 0;       

      if (event.keyCode === KEY_LEFT) {
        this.x -= this.speed;
      }
      if (event.keyCode === KEY_RIGHT) {
        this.x += this.speed;
      }  
      if(event.keyCode === SPACE){
        this.shoot();    
      }
  }.bind(this);
};

Player.prototype.shoot = function() {
  this.bullets.push(new Bullet(this.game));
};


var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var SPACE = 32;
