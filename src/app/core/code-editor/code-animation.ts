export type Frame = {
    code: string;
    caretPosition: number;
};

export type StateCodeAnimation = {
    frameList: Frame[];
    currentFrame: number;
}

export class CodeAnimation {
    private frameList: Frame[] = [];
    private stateCodeAnimation?: StateCodeAnimation;

    get isEmpty(): boolean {
        return this.frameList.length <= 0;
    }

    get length(): number {
        return this.frameList.length;
    }

    get nbRow(): number {
        return this.stateCodeAnimation?.currentFrame ? this.nbMaxRow : this.nbRowForCurrentLine;
    }

    get hasStart(): boolean {
        return this.stateCodeAnimation ? this.stateCodeAnimation.currentFrame >= 0 : false;
    }

    get currentFrame(): Frame | undefined {
        if (!this.stateCodeAnimation) return undefined;

        const currentFrame = this.stateCodeAnimation.currentFrame;
        return this.stateCodeAnimation.frameList.at(currentFrame);
    }

    private get nbMaxRow(): number {
        return Math.max(...this.frameList.map(animation => this.nbRowForCode(animation.code)));
    }

    private get nbRowForCurrentLine(): number {
        return this.nbRowForCode(this.currentFrame?.code ?? '');
    }

    addFrame(...frameList: Frame[]): void {
        this.frameList.push(...frameList);
    }

    start(): void {
        if (this.frameList.length < 0) throw new Error('[Animation]: Need to have one frame before start');

        this.stateCodeAnimation = {
            frameList: [...this.frameList],
            currentFrame: -1
        }
    }

    nextFrame(): Frame | undefined {
        if (!this.stateCodeAnimation) throw new Error('Can\'t get next frame');

        const newFrameNumber = this.stateCodeAnimation.currentFrame + 1;

        if (newFrameNumber >= this.stateCodeAnimation?.frameList.length) {
            this.stop();
            return undefined;
        }

        this.stateCodeAnimation.currentFrame = newFrameNumber;

        return this.currentFrame;
    }

    stop(): void {
        this.stateCodeAnimation = undefined;
    }

    private nbRowForCode(code: string): number {
        let rowCounter = 1;
        let characterOnCurrentLine = 0;

        code.split('').forEach(character => {
            if (character === '\n') {
                rowCounter++;
                characterOnCurrentLine = 0;
            }

            characterOnCurrentLine++;

            if (characterOnCurrentLine > 64) {
                rowCounter++;
                characterOnCurrentLine = 0;
            }
        });

        return rowCounter;
    }
}