"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insekt = void 0;
const BeweglichesObjekt_1 = require("./BeweglichesObjekt");
class Insekt extends BeweglichesObjekt_1.BeweglichesObjekt {
    constructor(position, velocity) {
        super(position, velocity);
    }
    zeichne(ctx) {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, 10, 5, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    bewege(canvas) {
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
exports.Insekt = Insekt;
//# sourceMappingURL=Insekt.js.map