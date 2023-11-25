import { NgClass, NgStyle } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HighlightModule } from 'ngx-highlightjs';
import { from } from 'rxjs';
import { Gif } from '../gif';
import { CodeAnimation } from './code-animation';

type AnimationState = {
    hasStart: boolean,
    frameNumber: number,
    frameSaved: boolean,
};

type Frame = {
    code: string;
    caretPosition: number;
}

@Component({
    selector: 'app-code-editor',
    standalone: true,
    imports: [HighlightModule, NgClass, NgStyle],
    templateUrl: './code-editor.component.html',
    styleUrl: './code-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent implements AfterViewChecked {
    @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;
    @ViewChild('codeTag') codeTag!: ElementRef<HTMLElement>;

    protected code: string = '<p> Test </p>';
    protected nbCharacterOnOneRaw = 64;
    private caretPosition: number = 0;

    protected animationState!: AnimationState;
    private codeAnimation = new CodeAnimation();

    private scaleFactor = 2;
    private gif!: Gif;

    protected get nbRow(): number {
        return this.codeAnimation.nbRow;
    }

    protected get codeWidth(): string {
        return `${this.nbCharacterOnOneRaw}ch`;
    }

    private get codeContainerWidth(): number {
        return this.codeContainer.nativeElement.clientWidth * this.scaleFactor;
    }

    private get codeContainerHeight(): number {
        return this.codeContainer.nativeElement.clientHeight * this.scaleFactor;
    }

    constructor(private changeDetectorReference: ChangeDetectorRef) {
        this.resetAnimation();
    }

    ngAfterViewChecked(): void {
        if (!this.codeAnimation.hasStart) return;

        // if (this.animation.frameNumber === 0) {
        //   this.changeDetectorReference.detectChanges();
        //   this.animation.frameNumber++;
        //   return;
        // }
        console.log(this.animationState.frameSaved)
        if (this.animationState.frameSaved) return;

        this.saveFrame();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.caretPosition = textArea.selectionEnd;
        this.code = textArea.value;
    }

    protected addFrameToAnimation(): void {
        this.codeAnimation.push({
            code: this.code,
            caretPosition: this.caretPosition
        });
    }

    protected saveCodeAnimation(): void {
        if (this.codeAnimation.isEmpty) return;

        this.animationState = {
            hasStart: true,
            frameNumber: -1,
            frameSaved: true
        };

        this.codeAnimation.start();
        this.gif = new Gif({ width: this.codeContainerWidth, height: this.codeContainerHeight, numberOfFrames: this.codeAnimation.length });
        this.loadNextFrame();
    }

    private loadNextFrame(): void {
        const nextFrame = this.codeAnimation.nextFrame()

        if (!nextFrame) {
            this.generateGif();
            this.resetAnimation();
            this.changeDetectorReference.detectChanges();
            return;
        }

        this.animationState.frameSaved = false;
        this.code = nextFrame.code;
        this.changeDetectorReference.detectChanges();
    }

    private saveFrame(): void {
        const frameSubscription = from(html2canvas(this.codeContainer.nativeElement, { scale: this.scaleFactor })).subscribe((canvas) => {
            document.body.appendChild(canvas);

            const context = canvas.getContext('2d');
            const pixelList = context?.getImageData(0, 0, canvas.width, canvas.height)?.data;

            if (!pixelList) return;

            this.gif.addFrame(pixelList);

            this.animationState.frameSaved = true;
            this.loadNextFrame();

            frameSubscription.unsubscribe();
        });
    }

    private generateGif(): void {
        downloadBlob(this.gif.asBlob);

        this.resetAnimation();
    }

    private resetAnimation(): void {
        this.animationState = { hasStart: false, frameNumber: 0, frameSaved: false };
    }
}

function downloadBlob(blob: Blob): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'animation.gif';
    link.click();
    // link.dispatchEvent(new MouseEvent('click'));
}