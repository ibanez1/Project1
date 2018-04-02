function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  
  //this.audio = new Audio (this);
  this.player = new Player(this);
  this.ball = new Ball(this);

 this.framesCounter = 0;
  

};


Game.prototype.start = function() {
  this.intervalId = setInterval(
    function(){
      this.clear();
      this.draw();
      this.moveAll();

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

};

Game.prototype.moveAll = function() {
  this.ball.moveAlone();
  
};