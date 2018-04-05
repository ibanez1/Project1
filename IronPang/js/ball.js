function Ball(game,r,x,y) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 2;
  this.r = r;
  this.gravity = 0.35;
  //this.img = new Image();
  //this.img.src = "img/demon.png";
}

//-----------BALL DRAW---------------


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


//-----------BALL COLLIDESWITHPLAYER---------------



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


//-----------BALL COLLIDESWITHBULLETS---------------


Ball.prototype.collidesWithBullets = function(ball, bullets, p){
    
  for (var i = 0; i < bullets.length; i++) {
    if (
      bullets[i].x < ball.x + ball.r &&
      bullets[i].x + bullets[i].w > ball.x &&
      bullets[i].y < ball.y + ball.r &&
      bullets[i].y + bullets[i].h > ball.y
    ) {
        bullets.splice([i], 1);
        console.log("Bullet Collision");
        this.game.score.points += 25;
        var oldBall = {
          x : ball.x,
          y : ball.y,
          r : ball.r
        }
        this.game.balls.splice([p], 1);
        this.newBall();
        console.log(this.game.balls)
        
        if(ball.r > 26){
        var smallBall1 = new Ball(this.game,25,oldBall.x +60, oldBall.y - 40);
        var smallBall2 = new Ball(this.game,25,oldBall.x -60, oldBall.y - 40);
        this.game.balls.push(smallBall1, smallBall2);
        return true;
        }
      }
    }   
  };


//-----------BALL MOVEALONE---------------
       

Ball.prototype.moveAlone = function() {

  if (this.y <= 500) {
    this.vy += this.gravity;
    this.y += this.vy;
    this.x += this.vx;
    
    if (this.y + this.r > this.game.canvas.height || this.y - this.r < 0) {
      this.vy *= -1;  
    }
    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0) {
    this.vx *= -1;
    }
  }

  else if (this.y > 500) {
   
    this.y += this.vy;
    this.x += this.vx;

    if(this.y + this.r + this.vy > this.game.canvas.height) {
      this.vy *= -1;
    }
  
    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0) {
    this.vx *= -1;
    }
      
    }  
};

//------------NEW BALL---------------

Ball.prototype.newBall = function() {

  if (this.game.score.points % 75 === 0) {
    this.game.balls.push(new Ball(this.game,55,750,70))
  }
}
