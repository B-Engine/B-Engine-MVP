import Vector2 from "./Vector2";

function ComponentPosition(position) {
  this.id = "Position";
  this.position = position || Vector2.zero();
  return this;
}

function ComponentVelocity(velocity) {
  this.id = "Velocity";
  this.velocity = velocity || Vector2.zero();
  return this;
}

function ComponentImage(image) {
  this.id = "Image";
  this.image = image || new Image();
  return this;
}

