import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewChildren } from '@angular/core';
import { WindowComponent } from './window/window.component';
import { CodeConfiguration } from './code-configuration';
import { CodeAnimation, CodeFrame } from './animation/code-animation';
import { Dom2Gif } from './dom-2-gif';
import { Subject, of } from 'rxjs';
import { HighlightLoader } from 'ngx-highlightjs';

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
    @Input() isController: boolean = true;
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

    constructor(private changeDetectorReference: ChangeDetectorRef, private hljsLoader: HighlightLoader) { this.theme = 'androidstudio'; }

    protected codeHasChange(codeEvent: { value: string, position: number }): void {
        this.code = codeEvent.value;

        if (this.codeAnimation.hasStart)
            this.codeChangeFromAnimation$.next();
        else
            this.codeConfiguration.numberRow = CodeAnimation.nbRowForCode(this.code);
    }

    protected addFrameToAnimation(): void {
        this.codeAnimation.addFrame({
            code: this.code,
            caretPosition: 0
        });
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
