function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.audio = new Audio("sounds/01.mp3");
  this.player = new Player(this);
  this.balls = [new Ball(this,40,this.canvas.width*0.5,40)];
  this.framesCounter = 0;
}

Game.prototype.start = function() {
  this.audio.play();
  this.intervalId = setInterval(
    function() {
      this.clear();
      this.draw();
      this.moveAll();
      this.checkCollision(this.balls, this.player);
      this.checkBulletCollision(this.player, this.balls);
      this.clearBullets();
    }.bind(this),
    16
  );
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.player.draw();
  this.balls.forEach(function(e) {
    e.draw();
  });
  this.player.bullets.forEach(function(e) {
    e.draw();
  });
};

Game.prototype.moveAll = function() {
  this.balls.forEach(function(e) {
    e.moveAlone();
  });
  this.player.bullets.forEach(function(e) {
    e.move();
  });
  this.player.move();
};

Game.prototype.checkCollision = function(balls, player) {
  for (var i = 0; i < balls.length; i++) {
    if (
      player.x < balls[i].x + balls[i].r &&
      player.x + player.w > balls[i].x &&
      player.y < balls[i].y + balls[i].r &&
      player.y + player.h > balls[i].y
    ) {

      console.log("COLLISION");
    }
  }
};

Game.prototype.checkBulletCollision = function(player, balls) {
  for (var i = 0; i < player.bullets.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      if (
        player.bullets[i].x < balls[j].x + balls[j].r &&
        player.bullets[i].x + player.bullets[i].w > balls[j].x &&
        player.bullets[i].y < balls[j].y + balls[j].r &&
        player.bullets[i].y + player.bullets[i].h > balls[j].y
      ) {
        player.bullets.splice([i], 1);
        console.log("Bullet Collision");
        var oldBall = {
          x : balls[j].x,
          y : balls[j].y,
          r : balls[j].r
        }
        balls.splice([j], 1);

        
        var smallBall1 = new Ball(this,20,oldBall.x +41 ,oldBall.y);
        var smallBall2 = new Ball(this,20,oldBall.x -41,oldBall.y);

        //balls.splice([j], 1);
        balls.push(smallBall1, smallBall2);

        // if(this.balls.length > 3){
        //   clearInterval(this.intervalId)
        // }
        
      }
    }
  }
};

Game.prototype.clearBullets = function() {
  this.player.bullets = this.player.bullets.filter(
    function(e) {
      return e.y > 0;
    }.bind(this)
  );
};

