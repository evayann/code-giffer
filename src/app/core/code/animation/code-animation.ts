import { Animation } from "./animation";

export type CodeFrame = {
    code: string;
    caretPosition: number;
};

export class CodeAnimation extends Animation<CodeFrame> {
    get nbMaxRow(): number {
        return Math.max(...this.frameList.map(frame => CodeAnimation.nbRowForCode(frame.code)));
    }

    static nbRowForCode(code: string): number {
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