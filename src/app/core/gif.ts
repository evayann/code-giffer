import { GifWriter } from "omggif";
import { Color } from "./color";

type GifAnimation = {
    width: number;
    height: number;
    numberOfFrames: number;
};

type FrameOptions = {
    delayInSecondes: number
};

type PixelList = Uint8ClampedArray | number[];

export class Gif {
    private buffer: Uint8Array;
    private writer: GifWriter;
    private height: number;
    private width: number;

    get asBlob(): Blob {
        return new Blob([this.buffer.subarray(0, this.writer.end())], { type: 'image/gif' });
    }

    constructor({ width, height, numberOfFrames }: GifAnimation) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8Array(width * height * numberOfFrames);
        this.writer = new GifWriter(this.buffer, width, height, { loop: undefined })
    }

    addFrame(pixelList: PixelList, frameOptions?: FrameOptions): void {
        const numberOfCanal = 4;

        const pixelPaletteIndexList = [];
        const paletteList = [];

        for (let index = 0; index < this.width * this.height; index++) {
            const color = this.extractRGBFromPixels(pixelList, index * numberOfCanal);
            const uint8Color = color.toUint8();

            const indexOfColorInPaletteList = paletteList.indexOf(uint8Color);
            if (indexOfColorInPaletteList === -1) {
                pixelPaletteIndexList.push(paletteList.length);
                paletteList.push(uint8Color);
            } else {
                pixelPaletteIndexList.push(index);
            }
        }

        this.correctPaletteSize(paletteList);

        const options = { palette: paletteList, delay: Math.round((frameOptions?.delayInSecondes ?? 1) * 100) };
        this.writer.addFrame(0, 0, this.width, this.height, pixelPaletteIndexList, options);
    }

    private extractRGBFromPixels(pixelList: PixelList, pixelIndex: number): Color {
        return new Color(pixelList.slice(pixelIndex, pixelIndex + 3) as [number, number, number]);
    }

    private correctPaletteSize(paletteList: number[]): void {
        let powof2 = 1;
        while (powof2 < paletteList.length) powof2 <<= 1;
        paletteList.length = powof2;
        if (paletteList.length > 255) console.log('Gif can\'t have more than 256 colors in palette')
    }
}