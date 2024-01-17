import { Animation } from "./animation";

export type CodeFrame = {
    code: string;
    caretPosition: number;
};

export class CodeAnimation extends Animation<CodeFrame> {
    get nbMaxRow(): number {
        return Math.max(...this._frameList.map(frame => CodeAnimation.nbRowForCode(frame.code)));
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

    static fromCode(codeString: string): CodeAnimation {
        const codeAnimation = new CodeAnimation();

        let currentCode = '';
        codeAnimation.addFrame({ code: currentCode, caretPosition: 0 });

        for (let index = 0; index < codeString.length; index++) {
            currentCode += codeString.charAt(index);
            codeAnimation.addFrame({ code: currentCode, caretPosition: index + 1 });
        }

        return codeAnimation;
    }
}