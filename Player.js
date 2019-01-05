import Vector2 from "./Vector2";
import Entity from "./Entity";
import { AddEventCallback, CONTROLS } from "./Controls";

export default class Player extends Entity {
  constructor(image, x, y) {
    super(image, new Vector2(x, y));
    AddEventCallback(CONTROLS.LEFT, () => {
      player1.position = player1.position.add(new Vector2(-5, 0));
    });
    AddEventCallback(CONTROLS.RIGHT, () => {
      player1.position = player1.position.add(new Vector2(5, 0));
    });
    AddEventCallback(CONTROLS.UP, () => {
      player1.position = player1.position.add(new Vector2(0, -5));
    });
    AddEventCallback(CONTROLS.DOWN, () => {
      player1.position = player1.position.add(new Vector2(0, 5));
    });
  }
}
