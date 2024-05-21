import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
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
import { Dom2Gif } from '../../model/dom-2-gif';
import { CodeTheme } from '../code-theme';
import { WindowConfiguration } from '../window/window-configuration';
import { CodeFrame, CodeAnimation } from '../animation/code-animation';
import { WindowComponent } from '../window/window.component';
import { ProgressBarComponent } from '../../../shared/components/progress-bar/progress-bar.component';

@Component({
    selector: 'app-code-recorder',
    standalone: true,
    imports: [CommonModule, WindowComponent, ProgressBarComponent],
    templateUrl: './code-recorder.component.html',
    styleUrl: './code-recorder.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeRecorderComponent implements AfterViewInit {
    @ViewChild('codeContainer', { read: ElementRef })
    codeContainer!: ElementRef<HTMLDivElement>;

    @Input() title!: string;
    @Input() language?: string;
    @Input() delayInMs: number = 100;
    @Input({ required: true }) theme!: CodeTheme;
    @Input({ required: true })
    set codeAnimation(codeAnimation: CodeAnimation) {
        this._codeAnimation = codeAnimation;
        this.codeConfiguration = {
            numberRow: codeAnimation.nbMaxRow,
            numberColumn: 64,
            isEditable: true,
            hideTextSelection: true,
        };
    }

    @Output() onRecordFinish = new EventEmitter<null>();

    protected code = '';
    protected codeConfiguration!: WindowConfiguration;
    private _codeAnimation!: CodeAnimation;
    protected progression$ = new Subject<number>();
    private codeChangeFromAnimation$ = new Subject<void>();

    constructor(private changeDetectorReference: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.saveCodeAnimation();
    }

    protected domHasChange(): void {
        if (!this._codeAnimation.hasStart) return;

        this.codeChangeFromAnimation$.next();
    }

    protected saveCodeAnimation(): void {
        if (this._codeAnimation.hasNoFrame) return;

        Dom2Gif.generate({
            animation: this._codeAnimation,
            width: this.codeContainer.nativeElement.clientWidth,
            height: this.codeContainer.nativeElement.clientHeight,
            dom: this.codeContainer.nativeElement,
            scaleFactor: 2,
            frameLoaded: this.codeChangeFromAnimation$.asObservable(),

            frameOptions: {
                delayInMs: this.delayInMs,
            },

            loadFrame: (frame: CodeFrame) => {
                if (this.isAlreadyLoad(frame)) {
                    this.codeChangeFromAnimation$.next();
                    return;
                }

                this.progression$.next(this._codeAnimation.progression);

                this.code = frame.code;
                this.changeDetectorReference.detectChanges();
            },
            onFinish: () => {
                this.codeConfiguration.hideTextSelection = false;
                this.changeDetectorReference.detectChanges();
                this.onRecordFinish.emit(null);
            },
        });
    }

    private isAlreadyLoad(frame: CodeFrame): boolean {
        return this.code === frame.code;
    }
}
