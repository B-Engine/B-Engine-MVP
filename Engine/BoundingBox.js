import Vector2 from "./Vector2";
import { CheckBounds } from "./PhysicsUtilities";

export default class BoundingBox {
  /**
   * @param {Vector2} position
   * @param {Vector2} size
   */
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }

  /**
   *
   * @param {BoundingBox} other
   * @returns {boolean}
   */
  CollidesWith(other) {
    return CheckBounds(this, other);
  }
}
