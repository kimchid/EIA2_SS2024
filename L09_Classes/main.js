"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Himmel_1 = require("./Himmel");
const Wolke_1 = require("./Wolke");
const Sonne_1 = require("./Sonne");
const Berg_1 = require("./Berg");
const Baum_1 = require("./Baum");
const Wiese_1 = require("./Wiese");
const Teich_1 = require("./Teich");
const Ente_1 = require("./Ente");
const Insekt_1 = require("./Insekt");
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
const backgroundCanvas = document.createElement('canvas');
backgroundCanvas.width = canvas.width;
backgroundCanvas.height = canvas.height;
const backgroundCtx = backgroundCanvas.getContext('2d');
const himmel = new Himmel_1.Himmel(backgroundCanvas, backgroundCtx);
const wolken = [
    new Wolke_1.Wolke({ x: 100, y: 100 }, { width: 60, height: 30 }),
    new Wolke_1.Wolke({ x: 300, y: 80 }, { width: 80, height: 40 }),
];
const sonne = new Sonne_1.Sonne({ x: 700, y: 100 }, 50);
const berge = [
    new Berg_1.Berg({ x: 100, y: 500 }, { width: 200, height: 150 }),
    new Berg_1.Berg({ x: 300, y: 500 }, { width: 250, height: 200 }),
];
const bäume = [
    new Baum_1.Baum({ x: 50, y: 450 }, { width: 50, height: 150 }),
    new Baum_1.Baum({ x: 200, y: 450 }, { width: 60, height: 180 }),
];
const wiese = new Wiese_1.Wiese(backgroundCanvas, backgroundCtx);
const teich = new Teich_1.Teich({ x: backgroundCanvas.width * 0.3, y: backgroundCanvas.height * 0.8 }, { width: backgroundCanvas.width * 0.4, height: backgroundCanvas.height * 0.1 });
himmel.zeichneHimmel();
wolken.forEach(wolke => wolke.zeichneWolke(backgroundCtx));
sonne.zeichneSonne(backgroundCtx);
berge.forEach(berg => berg.zeichneBerg(backgroundCtx));
bäume.forEach(baum => baum.zeichneBaum(backgroundCtx));
wiese.zeichneWiese();
teich.zeichneTeich(backgroundCtx);
const beweglicheObjekte = [];
for (let i = 0; i < 10; i++) {
    const isSwimming = Math.random() < 0.5;
    const yPosition = isSwimming ? backgroundCanvas.height * 0.85 : backgroundCanvas.height * 0.8;
    const ente = new Ente_1.Ente({ x: Math.random() * backgroundCanvas.width, y: yPosition }, { x: 2, y: 0 }, isSwimming);
    beweglicheObjekte.push(ente);
}
for (let i = 0; i < 10; i++) {
    const insekt = new Insekt_1.Insekt({ x: Math.random() * backgroundCanvas.width, y: Math.random() * backgroundCanvas.height }, { x: 1, y: 1 });
    beweglicheObjekte.push(insekt);
}
canvas.addEventListener('mousemove', handleMouseMove);
window.addEventListener('keydown', handleKeyDown);
function handleMouseMove(event) {
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    beweglicheObjekte.forEach(objekt => {
        objekt.interagiereMitMaus(mouseX, mouseY);
    });
}
function handleKeyDown(event) {
    beweglicheObjekte.forEach(objekt => {
        objekt.interagiereMitTastatur(event.key);
    });
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundCanvas, 0, 0);
    beweglicheObjekte.forEach(objekt => {
        objekt.bewege(canvas);
        objekt.zeichne(ctx);
    });
    requestAnimationFrame(animate);
}
animate();
//# sourceMappingURL=main.js.map