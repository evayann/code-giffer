import { NgClass, NgStyle } from '@angular/common';
import { AfterRenderPhase, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, afterRender } from '@angular/core';
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
    @ViewChild('textArea') codeTextArea!: ElementRef<HTMLTextAreaElement>;

    protected code: string = '<p> Test </p>';
    protected nbCharacterOnOneRaw = 64;
    protected codeAnimation = new CodeAnimation();
    private caretPosition: number = 0;


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

    constructor(private changeDetectorReference: ChangeDetectorRef) { }

    ngAfterViewChecked(): void {
        if (!this.codeAnimation.hasStart) return;

        // if (this.animation.frameNumber === 0) {
        //   this.changeDetectorReference.detectChanges();
        //   this.animation.frameNumber++;
        //   return;
        // }
        // console.log(this.codeAnimation.frameSaved)
        if (this.codeAnimation.currentFrame?.isSaved) return;

        const isDifferentFrame = this.codeTextArea.nativeElement.textContent === this.codeAnimation.currentFrame?.code;
        if (!isDifferentFrame) return;

        this.saveFrame();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.caretPosition = textArea.selectionEnd;
        this.code = textArea.value;
    }

    protected addFrameToAnimation(): void {
        this.codeAnimation.addFrame({
            code: this.code,
            caretPosition: this.caretPosition
        });
    }

    protected saveCodeAnimation(): void {
        if (this.codeAnimation.isEmpty) return;

        this.codeAnimation.start();
        this.gif = new Gif({
            width: this.codeContainerWidth,
            height: this.codeContainerHeight,
            numberOfFrames: this.codeAnimation.length
        });
        this.loadNextFrame();
    }

    private loadNextFrame(): void {
        const nextFrame = this.codeAnimation.nextFrame();

        if (!nextFrame) {
            this.generateGif();
            this.changeDetectorReference.detectChanges();
            return;
        }

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

            this.codeAnimation.markCurrentFrameAsAsSave();
            this.loadNextFrame();

            frameSubscription.unsubscribe();
        });
    }

    private generateGif(): void {
        downloadBlob(this.gif.asBlob);
    }
}

function downloadBlob(blob: Blob): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'animation.gif';
    link.click();
    // link.dispatchEvent(new MouseEvent('click'));
}