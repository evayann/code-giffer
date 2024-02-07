import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HasChangeDirective } from '../../../shared/directives/has-change.directive';
import { CodeTheme } from '../code-theme';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { WindowConfiguration } from './window-configuration';
import { KeyBoardEvent } from './keyboard-event';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [TitleBarComponent, HasChangeDirective, Highlight, CommonModule],
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent {
    @Input({ required: true }) code!: string;
    @Input({ required: true }) windowConfiguration!: WindowConfiguration;
    @Input({ required: true }) set theme(theme: CodeTheme) {
        this._theme = theme;
        this.padding = theme.padding;
        this.background = theme.background;
    }
    @Input() title = 'Code Snippet';

    @Output() domHasChange = new EventEmitter<void>();
    @Output() titleChange = new EventEmitter<string>();
    @Output() codeHasChange = new EventEmitter<{ value: string, position: number }>();

    @HostBinding('style.padding') padding!: string;
    @HostBinding('style.background') background!: string;

    protected _theme!: CodeTheme;
    private lastCharacterInsert?: string = undefined;

    protected codeTagHasChange(): void {
        this.domHasChange.next();
    }

    protected onKeyDown(textArea: HTMLTextAreaElement, keyboardEvent: KeyboardEvent): void {
        const keyDownEvent = new KeyBoardEvent(keyboardEvent);

        if (this.lastCharacterInsert && keyDownEvent.is(this.lastCharacterInsert)) {
            this.moveSelection(textArea, 1);
            this.lastCharacterInsert = undefined;
            keyDownEvent.preventDefault();
        }

        else if (keyDownEvent.isTabulation) {
            if (keyDownEvent.shiftPress) {
                this.onRemoveCharacter(textArea);
            }
            else {
                this.insertCharacterInTextArea(textArea, '\t');
            }
            // this.lastCharacterInsert = undefined;
            keyDownEvent.preventDefault();
        }
        else if (keyDownEvent.isSimpleQuote) {
            this.insertCharacterInTextArea(textArea, '\'');
        }
        else if (keyDownEvent.isDoubleQuote) {
            this.insertCharacterInTextArea(textArea, '\"');
        }
        else if (keyDownEvent.isOpenParenthesis) {
            this.insertCharacterInTextArea(textArea, ')');
        }
        else if (keyDownEvent.isOpenCurlyBracket) {
            this.insertCharacterInTextArea(textArea, '}');
        }
        else if (keyDownEvent.isOpenBracket) {
            this.insertCharacterInTextArea(textArea, '}');
        }

        else if (keyDownEvent.isBackspace) {
            this.onRemoveCharacter(textArea);
            this.lastCharacterInsert = undefined;
        }

        else {
            this.lastCharacterInsert = undefined;
        }
    }

    protected onCodeModify(textArea: HTMLTextAreaElement): void {
        this.codeHasChange.emit({ value: textArea.value, position: textArea.selectionEnd });
    }

    private insertCharacterInTextArea(textArea: HTMLTextAreaElement, character: string): void {
        const { value: textAreaCurrentValue, selectionEnd: textSelectionEnd } = textArea;
        const textBeforeTabulation = textAreaCurrentValue.substring(0, textSelectionEnd);
        const textAfterTabulation = textAreaCurrentValue.substring(textSelectionEnd);
        textArea.value = `${textBeforeTabulation}${character}${textAfterTabulation}`;

        textArea.selectionStart = textSelectionEnd;
        textArea.selectionEnd = textSelectionEnd;
        this.lastCharacterInsert = character;
    }

    private onRemoveCharacter(textArea: HTMLTextAreaElement): void {
        if (!this.lastCharacterInsert) return;

        const textAreaCurrentValue = textArea.value[textArea.selectionEnd - 1];
        if (this.characterInCodeInsertionList(textAreaCurrentValue))
            this.removeCharacterInTextArea(textArea, textArea.selectionEnd);
    }

    private removeCharacterInTextArea(textArea: HTMLTextAreaElement, index: number): void {
        const { value: textAreaCurrentValue, selectionEnd: textSelectionEnd } = textArea;
        const textBeforeTabulation = textAreaCurrentValue.substring(0, index);
        const textAfterTabulation = textAreaCurrentValue.substring(index + 1);
        textArea.value = `${textBeforeTabulation}${textAfterTabulation}`;

        textArea.selectionStart = textSelectionEnd;
        textArea.selectionEnd = textSelectionEnd;
    }

    private moveSelection(textArea: HTMLTextAreaElement, positionOffset: number): void {
        textArea.selectionStart = textArea.selectionStart + positionOffset;
        textArea.selectionEnd = textArea.selectionEnd + positionOffset;
    }

    private characterInCodeInsertionList(character: string): boolean {
        return ['\'', '"', '(', '[', '{'].includes(character);
    }
}
