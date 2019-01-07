import { LoadImage } from "./LoadAssets.js";
import { SetupControls } from "./Controls.js";
import Player from "./Player.js";

var canvas = document.createElement("canvas");
canvas.height = 360;
canvas.width = 640;
document.body.appendChild(canvas);
SetupControls();

(async () => {
  let playerImage = await LoadImage("assets/Player.png");

  var player1 = new Player(playerImage, 10, 10);
  //player1.update();
})();
