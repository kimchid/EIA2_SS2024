"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berg = void 0;
class Berg {
    position;
    size;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    zeichneBerg(ctx) {
        ctx.fillStyle = '#A9A9A9';
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.size.width / 2, this.position.y - this.size.height);
        ctx.lineTo(this.position.x + this.size.width, this.position.y);
        ctx.closePath();
        ctx.fill();
    }
}
exports.Berg = Berg;
//# sourceMappingURL=Berg.js.map