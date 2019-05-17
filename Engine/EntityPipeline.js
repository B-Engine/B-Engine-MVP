import Entity from './Entity'
import IEntityProcessor from './IEntityProcessor'
import Canvas from './Canvas'
import { PhysicsProcessor } from './PhysicsUtilities'

export class EntityPipeline {
    /**
     * @param {Canvas} canvas
     * @param {number} [fpsMax]
     */
    constructor(canvas, fpsMax = 60) {
        /** @type {Entity[]} */
        this.entities = []

        /** @type {Canvas} */
        this.canvas = canvas

        /** @type {IEntityProcessor[]} */
        this.processors = [new PhysicsProcessor()]

        /** @type {boolean} */
        this.running = false

        /** @type {boolean} */
        this.started = false

        /** @type {number} */
        this.timestep = 1000 / fpsMax // calculate number of ms per frame

        /** @type {number} */
        this.delta = 0

        /** @type {number} */
        this.fps = 0

        /** @type {number} */
        this.maxFPS = fpsMax

        /** @type {number} */
        this.lastFrameTimestamp = 0

        /** @type {number} */
        this.currentFPS = 0

        /** @type {number} */
        this.framesThisSecond = 0

        /** @type {number} */
        this.lastFPSUpdate = 0
    }

    /**
     * @private
     * @param {number} delta
     * @returns {void}
     */
    _runProcessors(delta) {
        this.processors.forEach(processor =>
            processor.ProcessEntities(this.entities, delta)
        )
    }

    /**
     * @param {IEntityProcessor} newProcessor
     */
    AddProcessor(newProcessor) {
        this.processors.push(newProcessor)
    }

    /**
     * @param {Entity} newEntity
     */
    AddEntity(newEntity) {
        this.entities.push(newEntity)
    }

    /**
     * @param {number} interp
     */
    _draw(interp) {
        this.canvas.RenderEntities(this.entities, interp)
    }

    /**
     * @param {number} timestamp
     */
    ProcessPipeline(timestamp) {
        // throttle by framerate
        if (timestamp < this.lastFrameTimestamp + this.timestep) {
            requestAnimationFrame(timestamp => this.ProcessPipeline(timestamp))
            return
        }
        this.delta += timestamp - this.lastFrameTimestamp

        if (timestamp > this.lastFPSUpdate + 1000) {
            this.currentFPS =
                0.25 * this.framesThisSecond + 0.75 * this.currentFPS

            this.lastFPSUpdate = timestamp
            this.framesThisSecond = 0
        }
        this.framesThisSecond++

        this.lastFrameTimestamp = timestamp

        let numUpdateSteps = 0
        while (this.delta >= this.timestep) {
            this._runProcessors(this.timestep)
            this.delta -= this.timestep
            if (numUpdateSteps + 1 >= 240) {
                this.delta = 0
                break
            }
        }
        this._draw(this.delta / this.timestep)
        requestAnimationFrame(timestamp => this.ProcessPipeline(timestamp))
    }

    BeginProcessing() {
        if (this.started) return
        this.started = true
        requestAnimationFrame(timestamp => {
            this._draw(1)
            this.running = true
            this.lastFrameTimestamp = timestamp
            this.lastFPSUpdate = timestamp
            requestAnimationFrame(timestamp => this.ProcessPipeline(timestamp))
        })
    }
}

/** @type {EntityPipeline} */
let PIPELINE = undefined

/**
 * @param {number} fpsMax
 * @returns {EntityPipeline}
 */
export function GetEntityPipeline(fpsMax = 60) {
    if (PIPELINE != undefined) {
        return PIPELINE
    }
    let canvas = new Canvas()
    PIPELINE = new EntityPipeline(canvas, fpsMax)
    return PIPELINE
}

export default GetEntityPipeline
