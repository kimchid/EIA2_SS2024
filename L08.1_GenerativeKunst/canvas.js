"use strict";
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const crc2 = canvas.getContext('2d');
crc2.fillStyle = 'pink';
crc2.fillRect(0, 0, canvas.width, canvas.height);
for (let i = 0; i < 20; i++) {
    crc2.beginPath();
    crc2.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    crc2.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    crc2.strokeStyle = 'gradient';
    crc2.lineWidth = Math.random() * 5;
    crc2.stroke();
    let gradient = crc2.createLinearGradient(100, 100, 100, 100);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(.5, "grey");
    gradient.addColorStop(1, "black");
    crc2.restore();
}
//# sourceMappingURL=canvas.js.map