export default class Vector2 {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @returns {Vector2}
   */
  static down() {
    return new Vector2(0, -1);
  }
  /**
   * @returns {Vector2}
   */
  static left() {
    return new Vector2(-1, 0);
  }
  /**
   * @returns {Vector2}
   */
  static one() {
    return new Vector2(1, 1);
  }
  /**
   * @returns {Vector2}
   */
  static right() {
    return new Vector2(1, 0);
  }
  /**
   * @returns {Vector2}
   */
  static up() {
    return new Vector2(0, 1);
  }
  /**
   * @returns {Vector2}
   */
  static zero() {
    return new Vector2(0, 0);
  }
  /**
   * @returns {number}
   */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * @returns {Vector2}
   */
  normalize() {
    let vector = Vector2.zero();
    let length = this.magnitude();
    if (length != 0) {
      vector.x = this.x / length;
      vector.y = this.y / length;
    }
    return vector;
  }
  /**
   * @param {Vector2} other
   * @returns {Vector2}
   */
  add(other) {
    if (other instanceof Vector2) {
      return new Vector2(this.x + other.x, this.y + other.y);
    } else {
      throw new Error(other + " is not a valid Vector2");
    }
  }
  /**
   *
   * @param {Vector2} other
   * @returns {Vector2}
   */
  sub(other) {
    if (other instanceof Vector2) {
      return new Vector2(this.x - other.x, this.y - other.y);
    } else {
      throw new Error(other + " is not a valid Vector2");
    }
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.x + ", " + this.y;
  }
}
