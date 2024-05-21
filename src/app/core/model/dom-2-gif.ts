import { Observable, Subscription, from } from 'rxjs';
import domtoimage from 'dom-to-image';

import { Animation } from '../code/animation/animation';
import { FrameOptions, Gif } from './gif';
import { Frame } from './frame';

export type Dom2GifGenerationProperties<Frame> = {
    animation: Animation<Frame>;
    width: number;
    height: number;
    dom: HTMLElement;
    frameLoaded: Observable<void>;
    scaleFactor?: number;

    frameOptions: FrameOptions;

    onStart?: () => void;
    onFinish?: () => void;
    loadFrame: (frame: Frame) => void;
};

export class Dom2Gif<Frame> {
    private gif: Gif;
    private dom: HTMLElement;
    private animation: Animation<Frame>;

    private onStart?: () => void;
    private onFinish?: () => void;
    private loadFrame: (frame: Frame) => void;

    private nextFrameLoadedSubscription: Subscription;

    static generate<Frame>(
        codeGifGeneration: Dom2GifGenerationProperties<Frame>,
    ): void {
        const codeGif = new Dom2Gif(codeGifGeneration);
        codeGif.saveAnimation();
    }

    private constructor(dom2gifProperties: Dom2GifGenerationProperties<Frame>) {
        this.dom = dom2gifProperties.dom;
        this.animation = dom2gifProperties.animation;

        this.onStart = dom2gifProperties.onStart;
        this.onFinish = dom2gifProperties.onFinish;
        this.loadFrame = dom2gifProperties.loadFrame;

        this.gif = new Gif({
            width: dom2gifProperties.width,
            height: dom2gifProperties.height,
            numberOfFrames: dom2gifProperties.animation.numberOfFrame,
        });
        this.nextFrameLoadedSubscription =
            dom2gifProperties.frameLoaded.subscribe(() =>
                this.saveFrame(dom2gifProperties.frameOptions),
            );
    }

    private saveAnimation(): void {
        if (this.animation.hasNoFrame) return;

        this.animation.start();
        this.onStart?.();
        this.loadNextFrame();
    }

    private loadNextFrame(): void {
        const nextFrame = this.animation.nextFrame();

        if (!nextFrame) {
            this.downloadGif();
            this.onFinish?.();
            this.nextFrameLoadedSubscription.unsubscribe();
            return;
        }

        this.loadFrame(nextFrame);
    }

    private saveFrame(frameOptions: FrameOptions): void {
        const frameSubscription = from(
            domtoimage.toPixelData(this.dom),
        ).subscribe((pixelList) => {
            this.gif.addFrame(new Frame(pixelList), frameOptions);
            this.loadNextFrame();

            frameSubscription.unsubscribe();
        });
    }

    private downloadGif(): void {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(this.gif.asBlob);
        link.download = 'animation.gif';
        link.click();
    }
}
