
window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


    ctx.font = "100px sans serif";
    ctx.fillStyle = "Black";
    ctx.fillText("To Start Press 'P'", 150, 250);

  document.onkeydown = function(event) {

    if(event.keyCode === 80) {
    
    var game = new Game("canvas");
    game.start();
    }
  };
};