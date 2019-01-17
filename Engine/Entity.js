export default class Entity {
  constructor() {
    this.components = {};
  }

  add(component) {
    this.components[component.id] = component;
  }

  remove(componentName) {
    this.components[componentName] = null;
  }

  print() {
    console.log(JSON.stringify(this, null, 4));
    return this;
  }
}