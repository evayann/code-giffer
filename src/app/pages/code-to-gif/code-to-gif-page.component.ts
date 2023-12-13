import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { CodeViewerComponent } from '../../core/code/code-viewer/code-viewer.component';
import { CodeEditorComponent } from '../../core/code/code-editor/code-editor.component';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
    selector: 'app-code-to-gif',
    standalone: true,
    imports: [CommonModule, CodeEditorComponent, CodeViewerComponent],
    templateUrl: './code-to-gif-page.component.html',
    styleUrls: ['./code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeToGifComponent {
    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = { frameList: [], maxRow: 0 };
    protected theme = {
        background: 'linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237))',
        padding: 'var(--padding-5)',
        codeSyntaxThemeName: 'androidstudio',
        titleColor: 'white'
    }

    constructor(private hljsLoader: HighlightLoader) {
        this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${this.theme.codeSyntaxThemeName}.min.css`);
    }

    protected loadAnimation(animation: { frameList: readonly CodeFrame[]; maxRow: number }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow
        }
    }
}
