"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wolke = void 0;
class Wolke {
    position;
    size;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    zeichneWolke(ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, this.size.width, this.size.height, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}
exports.Wolke = Wolke;
//# sourceMappingURL=Wolke.js.map