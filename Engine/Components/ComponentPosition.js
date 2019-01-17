import Vector2 from "Engine/Vector2.js"

export default class ComponentPosition {
  constructor(position) {
    this.id = "Postion";
    this.position = position || Vector2.zero();
  }
}