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

        codeAnimation.addFrame({ title, code: '', caretPosition: 0 });

        CodeAnimation.splitStringWithGrapheme(code).reduce(
            (currentCode, character, index) => {
                const code = currentCode + character;

                codeAnimation.addFrame({
                    title,
                    code,
                    caretPosition: index + 1,
                });

                return code;
            },
            '',
        );

        return codeAnimation;
    }

    private static splitStringWithGrapheme(code: string): string[] {
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        const segments = segmenter.segment(code);
        return Array.from(segments, ({ segment }) => segment);
    }
}
