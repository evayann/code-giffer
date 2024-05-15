import { Animation } from './animation';

export type CodeFrame = {
    title: string;
    code: string;
    caretPosition: number;
};

export class CodeAnimation extends Animation<CodeFrame> {
    get nbMaxRow(): number {
        return Math.max(
            ...this._frameList.map((frame) =>
                CodeAnimation.nbRowForCode(frame.code),
            ),
        );
    }

    static nbRowForCode(code: string): number {
        let rowCounter = 1;
        let characterOnCurrentLine = 0;

        code.split('').forEach((character) => {
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

    static fromCode(title: string, code: string): CodeAnimation {
        const codeAnimation = new CodeAnimation();

        let currentCode = '';
        codeAnimation.addFrame({ title, code: currentCode, caretPosition: 0 });

        for (let index = 0; index < code.length; index++) {
            currentCode += code.charAt(index);
            codeAnimation.addFrame({
                title,
                code: currentCode,
                caretPosition: index + 1,
            });
        }

        return codeAnimation;
    }
}
