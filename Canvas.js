export default class Canvas {
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

  SetBackground(image) {
    this.background = image;
  }

  RenderEntities(entitiesList) {
    this._clearScreen();
    entitiesList.forEach(entity =>
      this._context.drawImage(
        entity.image,
        entity.position.x,
        entity.position.y
      )
    );
  }
}
