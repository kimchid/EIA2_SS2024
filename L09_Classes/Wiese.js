"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wiese = void 0;
class Wiese {
    canvas;
    ctx;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    zeichneWiese() {
        this.ctx.fillStyle = '#2E8B57';
        this.ctx.fillRect(0, this.canvas.height * 0.8, this.canvas.width, this.canvas.height * 0.2);
    }
}
exports.Wiese = Wiese;
//# sourceMappingURL=Wiese.js.map