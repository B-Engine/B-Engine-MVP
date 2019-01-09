import Vector2 from "Engine/Vector2";
import Entity from "Engine/Entity";
import ControlBindings from "Engine/ControlBindings";
import BoundingBox from "Engine/BoundingBox";
import Projectile from "./Projectile";

export default class Player extends Entity {
  /**
   * @param {HTMLImageElement} image
   * @param {Vector2} position
   * @param {Vector2} size
   */
  constructor(image, position, size) {
    super(
      image,
      position,
      new BoundingBox(position, size)
    );

    this.bullet;
    this.pipeline;

    let that = this;
    ControlBindings.AddControlEvent("LEFT", () => {
      that.velocity = that.velocity.add(new Vector2(-0.1, 0));
    });
    ControlBindings.AddControlEvent("RIGHT", () => {
      that.velocity = that.velocity.add(new Vector2(0.1, 0));
    });
    //ControlBindings.AddControlEvent("UP", () => {
    //  that.velocity = that.velocity.add(new Vector2(0, -0.001));
    //});
    //ControlBindings.AddControlEvent("DOWN", () => {
    //  that.velocity = that.velocity.add(new Vector2(0, 0.001));
    //});
    ControlBindings.AddControlEvent("FIRE", () => {
      let bullet = new Projectile(this.bullet, this.position.add(new Vector2(8,32)), new Vector2(16,16));
      bullet.usesVelocity = true;
      bullet.velocity = new Vector2(0,-1);
      this.pipeline.AddEntity(bullet);
      let bullet2 = new Projectile(this.bullet, this.position.add(new Vector2(64-24,32)), new Vector2(16,16));
      bullet2.usesVelocity = true;
      bullet2.velocity = new Vector2(0,-1);
      this.pipeline.AddEntity(bullet2);
    });
  }

  setAmmo(image) {
    this.bullet = image;
  }

  setPipeline(p) {
    this.pipeline = p;
  }
}
