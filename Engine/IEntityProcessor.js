import Entity from "./Entity";

export default class IEntityProcessor {
  constructor() {}
  /**
   * @interface
   * @param {Entity[]} entities
   * @param {number} delta
   * @returns {void}
   */
  ProcessEntities(entities, delta) {}
}
