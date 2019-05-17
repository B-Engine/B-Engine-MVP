import Entity from './Entity'
import Vector2 from './Vector2'

export default class Canvas {
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    public width: number
    public height: number
    public background?: HTMLImageElement

    public constructor() {
        let canvas = document.createElement('canvas')
        document.body.style.display = 'flex'
        let div = document.createElement('div')
        div.style.border = '25px solid black'
        div.style.margin = 'auto'
        //div.style.height = "calc(100vh - 50px)";
        //div.style.width = "calc(100vw - 50px)";
        div.style.flex = '1'
        document.body.appendChild(div)
        div.appendChild(canvas)

        canvas.width = 540 //"100%";
        canvas.height = 960 //"100%";
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        this.canvas = canvas
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    }

    private clearScreen(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    public SetBackground(image: HTMLImageElement): void {
        this.background = image
    }

    public RenderEntities(
        entitiesList: {
            forEach: (entitiesList: (entity: Entity) => void) => void
        },
        interp: number
    ): void {
        this._clearScreen()
        if (this.background) {
            this._context.drawImage(
                this.background,
                0,
                0,
                this.width,
                this.height
            )
        }
        //(boxLastPos + (boxPos - boxLastPos) * interp)
        entitiesList.forEach(entity =>
            this._context.drawImage(
                entity.image,
                entity.lastPosition.x +
                    (entity.position.x - entity.lastPosition.x) * interp,
                entity.lastPosition.y +
                    (entity.position.y - entity.lastPosition.y) * interp
            )
        )
    }
}
