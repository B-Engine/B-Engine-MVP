export default class Canvas {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    let canvas = document.createElement("canvas");
    canvas.height = width || 360;
    canvas.width = height || 640;
    document.body.appendChild(canvas);

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
   * @param {{ forEach: (arg0: (entity: any) => void) => void; }} entitiesList
   */
  RenderEntities(entitiesList) {
    this._clearScreen();
    entitiesList.forEach(
      /**
       * @param {{ image: CanvasImageSource; position: { x: number; y: number; }; }} entity
       */
      entity =>
        this._context.drawImage(
          entity.image,
          entity.position.x,
          entity.position.y
        )
    );
  }
}
