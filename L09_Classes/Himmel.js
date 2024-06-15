"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Himmel = void 0;
class Himmel {
    canvas;
    ctx;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    zeichneHimmel() {
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
exports.Himmel = Himmel;
//# sourceMappingURL=Himmel.js.map