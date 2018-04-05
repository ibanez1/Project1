
window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


    ctx.font = "60px 'Press Start 2P'";
    ctx.strokeStyle = "Black";
    ctx.fillText("-START-(Press P)", canvas.width * 0.15, canvas.height * 0.55);

  document.onkeydown = function(event) {

    if(event.keyCode === 80) {
    
    var game = new Game("canvas");
    game.start();
    }
  };
};