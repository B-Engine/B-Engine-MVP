import Vector2 from 'Engine/Vector2'
import Entity from 'Engine/Entity'
import BoundingBox from 'Engine/BoundingBox'

export default class Background extends Entity {
    /**
     * @param {HTMLImageElement} image
     * @param {Vector2} position
     * @param {Vector2} size
     */
    constructor(image, position, size) {
        super(image, position, new BoundingBox(position, size))
    }
}
