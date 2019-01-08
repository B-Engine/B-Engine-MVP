import Vector2 from "./Vector2";
import BoundingBox from "./BoundingBox";

export default class Entity {
  /** @type {HTMLImageElement} */
  image;
  /** @type {Vector2} */
  position;
  /** @type {BoundingBox} */
  bounds;
  /**
   * @param {HTMLImageElement} image
   * @param {Vector2} position
   * @param {BoundingBox} [bounds];
   */
  constructor(
    image,
    position,
    bounds = new BoundingBox(position, Vector2.zero())
  ) {
    if (!(position instanceof Vector2)) {
      throw new Error(position + " is not a valid Vector2");
    }
    if (!(image instanceof Image) && typeof image == "string") {
      throw new Error(image + " is not a valid Image");
    }
    if (!(bounds instanceof BoundingBox)) {
      throw new Error(position + " is not a valid BoundingBox");
    }
    this.image = image;
    this.position = position;
    this.bounds = bounds;
  }
}
