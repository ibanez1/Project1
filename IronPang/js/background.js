function Background(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "";
  
  

  this.x = 0;
  this.y = 0;

};


Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.game.canvas.width,
    this.game.canvas.height
  );

    
    if (this.game.framesCounter % 1 === 0){
    var i = this.game.framesCounter;
    this.img.src = "img/" + i + ".png";
    console.log("img/" + i + ".png");
    }
    
  

}




  
  
 