export type Frame = {
    code: string;
    caretPosition: number;
};

export class CodeAnimation extends Array<Frame> {
    hasStart = false;
    private currentFrameNumber: number = -1;

    get isEmpty(): boolean {
        return this.length <= 0;
    }

    get nbRow(): number {
        return this.hasStart ? this.nbMaxRow : this.nbRowForCurrentLine;
    }

    get currentFrame(): Frame | undefined {
        return this.at(this.currentFrameNumber);
    }

    private get nbMaxRow(): number {
        return Math.max(...this.map(animation => this.nbRowForCode(animation.code)));
    }

    private get nbRowForCurrentLine(): number {
        return this.nbRowForCode(this.currentFrame?.code ?? '');
    }

    override push(...frameList: Frame[]): number {
        super.push(...frameList);
        this.currentFrameNumber += frameList.length;
        return this.length;
    }

    start(): void {
        if (this.length < 0) throw new Error('[Animation]: Need to have one frame before start');

        this.hasStart = true;
        this.currentFrameNumber = 0;
    }

    nextFrame(): Frame | undefined {
        const newFrameNumber = this.currentFrameNumber + 1;

        if (newFrameNumber > this.length) {
            this.stop();
            return undefined;
        }

        this.currentFrameNumber = newFrameNumber;

        return this.currentFrame;
    }

    stop(): void {
        this.hasStart = false;
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