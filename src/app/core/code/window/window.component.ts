import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Highlight, HighlightAutoResult } from 'ngx-highlightjs';
import { HasChangeDirective } from '../../../shared/directives/has-change.directive';
import { languageList } from '../../model/language';
import { CodeTheme } from '../code-theme';
import { KeyBoardEvent } from './keyboard-event';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { WindowConfiguration } from './window-configuration';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [TitleBarComponent, HasChangeDirective, Highlight, CommonModule],
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent implements AfterViewInit {
    private static defaultTitle = 'Default Title';

    @ViewChild(Highlight) highlight!: Highlight;

    @Input() set language(language: string | undefined) {
        this._language = language;
        if (!this.highlight) return;
        this.updateHighlighLanguage();
    }
    @Input({ required: true }) code!: string;
    @Input({ required: true }) windowConfiguration!: WindowConfiguration;
    @Input({ required: true }) set theme(theme: CodeTheme) {
        this._theme = theme;
        this.tabSize = theme.tabSize;
        this.padding = theme.padding;
        this.background = theme.background;
    }
    @Input() barTitle = WindowComponent.defaultTitle;

    @Output() languageDetected = new EventEmitter<string>();
    @Output() domCodeHasChange = new EventEmitter<void>();
    @Output() domTitleHasChange = new EventEmitter<void>();
    @Output() titleChange = new EventEmitter<string>();
    @Output() codeHasChange = new EventEmitter<{
        value: string;
        position: number;
    }>();

    @HostBinding('style.padding') padding!: string;
    @HostBinding('style.tab-size') tabSize!: number;
    @HostBinding('style.background') background!: string;

    protected get codeRows(): number {
        return (
            this.windowConfiguration.numberRow ?? this.code.split('\n').length
        );
    }

    protected _theme!: CodeTheme;

    private _language?: string;
    private lastCharacterInsert?: string = undefined;

    ngAfterViewInit(): void {
        this.updateHighlighLanguage();
    }

    protected updateTitle(title: string): void {
        if (title === '') {
            this.barTitle = title = WindowComponent.defaultTitle;
        }
        this.titleChange.emit(title);
    }

    protected codeTagHasChange(): void {
        this.domCodeHasChange.next();
    }

    protected titleTagHasChange(): void {
        this.domTitleHasChange.next();
    }

    protected onKeyDown(
        textArea: HTMLTextAreaElement,
        keyboardEvent: KeyboardEvent,
    ): void {
        const keyDownEvent = new KeyBoardEvent(keyboardEvent);

        if (
            this.lastCharacterInsert &&
            keyDownEvent.is(this.lastCharacterInsert)
        ) {
            this.moveSelection(textArea, 1);
            this.lastCharacterInsert = undefined;
            keyDownEvent.preventDefault();
        } else if (keyDownEvent.isTabulation) {
            if (keyDownEvent.shiftPress) {
                this.onRemoveTabulationOnCurrentLine(textArea);
            } else {
                this.insertCharacterInTextArea(textArea, '\t', 1);
            }
            keyDownEvent.preventDefault();
        } else if (keyDownEvent.isSimpleQuote) {
            this.insertCharacterInTextArea(textArea, "'");
        } else if (keyDownEvent.isDoubleQuote) {
            this.insertCharacterInTextArea(textArea, '"');
        } else if (keyDownEvent.isOpenParenthesis) {
            this.insertCharacterInTextArea(textArea, ')');
        } else if (keyDownEvent.isOpenCurlyBracket) {
            this.insertCharacterInTextArea(textArea, '}');
        } else if (keyDownEvent.isOpenBracket) {
            this.insertCharacterInTextArea(textArea, '}');
        } else if (keyDownEvent.isBackspace) {
            this.onRemoveCharacter(textArea);
            this.lastCharacterInsert = undefined;
        } else {
            this.lastCharacterInsert = undefined;
        }
    }

    protected onCodeModify(textArea: HTMLTextAreaElement): void {
        this.codeHasChange.emit({
            value: textArea.value,
            position: textArea.selectionEnd,
        });
    }

    protected onCodeHighlight(highlightAutoResult: HighlightAutoResult) {
        if (!highlightAutoResult.language) return;
        this.languageDetected.emit(highlightAutoResult.language);
    }

    private insertCharacterInTextArea(
        textArea: HTMLTextAreaElement,
        character: string,
        offset = 0,
    ): void {
        const { value: textAreaCurrentValue, selectionEnd: textSelectionEnd } =
            textArea;
        const textBeforeCharacterToInsert = textAreaCurrentValue.substring(
            0,
            textSelectionEnd,
        );
        const textAfterCharacterToInsert =
            textAreaCurrentValue.substring(textSelectionEnd);
        textArea.value = `${textBeforeCharacterToInsert}${character}${textAfterCharacterToInsert}`;

        textArea.selectionStart = textSelectionEnd + offset;
        textArea.selectionEnd = textSelectionEnd + offset;
        this.lastCharacterInsert = character;

        this.code = textArea.value;
        this.onCodeModify(textArea);
    }

    private onRemoveCharacter(textArea: HTMLTextAreaElement): void {
        if (!this.lastCharacterInsert) return;

        const textAreaCurrentValue = textArea.value[textArea.selectionEnd - 1];
        if (this.characterInCodeInsertionList(textAreaCurrentValue))
            this.removeCharacterInTextArea(textArea, textArea.selectionEnd);

        this.code = textArea.value;
        this.onCodeModify(textArea);
    }

    private removeCharacterInTextArea(
        textArea: HTMLTextAreaElement,
        index: number,
    ): void {
        const { value: textAreaCurrentValue, selectionEnd: textSelectionEnd } =
            textArea;
        const textBeforeTabulation = textAreaCurrentValue.substring(0, index);
        const textAfterTabulation = textAreaCurrentValue.substring(index + 1);
        textArea.value = `${textBeforeTabulation}${textAfterTabulation}`;

        textArea.selectionStart = textSelectionEnd;
        textArea.selectionEnd = textSelectionEnd;
    }

    private onRemoveTabulationOnCurrentLine(
        textArea: HTMLTextAreaElement,
    ): void {
        const { value: textAreaCurrentValue, selectionEnd: textSelectionEnd } =
            textArea;
        const textAreaRowList = textAreaCurrentValue.split('\n');
        const cursorLine = textAreaCurrentValue
            .substring(0, textSelectionEnd)
            .split('\n').length;
        const hasTabulationOnLine =
            textAreaRowList[cursorLine - 1].includes('\t');

        if (!hasTabulationOnLine) return;

        textAreaRowList[cursorLine - 1] = textAreaRowList[
            cursorLine - 1
        ].replace('\t', '');

        textArea.value = textAreaRowList.join('\n');
        const movementOffset =
            textArea.value[textSelectionEnd - 1] === '\n' ? 0 : 1;

        textArea.selectionStart = textSelectionEnd - movementOffset;
        textArea.selectionEnd = textSelectionEnd - movementOffset;

        this.code = textArea.value;
        this.onCodeModify(textArea);
    }

    private moveSelection(
        textArea: HTMLTextAreaElement,
        positionOffset: number,
    ): void {
        textArea.selectionStart = textArea.selectionStart + positionOffset;
        textArea.selectionEnd = textArea.selectionEnd + positionOffset;
    }

    private characterInCodeInsertionList(character: string): boolean {
        return ["'", '"', '(', '[', '{', '\t'].includes(character);
    }

    private updateHighlighLanguage() {
        this.highlight.languages = this._language
            ? [this._language]
            : Array.from(languageList);
        // Force a reload of highligh js if language change
        this.highlight.ngOnChanges({
            code: {
                previousValue: '',
                currentValue: this.code,
                firstChange: false,
                isFirstChange() {
                    return this.firstChange;
                },
            },
        });
    }
}
