export class Himmel {
    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {}

    zeichneHimmel(): void {
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
