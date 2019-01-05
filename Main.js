import { LoadImage } from "./LoadAssets.js";
import { SetupControls, AddEventCallback, CONTROLS } from "./Controls.js";

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

    add(other) {
      if (other instanceof Vector2) {
        return new Vector2(this.x + other.x, this.y + other.y);
      } else {
        throw new Error(other + " is not a valid Vector2");
      }
    }

    sub(other) {
      if (other instanceof Vector2) {
        return new Vector2(this.x - other.x, this.y - other.y);
      } else {
        throw new Error(other + " is not a valid Vector2");
      }
    }
  }

  class Player {
    constructor(image, x, y) {
      this.image = image;
      this.position = new Vector2(x, y);
    }
    update() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }

  var player1 = new Player(playerImage, 10, 10);
  player1.update();
  AddEventCallback(CONTROLS.LEFT, () => {
    player1.position = player1.position.add(new Vector2(-5, 0));
    player1.update();
  });
  AddEventCallback(CONTROLS.RIGHT, () => {
    player1.position = player1.position.add(new Vector2(5, 0));
    player1.update();
  });
  AddEventCallback(CONTROLS.UP, () => {
    player1.position = player1.position.add(new Vector2(0, -5));
    player1.update();
  });
  AddEventCallback(CONTROLS.DOWN, () => {
    player1.position = player1.position.add(new Vector2(0, 5));
    player1.update();
  });
})();
