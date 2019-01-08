import Vector2 from "./Vector2";
import Entity from "./Engine/Entity";
import {
  AddEventCallback as AddControlEvent,
  CONTROLS
} from "./Engine/Controls";

export default class Player extends Entity {
  constructor(image, x, y) {
    super(image, new Vector2(x, y));
    AddControlEvent(CONTROLS.LEFT, () => {
      this.position = this.position.add(new Vector2(-5, 0));
    });
    AddControlEvent(CONTROLS.RIGHT, () => {
      this.position = this.position.add(new Vector2(5, 0));
    });
    AddControlEvent(CONTROLS.UP, () => {
      this.position = this.position.add(new Vector2(0, -5));
    });
    AddControlEvent(CONTROLS.DOWN, () => {
      this.position = this.position.add(new Vector2(0, 5));
    });
  }
}
