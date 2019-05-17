import Vector2 from './Vector2'
import { CheckBounds } from './PhysicsUtilities'

export default class BoundingBox {
    private position: Vector2
    private size: Vector2

    public constructor(position: Vector2, size: Vector2) {
        this.position = position
        this.size = size
    }

    public CollidesWith(other: BoundingBox): boolean {
        return CheckBounds(this, other)
    }
}
