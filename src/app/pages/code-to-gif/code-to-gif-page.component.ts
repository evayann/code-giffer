import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { CodeViewerComponent } from '../../core/code/code-viewer/code-viewer.component';
import { CodeEditorComponent } from '../../core/code/code-editor/code-editor.component';

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
        background: 'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))',
        padding: 'var(--padding-5)'
    }

    protected loadAnimation(animation: { frameList: readonly CodeFrame[]; maxRow: number }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow
        }
    }
}
