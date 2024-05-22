import { GifWriter } from 'omggif';
import { Frame } from './frame';

type GifAnimation = {
    width: number;
    height: number;
    numberOfFrames: number;
    numberIteration?: number;
};

export type FrameOptions = {
    delayInMs: number;
};

export class Gif {
    private buffer: Uint8Array;
    private writer: GifWriter;
    private height: number;
    private width: number;

    get asBlob(): Blob {
        return new Blob([this.buffer.subarray(0, this.writer.end())], {
            type: 'image/gif',
        });
    }

    constructor({
        width,
        height,
        numberOfFrames,
        numberIteration: nbIteration,
    }: GifAnimation) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8Array(width * height * numberOfFrames);
        this.writer = new GifWriter(this.buffer, width, height, {
            loop: nbIteration,
        });
    }

    addFrame(frame: Frame, frameOptions?: FrameOptions): void {
        const paletteList = frame.paletteIndex;
        const pixelPaletteIndexList = frame.pixelList;
        const options = {
            palette: paletteList,
            delay: (frameOptions?.delayInMs ?? 100) / 10,
        };
        this.writer.addFrame(
            0,
            0,
            this.width,
            this.height,
            pixelPaletteIndexList,
            options,
        );
    }
}
