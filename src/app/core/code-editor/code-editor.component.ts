import { NgClass, NgStyle } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HighlightModule } from 'ngx-highlightjs';
import { from } from 'rxjs';
import { Gif } from '../gif';

type Animation = {
  hasStart: boolean,
  frameNumber: number,
  frameIsSaving: boolean,
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

  protected animation: Animation = { hasStart: false, frameNumber: 0, frameIsSaving: false, frameSaved: false };
  private animationList: { code: string, caretPosition: number }[] = [];

  private scaleFactor = 2;
  private gif!: Gif;

  protected get nbRow(): number {
    let rowCounter = 1;
    let characterOnCurrentLine = 0;

    this.code.split('').forEach(character => {
      if (character === '\n') {
        rowCounter++;
        characterOnCurrentLine = 0;
      }

      characterOnCurrentLine++;

      if (characterOnCurrentLine > 64) {
        rowCounter++;
        characterOnCurrentLine = 0;
      }
    });

    return rowCounter;
  }

  protected get codeWidth(): string {
    return `${this.nbCharacterOnOneRaw}ch`;
  }

  private get numberOfFrames(): number {
    return this.animationList.length;
  }

  private get codeContainerWidth(): number {
    return this.codeContainer.nativeElement.clientWidth * this.scaleFactor;
  }

  private get codeContainerHeight(): number {
    return this.codeContainer.nativeElement.clientHeight * this.scaleFactor;
  }

  constructor(private changeDetectorReference: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    if (this.animation.hasStart) {
      if (this.animation.frameIsSaving) return;

      this.saveFrame();
      this.animation.frameIsSaving = true;
    }
  }

  protected codeModify(textArea: HTMLTextAreaElement): void {
    this.caretPosition = textArea.selectionEnd;
    this.code = textArea.value;
  }

  protected addFrameToAnimation(): void {
    console.log(this.code)
    this.animationList.push({
      code: this.code,
      caretPosition: this.caretPosition
    });
  }

  protected saveCodeAnimation(): void {
    if (this.animationList.length <= 0) return;

    this.animation = {
      hasStart: true,
      frameNumber: 0,
      frameIsSaving: false,
      frameSaved: false
    };
    this.code = this.animationList[0].code;

    this.gif = new Gif({ width: this.codeContainerWidth, height: this.codeContainerHeight, numberOfFrames: this.numberOfFrames });
  }

  private loadNextFrame(): void {
    const nextFrameNumber = this.animation.frameNumber + 1;

    if (nextFrameNumber >= this.animationList.length) {
      this.generateGif();
      this.changeDetectorReference.detectChanges();
      return;
    }

    this.animation.frameNumber = nextFrameNumber;
    this.code = this.animationList.at(nextFrameNumber)?.code as string;
    this.changeDetectorReference.detectChanges();
  }

  private saveFrame(): void {
    const frameSubscription = from(html2canvas(this.codeContainer.nativeElement, { scale: this.scaleFactor })).subscribe((canvas) => {
      document.body.appendChild(canvas);

      const context = canvas.getContext('2d');
      const pixelList = context?.getImageData(0, 0, canvas.width, canvas.height)?.data;

      if (!pixelList) return;

      this.gif.addFrame(pixelList);

      this.animation.frameIsSaving = false;
      this.animation.frameSaved = true;
      this.loadNextFrame();

      frameSubscription.unsubscribe();
    });
  }

  private generateGif(): void {
    downloadBlob(this.gif.asBlob);

    this.animation.hasStart = false;
  }
}

function downloadBlob(blob: Blob): void {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'animation.gif';
  link.click();
  // link.dispatchEvent(new MouseEvent('click'));
}