function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background(this);
  //this.player = new Player(this);






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
  this.background.draw();
  //this.player.draw();

};

Game.prototype.moveAll = function() {
  //this.player.move();
};