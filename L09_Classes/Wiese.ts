export class Wiese {
    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {}

    zeichneWiese(): void {
        this.ctx.fillStyle = '#2E8B57';
        this.ctx.fillRect(0, this.canvas.height * 0.8, this.canvas.width, this.canvas.height * 0.2);
    }
}
