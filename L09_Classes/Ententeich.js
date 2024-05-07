"use strict";
const canvas = document.createElement('canvas');
canvas.width = 1500;
canvas.height = 700;
document.body.appendChild(canvas);
const crc2 = canvas.getContext('2d');
function background() {
    crc2.fillStyle = '#87CEEB';
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}
function gras() {
    crc2.fillStyle = '#2E8B57';
    crc2.fillRect(0, canvas.height * 0.8, canvas.width, canvas.height * 0.5);
}
function water() {
    crc2.fillStyle = '#4682B4';
    crc2.fillRect(0, canvas.height * 0.8, canvas.width, canvas.height * 0.1);
}
background();
gras();
water();
//# sourceMappingURL=Ententeich.js.map