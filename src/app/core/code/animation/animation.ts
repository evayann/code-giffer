export abstract class Animation<Frame> {
    protected _frameList: Frame[] = [];
    private currentFrameIndex?: number;

    get hasNoFrame(): boolean {
        return this._frameList.length <= 0;
    }

    get numberOfFrame(): number {
        return this._frameList.length;
    }

    get hasStart(): boolean {
        return this.currentFrameIndex !== undefined;
    }

    get currentFrame(): Frame | undefined {
        if (this.currentFrameIndex === undefined) return undefined;

        return this._frameList.at(this.currentFrameIndex);
    }

    get frameList(): readonly Frame[] {
        return this._frameList;
    }

    get currentIndex(): number {
        return this.currentFrameIndex ?? 0;
    }

    get progression(): number {
        return (this.currentFrameIndex ?? 0) / (this.numberOfFrame - 1);
    }

    start(): void {
        this.currentFrameIndex = -1;
    }

    stop(): void {
        this.currentFrameIndex = undefined;
    }

    nextFrame(): Frame | undefined {
        if (this.currentFrameIndex === undefined)
            throw new Error("Can't get next frame");

        const newFrameNumber = this.currentFrameIndex + 1;

        if (newFrameNumber >= this._frameList.length) {
            this.stop();
            return undefined;
        }

        this.currentFrameIndex = newFrameNumber;

        return this.currentFrame;
    }

    addFrame(frame: Frame): void {
        this._frameList.push(frame);
    }

    removeFrame(index: number): void {
        this._frameList.splice(index, 1);
    }

    copy(): this {
        return new (<any>this.constructor)();
    }
}
