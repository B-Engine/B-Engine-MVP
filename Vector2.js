export default class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  static down() {
    return new Vector2(0, -1);
  }

  static left() {
    return new Vector2(-1, 0);
  }

  static one() {
    return new Vector2(1, 1);
  }

  static right() {
    return new Vector2(1, 0);
  }

  static up() {
    return new Vector2(0, 1);
  }

  static zero() {
    return new Vector2(0, 0);
  }

  magnitude() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }

  normalize() {
    let vector = Vector2.zero();
    let length = this.magnitude();
    if (length != 0) {
      vector.x = this.x / length;
      vector.y = this.y / length;
    }
    return vector
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

  toString() {
    return this.x + ", " + this.y;
  }

}
