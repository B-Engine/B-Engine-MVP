import Entity from "./Entity";
import BoundingBox from "./BoundingBox";
import IEntityProcessor from "./IEntityProcessor";

/**
 * @param {BoundingBox} obj1
 * @param {BoundingBox} obj2
 * @returns {boolean}
 */
export function CheckBounds(obj1, obj2) {
  return (
    obj1.position.x < obj2.position.x + obj2.size.x &&
    obj1.position.x + obj1.size.x > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.size.y &&
    obj1.position.y + obj1.size.y > obj2.size.y
  );
}

/**
 * @extends {IEntityProcessor}
 */
export class PhysicsProcessor extends IEntityProcessor {
  constructor() {
    super();
  }

  /**
   * @param {Entity[]} entities
   * @param {number} delta
   */
  ProcessEntities(entities, delta) {
    entities.forEach(entity => {
      if (!entity.usesVelocity) return;
      if (entity.velocity.x == 0 && entity.velocity.y == 0) return;
      entity.Position = entity.Position.add(entity.velocity.multiply(delta));
    });
  }
}
