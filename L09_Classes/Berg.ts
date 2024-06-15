export class Berg {
    constructor(private position: { x: number, y: number }, private size: { width: number, height: number }) {}

    zeichneBerg(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#A9A9A9';
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.size.width / 2, this.position.y - this.size.height);
        ctx.lineTo(this.position.x + this.size.width, this.position.y);
        ctx.closePath();
        ctx.fill();
    }
}
