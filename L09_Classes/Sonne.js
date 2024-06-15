"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sonne = void 0;
class Sonne {
    position;
    radius;
    constructor(position, radius) {
        this.position = position;
        this.radius = radius;
    }
    zeichneSonne(ctx) {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
exports.Sonne = Sonne;
//# sourceMappingURL=Sonne.js.map