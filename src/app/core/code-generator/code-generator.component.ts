import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {
  HighlightLoader,
  HighlightModule,
} from 'ngx-highlightjs';
import html2canvas from 'html2canvas';
// import GIF from 'gif.js.optimized';

import { HtmlAnimator } from './animators/html-animator';
import { from } from 'rxjs';

@Component({
  selector: 'app-code-generator',
  standalone: true,
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss'],
  imports: [HighlightModule],
})
export class CodeGeneratorComponent {
  @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLPreElement>;

  @Input({ required: true }) set code(code: string) {
    this._code = code;
    // console.log(code)
    const a = HtmlAnimator.parse(code);
    a.codeToDisplay$.subscribe(code => {
      this._code = code;
    })
    // a.start();
  }

  @Input() set theme(themeName: string) {
    this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${themeName}.min.css`);
  }

  _code!: string;

  constructor(private hljsLoader: HighlightLoader) { this.theme = 'androidstudio'; }

  protected saveCodeAnimation(): void {
    const subscription = from(html2canvas(this.codeContainer.nativeElement)).subscribe((canvas) => {
      // const gif = new GIF({
      //   workers: 2,
      //   quality: 10,
      //   workerScript: 'assets/gif.worker.js',
      // });

      // // // or a canvas element
      // gif.addFrame(canvas);

      // gif.on('finished', (blob: any) => {
      //   console.log('end render')
      //   window.open(URL.createObjectURL(blob));
      // });
      // console.log('start render');
      // gif.render();

      // console.log(gif)


      //document.body.appendChild(canvas);
      subscription.unsubscribe();
    })
  }
}