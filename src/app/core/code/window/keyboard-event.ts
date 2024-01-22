export class KeyBoardEvent {
    get isTabulation(): boolean { return this.key === 'Tab'; }
    get isSimpleQuote(): boolean { return this.key === '\''; }
    get isDoubleQuote(): boolean { return this.key === '\"'; }
    get isOpenParenthesis(): boolean { return this.key === '('; }
    get isOpenCurlyBracket(): boolean { return this.key === '{'; }
    get isOpenBracket(): boolean { return this.key === '['; }
    get isOpenChevron(): boolean { return this.key === '<'; }

    get isBackspace(): boolean { return this.key === 'Backspace'; }
    get isDelete(): boolean { return this.key === 'DELETE'; }

    get value(): string {
        return this.key;
    }

    private get key(): string {
        return this.keyboardEvent.key;
    }

    constructor(private keyboardEvent: KeyboardEvent) { }

    preventDefault(): void { this.keyboardEvent.preventDefault(); }
}