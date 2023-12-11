import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
import { Subject } from 'rxjs';
import { CodeAnimation, CodeFrame } from './animation/code-animation';
import { CodeConfiguration } from './code-configuration';
import { Dom2Gif } from '../model/dom-2-gif';
import { WindowComponent } from './window/window.component';

@Component({
    selector: 'app-code',
    standalone: true,
    imports: [WindowComponent, NgStyle],
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
    @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;
    @Output() frameList = new EventEmitter<readonly CodeFrame[]>();
    @Input() codeFrame?: CodeFrame;
    @Input() set theme(themeName: string) {
        this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${themeName}.min.css`);
    }

    protected code = '<p> test </p>';
    protected codeConfiguration: CodeConfiguration = {
        numberRow: 1,
        numberColumn: 64,
        isEditable: true,
        hideTextSelection: false
    };
    protected codeAnimation = new CodeAnimation();

    private codeChangeFromAnimation$ = new Subject<void>();

    protected get codeWidth(): string {
        return '64ch';
    }

    protected get isCodeController(): boolean {
        return !this.codeFrame;
    }

    constructor(private changeDetectorReference: ChangeDetectorRef, private hljsLoader: HighlightLoader) { this.theme = 'androidstudio'; }

    deleteFrame(index: number): void {
        this.codeAnimation.removeFrame(index);
        this.frameList.emit(this.codeAnimation.frameList);
    }

    protected codeHasChange(codeEvent: { value: string, position: number }): void {
        if (this.codeAnimation.hasStart) return;

        this.code = codeEvent.value;
        this.codeConfiguration.numberRow = CodeAnimation.nbRowForCode(this.code);
    }

    protected domHasChange(): void {
        if (!this.codeAnimation.hasStart) return;

        this.codeChangeFromAnimation$.next();
    }

    protected addFrameToAnimation(): void {
        this.codeAnimation.addFrame({
            code: this.code,
            caretPosition: 0
        });
        this.frameList.emit(this.codeAnimation.frameList);
    }

    protected saveCodeAnimation(): void {
        if (this.codeAnimation.hasNoFrame) return;

        Dom2Gif.generate({
            animation: this.codeAnimation,
            width: this.codeContainer.nativeElement.clientWidth,
            height: this.codeContainer.nativeElement.clientHeight,
            dom: this.codeContainer.nativeElement,
            scaleFactor: 2,
            frameLoaded: this.codeChangeFromAnimation$.asObservable(),

            onStart: () => {
                this.codeConfiguration.hideTextSelection = true;
                this.codeConfiguration.numberRow = this.codeAnimation.nbMaxRow;
                this.changeDetectorReference.detectChanges()
            },
            loadFrame: (frame: CodeFrame) => {
                if (this.isAlreadyLoad(frame)) {
                    this.codeChangeFromAnimation$.next();
                    return;
                }

                this.code = frame.code;
                this.changeDetectorReference.detectChanges();
            },
            onFinish: () => {
                this.codeConfiguration.hideTextSelection = false;
                this.changeDetectorReference.detectChanges();
            }
        });
    }

    private isAlreadyLoad(frame: CodeFrame): boolean {
        return this.code === frame.code;
    }
}
