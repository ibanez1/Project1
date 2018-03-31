var game;
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    game = new Game("canvas");

    game.start();
  };
};