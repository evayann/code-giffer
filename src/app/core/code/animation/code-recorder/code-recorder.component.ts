import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Dom2Gif } from '../../../model/dom-2-gif';
import { CodeTheme } from '../../code-theme';
import { WindowConfiguration } from '../../window/window-configuration';
import { CodeFrame, CodeAnimation } from '../code-animation';
import { WindowComponent } from '../../window/window.component';

@Component({
    selector: 'app-code-recorder',
    standalone: true,
    imports: [
        CommonModule, WindowComponent
    ],
    templateUrl: './code-recorder.component.html',
    styleUrl: './code-recorder.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeRecorderComponent implements AfterViewInit {
    @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;

    @Input({ required: true }) codeAnimation!: CodeAnimation;
    @Input({ required: true }) language!: string;
    @Input({ required: true }) theme!: CodeTheme;

    @Output() onRecordFinish = new EventEmitter<null>();

    protected code = '';
    protected codeWidth = '64ch';
    protected codeConfiguration: WindowConfiguration = {
        numberRow: 1,
        numberColumn: 64,
        isEditable: true,
        hideTextSelection: false
    };
    private codeChangeFromAnimation$ = new Subject<void>();

    constructor(private changeDetectorReference: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this.saveCodeAnimation();
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
                this.onRecordFinish.emit(null);
            }
        });
    }

    private isAlreadyLoad(frame: CodeFrame): boolean {
        return this.code === frame.code;
    }
}
