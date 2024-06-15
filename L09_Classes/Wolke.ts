export class Wolke {
    constructor(private position: { x: number, y: number }, private size: { width: number, height: number }) {}

    zeichneWolke(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, this.size.width, this.size.height, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
