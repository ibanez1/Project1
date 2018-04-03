function Bullet(game) {
  this.game = game;

  this.x = this.game.player.x;
  this.y = 350;
  
  this.vy = 20;
  this.img = new Image();
  this.img.src = "img/mine-bullet.png"; 
  this.w = 50;
  this.h = 20;

}


Bullet.prototype.draw = function() {
  
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  )
};


Bullet.prototype.move = function() {
  this.y -= this.vy;
  

};