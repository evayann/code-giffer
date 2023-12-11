import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { CodeComponent } from '../../core/code/code.component';

@Component({
    selector: 'app-code-to-gif',
    standalone: true,
    imports: [CommonModule, CodeComponent],
    templateUrl: './code-to-gif-page.component.html',
    styleUrls: ['./code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeToGifComponent {
    protected frameList: readonly CodeFrame[] = [];
}
