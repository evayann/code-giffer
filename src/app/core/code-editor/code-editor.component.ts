import { NgClass } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HighlightModule } from 'ngx-highlightjs';
import { from } from 'rxjs';
import { GifWriter } from 'omggif';
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
  private animationList: { code: string, caretPosition: number }[] = [];

  private scaleFactor = 2;
  private gif!: Gif;

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

      // for (var j = 0; j < pixelList.length; j += 4) {
      //   const r = Math.floor(pixelList[j + 0] * 0.1) * 10;
      //   const g = Math.floor(pixelList[j + 1] * 0.1) * 10;
      //   const b = Math.floor(pixelList[j + 2] * 0.1) * 10;
      //   const color = rgbToColor(r, g, b);

      //   const index = palette.indexOf(color);

      //   if (index === -1) {
      //     pixels.push(palette.length);
      //     palette.push(color);

      //   } else {
      //     pixels.push(index);
      //   }

      // }

      // // Force palette to be power of 2
      // let powof2 = 1;
      // while (powof2 < palette.length) powof2 <<= 1;
      // palette.length = powof2;
      // if (palette.length > 255) console.log('Gif can\'t have more than 256 colors in palette')

      this.animation.frameIsSaving = false;
      this.animation.frameSaved = true;
      this.loadNextFrame();

      frameSubscription.unsubscribe();
    });
  }

  private generateGif(): void {
    downloadBlob(this.gif.asBlob)

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