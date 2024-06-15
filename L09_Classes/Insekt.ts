import { BeweglichesObjekt } from './BeweglichesObjekt';

export class Insekt extends BeweglichesObjekt {
    constructor(position: { x: number; y: number }, velocity: { x: number; y: number }) {
        super(position, velocity);
    }

    zeichne(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, 10, 5, 0, 0, 2 * Math.PI);
        ctx.fill();
    }

    bewege(canvas: HTMLCanvasElement): void {
        this.position.x += this.velocity.x + (Math.random() - 0.5) * 2;
        this.position.y += this.velocity.y + (Math.random() - 0.5) * 2;

        if (this.position.x < 0 || this.position.x > canvas.width) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > canvas.height) {
            this.velocity.y *= -1;
        }
    }
}
