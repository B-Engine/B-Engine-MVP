import Entity from "./Entity";

/**
 * @param {Entity} obj1
 * @param {Entity} obj2
 */
export const checkBounds = (obj1, obj2) =>
  obj1.position.x < obj2.bounds.position.x + obj2.bounds.size.x &&
  obj1.position.x + obj1.bounds.size.x > obj2.position.x &&
  obj1.position.y < obj2.position.y + obj2.bounds.size.y &&
  obj1.position.y + obj1.bounds.size.y > obj2.bounds.size.y;
