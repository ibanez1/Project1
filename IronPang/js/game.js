function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.audio = new Audio("sounds/01.mp3");
  this.player = new Player(this);
  this.balls = [new Ball(this,50,this.canvas.width*0.5,60)];
 
  this.framesCounter = 0;
}

Game.prototype.start = function() {
  this.audio.play();
  this.intervalId = setInterval(
    function() {
      this.clear();
      this.draw();
      this.moveAll();
      this.checkCollision();
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

Game.prototype.checkCollision = function() {
  
  for (var i=0; i<this.balls.length; i++) {
    this.balls[i].collidesWithPlayer(this.balls[i], this.player)
  }

  for (var i=0; i<this.balls.length; i++) {
    this.balls[i].collidesWithBullets(this.balls[i], this.player.bullets)

  } 
}

Game.prototype.clearBullets = function() {
  this.player.bullets = this.player.bullets.filter(
    function(e) {
      return e.y > 0;
    }.bind(this)
  );
};

