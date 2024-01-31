export class Color {
    static from(color: string | [number, number, number]): Color {
        return new Color(color);
    }

    constructor(private color: string | [number, number, number]) { }

    toRgb(threshold: number = 1): { r: number, g: number, b: number } {
        if (typeof this.color === 'string') throw new Error('Not supported yet for string color');
        const [rCanal, gCanal, bCanal] = this.color;
        return {
            r: Math.floor(rCanal * (1 / threshold)) * threshold,
            g: Math.floor(gCanal * (1 / threshold)) * threshold,
            b: Math.floor(bCanal * (1 / threshold)) * threshold,
        };
    }

    toUint8(): number {
        if (typeof this.color === 'string') throw new Error('Not supported yet for string color');
        const { r, g, b } = this.toRgb(10);
        return r << 16 | g << 8 | b << 0;
    }
}