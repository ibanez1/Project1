function Ball(game,r,x,y) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 2;
  this.r = r;
  this.gravity = 0.25;
  //this.img = new Image();
  //this.img.src = "img/demon.png";
}

Ball.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "red";
  this.game.ctx.strokeStyle = "black";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.stroke();
  this.game.ctx.closePath();
};

/*Ball.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    
  )
  
}*/

Ball.prototype.moveAlone = function() {
  this.vy += this.gravity;
  this.y += this.vy;

  if (this.y + this.r > this.game.canvas.height || this.y - this.r < 0) {
    this.vy *= -1;
  }

  this.x += this.vx;

  if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0) {
    this.vx *= -1;
  }
};
