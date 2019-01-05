import { LoadImage } from "./LoadAssets.js";
import { SetupControls } from "./Controls.js";

var canvas = document.createElement("canvas");
canvas.height = 360;
canvas.width = 640;
document.body.appendChild(canvas);
var context = canvas.getContext("2d");
SetupControls();

(async () => {
  let playerImage = await LoadImage("assets/Player.png");

  class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  class Player {
    constructor(image, x, y) {
      this.image = image;
      this.position = new Vector2(x, y);
    }
    update() {
      if (true) {
      } else {
      }
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }

  var player1 = new Player(playerImage, 10, 10);
  player1.update();
})();
