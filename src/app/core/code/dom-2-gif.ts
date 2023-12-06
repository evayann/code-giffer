import { Observable, Subscription, from } from "rxjs";
import html2canvas from "html2canvas";

import { Animation } from "./animation/animation";
import { Gif } from "../model/gif";

export type Dom2GifGenerationProperties<Frame> = {
    animation: Animation<Frame>,
    width: number,
    height: number,
    dom: HTMLElement,
    loadFrame: (frame: Frame) => void,
    frameLoaded: Observable<void>,
    scaleFactor?: number,
    onFinish?: () => void
}

export class Dom2Gif<Frame> {
    private gif: Gif;
    private dom: HTMLElement;
    private scaleFactor: number;
    private animation: Animation<Frame>;
    private onFinish?: () => void;
    private loadFrame: (frame: Frame) => void;
    private nextFrameLoadedSubscription: Subscription;

    static generate<Frame>(codeGifGeneration: Dom2GifGenerationProperties<Frame>): void {
        const codeGif = new Dom2Gif(codeGifGeneration);
        codeGif.saveAnimation();
    }

    private constructor({ animation, width, height, dom, loadFrame, frameLoaded, scaleFactor, onFinish }: Dom2GifGenerationProperties<Frame>) {
        this.dom = dom;
        this.loadFrame = loadFrame;
        this.animation = animation;
        this.scaleFactor = scaleFactor ?? 1;
        this.onFinish = onFinish;
        this.gif = new Gif({ width: width * this.scaleFactor, height: height * this.scaleFactor, numberOfFrames: animation.numberOfFrame });
        this.nextFrameLoadedSubscription = frameLoaded.subscribe(() => this.saveFrame());
    }

    private saveAnimation(): void {
        if (this.animation.hasNoFrame) return;

        this.animation.start();
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

    private saveFrame(): void {
        const frameSubscription = from(html2canvas(this.dom, { scale: this.scaleFactor })).subscribe((canvas) => {
            document.body.appendChild(canvas);

            const context = canvas.getContext('2d');
            const pixelList = context?.getImageData(0, 0, canvas.width, canvas.height)?.data;

            if (!pixelList) return;

            this.gif.addFrame(pixelList);
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