export class Baum {
    constructor(private position: { x: number, y: number }, private size: { width: number, height: number }) {}

    zeichneBaum(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(this.position.x, this.position.y, this.size.width / 4, this.size.height);

        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.arc(this.position.x + this.size.width / 8, this.position.y, this.size.width / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
}
