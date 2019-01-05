export default class Vector2 {
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
