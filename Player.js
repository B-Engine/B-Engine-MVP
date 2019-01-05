import Vector2 from "./Vector2";

export default class Player {
  constructor(image, x, y) {
    this.image = image;
    this.position = new Vector2(x, y);
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
  }

  update(canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
