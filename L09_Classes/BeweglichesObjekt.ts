export abstract class BeweglichesObjekt {
    protected constructor(
        protected position: { x: number; y: number },
        protected velocity: { x: number; y: number }
    ) {}

    abstract zeichne(ctx: CanvasRenderingContext2D): void;
    abstract bewege(canvas: HTMLCanvasElement): void;

    abstract interagiereMitMaus(mouseX: number, mouseY: number): void;

    abstract interagiereMitTastatur(key: string): void;
}
