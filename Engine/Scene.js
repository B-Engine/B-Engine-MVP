export default class Scene {
  constructor(name) {
    this.entities = {};
    this.name = name;
  }

  addEntity(entity) {
    this.entities[entity] = entity;
  }

  removeEntity(entity) {
    this.entities[entity] = null;
  }
  
}