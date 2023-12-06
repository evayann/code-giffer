export abstract class Animation<Frame> {
    protected frameList: Frame[] = [];
    private currentFrameIndex?: number;

    get hasNoFrame(): boolean {
        return this.frameList.length <= 0;
    }

    get numberOfFrame(): number {
        return this.frameList.length;
    }

    get hasStart(): boolean {
        return this.currentFrameIndex !== undefined;
    }

    get currentFrame(): Frame | undefined {
        if (this.currentFrameIndex === undefined) return undefined;

        return this.frameList.at(this.currentFrameIndex);
    }

    start(): void {
        this.currentFrameIndex = -1;
    }

    stop(): void {
        this.currentFrameIndex = undefined;
    }

    nextFrame(): Frame | undefined {
        if (this.currentFrameIndex === undefined) throw new Error('Can\'t get next frame');

        const newFrameNumber = this.currentFrameIndex + 1;

        if (newFrameNumber >= this.frameList.length) {
            this.stop();
            return undefined;
        }

        this.currentFrameIndex = newFrameNumber;

        return this.currentFrame;
    }

    addFrame(frame: Frame): void {
        this.frameList.push(frame);
    }
}