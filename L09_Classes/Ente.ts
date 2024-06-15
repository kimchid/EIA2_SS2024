import { BeweglichesObjekt } from './BeweglichesObjekt';

export class Ente extends BeweglichesObjekt {
    private tauchzeit: number = 0;
    private isSwimming: boolean;

    constructor(position: { x: number; y: number }, velocity: { x: number; y: number }, isSwimming: boolean) {
        super(position, velocity);
        this.isSwimming = isSwimming;
    }

    zeichne(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#FFD700';
        if (this.isSwimming) {
            if (this.tauchzeit > 0) {
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI, true);
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.position.x + 15, this.position.y - 10, 10, 0, 2 * Math.PI);
                ctx.fill();
            }
        } else {
            ctx.beginPath();
            ctx.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x + 15, this.position.y - 10, 10, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    bewege(canvas: HTMLCanvasElement): void {
        if (this.isSwimming) {
            this.position.x += this.velocity.x;
            if (Math.random() < 0.01) {
                this.tauchzeit = 50;
            }
            if (this.tauchzeit > 0) {
                this.tauchzeit--;
            }
            if (this.position.x > canvas.width * 0.7) {
                this.position.x = canvas.width * 0.3;
            }
        } else {
            this.position.x += this.velocity.x;
            if (this.position.x > canvas.width) {
                this.position.x = 0;
            }
        }
    }

    interagiereMitMaus(mouseX: number, mouseY: number): void {
        const distance = Math.sqrt((mouseX - this.position.x) ** 2 + (mouseY - this.position.y) ** 2);
        if (distance < 30) {
            this.velocity.x *= -1;
        }
    }

    interagiereMitTastatur(key: string): void {
        switch (key) {
            case 'ArrowLeft':
                this.velocity.x -= 1;
                break;
            case 'ArrowRight':
                this.velocity.x += 1;
                break;
            case 'ArrowUp':
                this.velocity.y -= 1;
                break;
            case 'ArrowDown':
                this.velocity.y += 1;
                break;
        }
    }
}
