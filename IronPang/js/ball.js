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

  this.game.ctx.fillStyle = "red";
  this.game.ctx.strokeStyle = "black";
  this.game.ctx.beginPath();
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

Ball.prototype.collidesWithPlayer = function(ball, player){
  
      if (
        player.x < ball.x + ball.r &&
        player.x + player.w > ball.x &&
        player.y < ball.y + ball.r &&
        player.y + player.h > ball.y
      ) {
        
        console.log("Collision. GAME OVER!");
      }

    }  

Ball.prototype.collidesWithBullets = function(ball, bullets){
    
  for (var i = 0; i < bullets.length; i++) {
    if (
      bullets[i].x < ball.x + ball.r &&
      bullets[i].x + bullets[i].w > ball.x &&
      bullets[i].y < ball.y + ball.r &&
      bullets[i].y + bullets[i].h > ball.y
    ) {
        bullets.splice([i], 1);
        console.log("Bullet Collision");
        var oldBall = {
          x : ball.x,
          y : ball.y,
          r : ball.r
        }
        this.game.balls.splice([i], 1);
        console.log(this.game.balls)
        
        
        var smallBall1 = new Ball(this.game,20,oldBall.x +41, oldBall.y);
        var smallBall2 = new Ball(this.game,20,oldBall.x -41, oldBall.y);
        this.game.balls.push(smallBall1, smallBall2);
        return true;
      }
    }   
  };

       

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
