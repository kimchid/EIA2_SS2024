"use strict";
const canvas = document.createElement('canvas');
canvas.width = 1500;
canvas.height = 700;
document.body.appendChild(canvas);
const crc2 = canvas.getContext('2d');
function himmel() {
    crc2.fillStyle = '#87CEEB';
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}
function wiese() {
    crc2.fillStyle = '#2E8B57';
    crc2.fillRect(0, canvas.height * 0.8, canvas.width, canvas.height * 0.2);
}
function teich() {
    crc2.fillStyle = '#4682B4';
    crc2.fillRect(canvas.width * 0.3, canvas.height * 0.8, canvas.width * 0.4, canvas.height * 0.1);
}
class Ente {
    position;
    velocity;
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
    }
    zeichneEnte(ctx) {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.position.x + 15, this.position.y - 10, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    bewegeEnte() {
        const teichEndX = canvas.width * 0.7;
        if (this.position.x + this.velocity.x < teichEndX) {
            this.position.x += this.velocity.x;
        }
    }
}
function animate() {
    himmel();
    wiese();
    teich();
    for (const ente of enten) {
        ente.bewegeEnte();
        ente.zeichneEnte(crc2);
    }
    requestAnimationFrame(animate);
}
const enten = [];
for (let i = 0; i < 5; i++) {
    const teichStartX = canvas.width * 0.3;
    const teichStartY = canvas.height * 0.8;
    const startX = teichStartX - 30 - i * 60;
    const meineEnte = new Ente({ x: startX, y: teichStartY + 10 }, { x: 2, y: 0 });
    enten.push(meineEnte);
}
animate();
//# sourceMappingURL=Ententeich.js.map