import Vector2 from './Vector2'
import BoundingBox from './BoundingBox'

export default class Entity {
    /**
     * @param {HTMLImageElement} image
     * @param {Vector2} position
     * @param {BoundingBox} [bounds];
     */
    constructor(
        image,
        position,
        bounds = new BoundingBox(position, Vector2.zero())
    ) {
        if (!(position instanceof Vector2)) {
            throw new Error(position + ' is not a valid Vector2')
        }
        if (!(image instanceof Image) && typeof image == 'string') {
            throw new Error(image + ' is not a valid Image')
        }
        if (!(bounds instanceof BoundingBox)) {
            throw new Error(position + ' is not a valid BoundingBox')
        }
        /** @type {HTMLImageElement} */
        this.image = image
        /** @type {Vector2} */
        this.position = position
        /** @type {Vector2} */
        this.lastPosition = position
        /** @type {BoundingBox} */
        this.bounds = bounds
        /** @type {boolean} */
        this.usesVelocity = false
        /** @type {Vector2} */
        this.velocity = Vector2.zero()
    }

    /**
     * @param {Vector2} newPosition
     */
    set Position(newPosition) {
        this.lastPosition = this.position
        this.position = newPosition
        this.bounds = new BoundingBox(this.position, this.bounds.size)
    }

    /**
     * @returns {Vector2}
     */
    get Position() {
        return this.position
    }
}
