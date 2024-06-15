"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Baum = void 0;
class Baum {
    position;
    size;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    zeichneBaum(ctx) {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(this.position.x, this.position.y, this.size.width / 4, this.size.height);
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.arc(this.position.x + this.size.width / 8, this.position.y, this.size.width / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
}
exports.Baum = Baum;
//# sourceMappingURL=Baum.js.map