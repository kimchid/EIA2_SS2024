export class Sonne {
    constructor(private position: { x: number, y: number }, private radius: number) {}

    zeichneSonne(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
