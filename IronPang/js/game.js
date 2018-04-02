function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background(this);
  //this.audio = new Audio (this);
  this.player = new Player(this);

 this.framesCounter = 0;
  

};


Game.prototype.start = function() {
  this.intervalId = setInterval(
    function(){
      this.clear();
      this.draw();
      this.moveAll();
      if (this.framesCounter++ > 89) this.framesCounter = 0;

    }.bind(this),
    200
  );
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();

};

Game.prototype.moveAll = function() {
  //this.player.move();
};