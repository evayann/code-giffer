import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Dom2Gif } from '../../../core/model/dom-2-gif';
import { CodeAnimation, CodeFrame } from '../../../core/code/animation/code-animation';
import { CodeTheme } from '../../../core/code/code-theme';
import { WindowConfiguration } from '../../../core/code/window/window-configuration';
import { WindowComponent } from '../../../core/code/window/window.component';

@Component({
	selector: 'app-code-editor',
	standalone: true,
	imports: [CommonModule, WindowComponent],
	templateUrl: './code-editor.component.html',
	styleUrl: './code-editor.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent {
	@ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;

	@Input() set initialCode(code: string) {
		if (this.code !== '') return;
		this.code = code;
	}
	@Input({ required: true }) theme!: CodeTheme;
	@Input() delayInMs = 100;
	@Output() animation = new EventEmitter<{ frameList: readonly CodeFrame[]; maxRow: number }>();

	protected code = '';
	protected codeWidth = '64ch';
	protected codeConfiguration: WindowConfiguration = {
		numberRow: 1,
		numberColumn: 64,
		isEditable: true,
		hideTextSelection: false
	};
	protected codeAnimation = new CodeAnimation();

	private codeChangeFromAnimation$ = new Subject<void>();

	constructor(private changeDetectorReference: ChangeDetectorRef) { }

	deleteFrame(index: number): void {
		this.codeAnimation.removeFrame(index);
		this.emitCodeAnimationInformation();
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
		this.emitCodeAnimationInformation();
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

			frameOptions: {
				delayInMs: this.delayInMs
			},

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

	private emitCodeAnimationInformation(): void {
		this.animation.emit({ frameList: this.codeAnimation.frameList, maxRow: this.codeAnimation.nbMaxRow });
	}
}