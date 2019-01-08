import Vector2 from "../Vector2";

export default class Entity {
  constructor(image, position) {
    if (!(position instanceof Vector2)) {
      throw new Error(position + " is not a valid Vector2 position");
    }
    if (!(image instanceof Image)) {
      throw new Error(image + " is not a valid Entity Image");
    }
    this.image = image;
    this.position = position;
  }
}
