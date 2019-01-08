import Vector2 from "Engine/Vector2";
import Entity from "Engine/Entity";
import ControlBindings from "Engine/ControlBindings";
import BoundingBox from "Engine/BoundingBox";

export default class Player extends Entity {
  /**
   * @param {HTMLImageElement} image
   * @param {Vector2} position
   */
  constructor(image, position) {
    super(
      image,
      position,
      new BoundingBox(position, new Vector2(image.width, image.height))
    );

    let that = this;
    ControlBindings.AddControlEvent("LEFT", () => {
      that.velocity = that.velocity.add(new Vector2(-1, 0));
    });
    ControlBindings.AddControlEvent("RIGHT", () => {
      that.velocity = that.velocity.add(new Vector2(1, 0));
    });
    ControlBindings.AddControlEvent("UP", () => {
      that.velocity = that.velocity.add(new Vector2(0, -1));
    });
    ControlBindings.AddControlEvent("DOWN", () => {
      that.velocity = that.velocity.add(new Vector2(0, 1));
    });
  }
}
