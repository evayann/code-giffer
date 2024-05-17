import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Dom2Gif } from '../../../core/model/dom-2-gif';
import {
    CodeAnimation,
    CodeFrame,
} from '../../../core/code/animation/code-animation';
import { CodeTheme } from '../../../core/code/code-theme';
import { WindowConfiguration } from '../../../core/code/window/window-configuration';
import { WindowComponent } from '../../../core/code/window/window.component';
import { CodeRecorderComponent } from '../../../core/code/code-recorder/code-recorder.component';

@Component({
    selector: 'app-code-editor',
    standalone: true,
    imports: [CommonModule, WindowComponent, CodeRecorderComponent],
    templateUrl: './code-editor.component.html',
    styleUrl: './code-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent {
    @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;

    @Input({ required: true }) set initialCode(value: {
        title: string;
        code: string;
    }) {
        this.title = value.title;
        this.code = value.code;
    }
    @Input({ required: true }) theme!: CodeTheme;
    @Input({ required: true }) languageSelected?: string;
    @Input() delayInMs = 100;

    @Output() codeHasChange = new EventEmitter<string>();
    @Output() titleHasChange = new EventEmitter<string>();
    @Output() animation = new EventEmitter<{
        frameList: readonly CodeFrame[];
        maxRow: number;
    }>();

    isRecording = false;

    protected title!: string;
    protected code!: string;
    protected language?: string;
    protected codeWidth = '64ch';
    protected codeConfiguration: WindowConfiguration = {
        numberRow: 1,
        numberColumn: 64,
        isEditable: true,
        hideTextSelection: false,
    };
    protected codeAnimation = new CodeAnimation();

    private codeChangeFromAnimation$ = new Subject<void>();

    constructor(private changeDetectorReference: ChangeDetectorRef) {}

    deleteFrame(index: number): void {
        this.codeAnimation.removeFrame(index);
        this.emitCodeAnimationInformation();
    }

    protected updateCode(code: string): void {
        if (this.codeAnimation.hasStart) return;

        this.code = code;
        this.codeHasChange.emit(code);
        this.codeConfiguration.numberRow = CodeAnimation.nbRowForCode(
            this.code,
        );
    }

    protected domHasChange(): void {
        if (!this.codeAnimation.hasStart) return;

        this.codeChangeFromAnimation$.next();
    }

    protected addFrameToAnimation(): void {
        this.codeAnimation.addFrame({
            title: this.title,
            code: this.code,
            caretPosition: 0,
        });
        this.emitCodeAnimationInformation();
    }

    protected saveCodeAnimation(): void {
        if (this.codeAnimation.hasNoFrame) return;
        this.isRecording = true;
    }

    protected finishRecord(): void {
        this.isRecording = false;
    }

    protected updateTitle(title: string): void {
        this.titleHasChange.emit(title);
    }

    protected updateLanguage(language: string): void {
        this.language = language;
    }

    private emitCodeAnimationInformation(): void {
        this.animation.emit({
            frameList: this.codeAnimation.frameList,
            maxRow: this.codeAnimation.nbMaxRow,
        });
    }
}
