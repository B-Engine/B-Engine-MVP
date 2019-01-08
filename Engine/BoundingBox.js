import Vector2 from "./Vector2";

export default class BoundingBox {
  /**
   * @param {Vector2} position
   * @param {Vector2} size
   */
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }
}
