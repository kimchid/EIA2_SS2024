import { Himmel } from './Himmel';
import { Wolke } from './Wolke';
import { Sonne } from './Sonne';
import { Berg } from './Berg';
import { Baum } from './Baum';
import { Wiese } from './Wiese';
import { Teich } from './Teich';
import { Ente } from './Ente';
import { Insekt } from './Insekt';
import { BeweglichesObjekt } from './BeweglichesObjekt';

const canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const backgroundCanvas = document.createElement('canvas');
backgroundCanvas.width = canvas.width;
backgroundCanvas.height = canvas.height;
const backgroundCtx = backgroundCanvas.getContext('2d') as CanvasRenderingContext2D;

const himmel = new Himmel(backgroundCanvas, backgroundCtx);
const wolken: Wolke[] = [
    new Wolke({ x: 100, y: 100 }, { width: 60, height: 30 }),
    new Wolke({ x: 300, y: 80 }, { width: 80, height: 40 }),
];
const sonne = new Sonne({ x: 700, y: 100 }, 50);
const berge: Berg[] = [
    new Berg({ x: 100, y: 500 }, { width: 200, height: 150 }),
    new Berg({ x: 300, y: 500 }, { width: 250, height: 200 }),
];
const bäume: Baum[] = [
    new Baum({ x: 50, y: 450 }, { width: 50, height: 150 }),
    new Baum({ x: 200, y: 450 }, { width: 60, height: 180 }),
];
const wiese = new Wiese(backgroundCanvas, backgroundCtx);
const teich = new Teich({ x: backgroundCanvas.width * 0.3, y: backgroundCanvas.height * 0.8 }, { width: backgroundCanvas.width * 0.4, height: backgroundCanvas.height * 0.1 });

himmel.zeichneHimmel();
wolken.forEach(wolke => wolke.zeichneWolke(backgroundCtx));
sonne.zeichneSonne(backgroundCtx);
berge.forEach(berg => berg.zeichneBerg(backgroundCtx));
bäume.forEach(baum => baum.zeichneBaum(backgroundCtx));
wiese.zeichneWiese();
teich.zeichneTeich(backgroundCtx);

const beweglicheObjekte: BeweglichesObjekt[] = [];
for (let i = 0; i < 10; i++) {
    const isSwimming = Math.random() < 0.5;
    const yPosition = isSwimming ? backgroundCanvas.height * 0.85 : backgroundCanvas.height * 0.8;
    const ente = new Ente({ x: Math.random() * backgroundCanvas.width, y: yPosition }, { x: 2, y: 0 }, isSwimming);
    beweglicheObjekte.push(ente);
}

for (let i = 0; i < 10; i++) {
    const insekt = new Insekt({ x: Math.random() * backgroundCanvas.width, y: Math.random() * backgroundCanvas.height }, { x: 1, y: 1 });
    beweglicheObjekte.push(insekt);
}

canvas.addEventListener('mousemove', handleMouseMove);
window.addEventListener('keydown', handleKeyDown);

function handleMouseMove(event: MouseEvent) {
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;

    beweglicheObjekte.forEach(objekt => {
        objekt.interagiereMitMaus(mouseX, mouseY);
    });
}

function handleKeyDown(event: KeyboardEvent) {
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
