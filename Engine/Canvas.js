import Entity from "./Entity";
import Vector2 from "./Vector2";

export default class Canvas {
  constructor() {
    let canvas = document.createElement("canvas");
    document.body.style.display = "flex";
    let div = document.createElement("div");
    div.style.border = "25px solid black";
    div.style.margin = "auto";
    div.style.height = "calc(100vh - 50px)";
    div.style.width = "calc(100vw - 50px)";
    div.style.flex = "1";
    document.body.appendChild(div);
    div.appendChild(canvas);

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    this._canvas = canvas;
    this.width = this._canvas.width;
    this.height = this._canvas.height;
    this._context = canvas.getContext("2d");
  }

  _clearScreen() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * @param {HTMLImageElement} image
   */
  SetBackground(image) {
    this.background = image;
  }

  /**
   * @param {{ forEach: (entitiesList: (entity: Entity) => void) => void; }} entitiesList
   * @param {number} interp
   * @returns {void}
   */
  RenderEntities(entitiesList, interp) {
    this._clearScreen();
    if (this.background) {
      this._context.drawImage(this.background, 0, 0, this.width, this.height);
    }
    //(boxLastPos + (boxPos - boxLastPos) * interp)
    entitiesList.forEach(entity =>
      this._context.drawImage(
        entity.image,
        entity.lastPosition.x +
          (entity.position.x - entity.lastPosition.x) * interp,
        entity.lastPosition.y +
          (entity.position.y - entity.lastPosition.y) * interp
      )
    );
  }
}
