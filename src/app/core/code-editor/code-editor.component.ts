import { NgClass } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HighlightModule } from 'ngx-highlightjs';
import { from } from 'rxjs';
import { GifWriter } from 'omggif';

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
  imports: [HighlightModule, NgClass],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent implements AfterViewChecked {
  @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('codeTag') codeTag!: ElementRef<HTMLElement>;

  protected code: string = '<p> Test </p>';
  private caretPosition: number = 0;

  protected animation: Animation = { hasStart: false, frameNumber: 0, frameIsSaving: false, frameSaved: false };
  private animationList: string[] = [];

  private scaleFactor = 2;
  private gifBuffer!: Uint8Array;
  private gifWriter!: GifWriter;

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

    this.moveCaretToPosition(this.caretPosition);
  }

  protected codeModify(): void {
    const newCodeText = this.codeTag.nativeElement.innerText;
    console.log(newCodeText, newCodeText.split('\n'))
    const difference = findDifferenceIndex(this.code, newCodeText);
    this.caretPosition = difference + (this.code.length < newCodeText.length ? 1 : 0);
    this.code = newCodeText;
  }

  protected addFrameToAnimation(): void {
    this.animationList.push(this.code);
  }

  protected saveCodeAnimation(): void {
    if (this.animationList.length <= 0) return;

    this.animation = {
      hasStart: true,
      frameNumber: 0,
      frameIsSaving: false,
      frameSaved: false
    };
    this.code = this.animationList[0];

    this.gifBuffer = new Uint8Array(this.codeContainerWidth * this.codeContainerHeight * this.numberOfFrames);
    this.gifWriter = new GifWriter(this.gifBuffer, this.codeContainerWidth, this.codeContainerHeight, { loop: undefined });
  }

  private moveCaretToPosition(caretPosition: number): void {
    const selection = window.getSelection();

    if (!selection) return;

    selection.collapse(this.codeTag.nativeElement, 0);
    Array.from({ length: caretPosition }).forEach(() =>
      selection.modify('move', 'forward', 'character')
    );
  }

  private loadNextFrame(): void {
    const nextFrameNumber = this.animation.frameNumber + 1;
    if (nextFrameNumber >= this.animationList.length) {
      this.generateGif();
      this.changeDetectorReference.detectChanges();
      return;
    }
    this.animation.frameNumber = nextFrameNumber;
    this.code = this.animationList.at(nextFrameNumber) as string;
    this.changeDetectorReference.detectChanges();
  }

  private saveFrame(): void {
    const frameSubscription = from(html2canvas(this.codeContainer.nativeElement, { scale: this.scaleFactor })).subscribe((canvas) => {
      document.body.appendChild(canvas);

      const context = canvas.getContext('2d');
      const imageData = context?.getImageData(0, 0, canvas.width, canvas.height)?.data;

      if (!imageData) return;

      const pixels: number[] = [];
      const palette: number[] = [];

      const rgbToColor = (r: number, g: number, b: number) => r << 16 | g << 8 | b << 0;

      for (var j = 0; j < imageData.length; j += 4) {
        const r = Math.floor(imageData[j + 0] * 0.1) * 10;
        const g = Math.floor(imageData[j + 1] * 0.1) * 10;
        const b = Math.floor(imageData[j + 2] * 0.1) * 10;
        const color = rgbToColor(r, g, b);

        const index = palette.indexOf(color);

        if (index === -1) {
          pixels.push(palette.length);
          palette.push(color);

        } else {
          pixels.push(index);
        }

      }

      // Force palette to be power of 2
      let powof2 = 1;
      while (powof2 < palette.length) powof2 <<= 1;
      palette.length = powof2;
      if (palette.length > 255) console.log('Gif can\'t have more than 256 colors in palette')

      const delay = 100; // // Delay in hundredths of a sec (100 = 1s, 10 = 0.1s)
      const options = { palette, delay };
      this.gifWriter.addFrame(0, 0, canvas.width, canvas.height, pixels, options);

      this.animation.frameIsSaving = false;
      this.animation.frameSaved = true;
      this.loadNextFrame();

      frameSubscription.unsubscribe();
    });
  }

  private generateGif(): void {
    const imageBuffer = this.gifBuffer.subarray(0, this.gifWriter.end());

    downloadBlob(new Blob([imageBuffer], { type: 'image/gif' }))

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

function findDifferenceIndex(firstString: string, secondString: string): number {
  const [shortestString, longestString] = firstString.length < secondString.length ? [firstString, secondString] : [secondString, firstString];

  const difference = [...shortestString].findIndex((character, index) => character !== longestString[index]);
  const notSameLength = shortestString.length !== longestString.length;
  const foundDifferenceInString = difference !== -1;

  return notSameLength && !foundDifferenceInString ? shortestString.length : difference;
}