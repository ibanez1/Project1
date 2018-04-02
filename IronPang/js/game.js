function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  //this.audio = new Audio (this);
  this.player = new Player(this);
  this.ball = new Ball(this);

  this.framesCounter = 0;
}

Game.prototype.start = function() {
  this.intervalId = setInterval(
    function() {
      this.clear();
      this.draw();
      this.moveAll();
      this.checkCollision(this.player, this.ball);
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
  this.ball.draw();
  this.player.bullets.forEach(function(e) {
    e.draw();
  });
};

Game.prototype.moveAll = function() {
  this.ball.moveAlone();
  this.player.bullets.forEach(function(e) {
    e.move();
  });
};

Game.prototype.checkCollision = function (player,obstacle) {
  if (player.x < obstacle.x + obstacle.r && player.x + player.w > obstacle.x &&
    player.y < obstacle.y + obstacle.r && player.y + player.h > obstacle.y) {
    console.log("CHOCASTE")
 }
}

Game.prototype.clearBullets = function() {
  debugger
  this.player.bullets = this.player.bullets.filter(
    function(e) {
      return e.y > 0;
    }.bind(this)
  );
 
};


