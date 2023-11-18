import { NgClass } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HighlightModule } from 'ngx-highlightjs';
import { from } from 'rxjs';
import * as GIF from 'gif.js.optimized';

type Animation = {
  hasStart: boolean,
  frameNumber: number,
  frameIsSaving: boolean,
  frameSaved: boolean,
};

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [HighlightModule, NgClass],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent implements AfterViewChecked {
  @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLElement>;

  protected code: string = '<p> Test </p>';
  private caretPosition: number = 0;

  protected animation: Animation = { hasStart: false, frameNumber: 0, frameIsSaving: false, frameSaved: false };
  private animationList: string[] = [];

  private gif: any;

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
    const newCodeText = this.codeContainer.nativeElement.innerText;
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

    this.gif = new GIF.default({
      workers: 2,
      quality: 10,
      // workerScript: 'assets/gif.worker.js',
    });
    console.log(this.gif)

    // // // or a canvas element
    // gif.addFrame(canvas);

    // gif.on('finished', (blob: any) => {
    //   console.log('end render')
    //   window.open(URL.createObjectURL(blob));
    // });
    // console.log('start render');
    // gif.render();

    // console.log(gif)
  }

  private moveCaretToPosition(caretPosition: number): void {
    const selection = window.getSelection();

    if (!selection) return;

    selection.collapse(this.codeContainer.nativeElement, 0);
    Array.from({ length: caretPosition }).forEach(() =>
      selection.modify('move', 'forward', 'character')
    );
  }

  private loadNextFrame(): void {
    const nextFrameNumber = this.animation.frameNumber + 1;
    if (nextFrameNumber >= this.animationList.length) {
      this.animation.hasStart = false;
      this.changeDetectorReference.detectChanges();
      return;
    }
    this.animation.frameNumber = nextFrameNumber;
    this.code = this.animationList.at(nextFrameNumber) as string;
    this.changeDetectorReference.detectChanges();
  }

  private saveFrame(): void {
    const frameSubscription = from(html2canvas(this.codeContainer.nativeElement)).subscribe((canvas) => {
      this.animation.frameIsSaving = false;
      this.animation.frameSaved = true;
      this.loadNextFrame();

      frameSubscription.unsubscribe();
    });
  }
}

function findDifferenceIndex(firstString: string, secondString: string): number {
  const [shortestString, longestString] = firstString.length < secondString.length ? [firstString, secondString] : [secondString, firstString];

  const difference = [...shortestString].findIndex((character, index) => character !== longestString[index]);
  const notSameLength = shortestString.length !== longestString.length;
  const foundDifferenceInString = difference !== -1;

  return notSameLength && !foundDifferenceInString ? shortestString.length : difference;
}