export class Teich {
    constructor(private position: { x: number, y: number }, private size: { width: number, height: number }) {}

    zeichneTeich(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#4682B4';
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
