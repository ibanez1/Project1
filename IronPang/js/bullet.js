function Bullet(game) {
  this.game = game;

  this.x = this.game.player.x;
  this.y = this.game.player.y;
  this.vy = 0;
  this.g = 0.25;

  
  this.r = 5;

}

