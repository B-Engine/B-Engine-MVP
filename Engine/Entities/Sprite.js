import Entity from "../Entity";
import ComponentImage from "Engine/Components/ComponentImage";
import ComponentPosition from "Engine/Components/ComponentPosition";

export default class Sprite {
  constructor(image, position) {
    let sprite = new Entity();
    sprite.add(new ComponentImage(image));
    sprite.add(new ComponentPosition(position));
  }
}