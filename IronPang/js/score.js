function Score(game){
  this.game = game;

  this.points = 0;

}

//-------------SCORE DRAW----------------

Score.prototype.draw = function(){
  this.game.ctx.font = "50px sans serif";
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillText('Score:'+Math.floor(this.points), 500, 50);
  this.game.ctx.textBaseline = "top";
};