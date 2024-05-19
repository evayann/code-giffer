import { Color } from './color';
import RgbQuant from 'rgbquant';

export type PixelList = Uint8ClampedArray | number[];

export class Frame {
    private rgbQuantizer: RgbQuant;
    private _pixelList: PixelList;

    get paletteIndex(): number[] {
        const palette = this.rgbQuantizer
            .palette(true)
            .map((rgb) => Color.from(rgb).toUint8());

        palette.length = Math.min(
            Math.floor(Math.ceil(palette.length)) ** 2,
            256,
        );

        return palette;
    }

    get pixelList(): number[] {
        const reduceOutputAsIndex = 2;
        return this.rgbQuantizer.reduce(this._pixelList, reduceOutputAsIndex);
    }

    constructor(pixelList: PixelList, colorPaletteSize = 256) {
        this.rgbQuantizer = new RgbQuant({
            colors: colorPaletteSize,
            useCache: true,
            cacheFreq: 20,
        });
        this.rgbQuantizer.sample(pixelList);
        this._pixelList = pixelList;
    }
}
