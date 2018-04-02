function Bullet(game) {
  this.game = game;

  this.x = this.game.player.x;
  this.y = this.game.player.y;
  this.vy = 10;

}


Bullet.prototype.draw = function() {
  
  this.game.ctx.fillRect(this.x, this.y, 10, 10);
  this.game.ctx.strokeStyle = "blue";
};


Bullet.prototype.move = function() {
  this.y -= this.vy;
  

};