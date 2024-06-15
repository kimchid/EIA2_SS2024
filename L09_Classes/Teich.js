"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teich = void 0;
class Teich {
    position;
    size;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    zeichneTeich(ctx) {
        ctx.fillStyle = '#4682B4';
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
exports.Teich = Teich;
//# sourceMappingURL=Teich.js.map