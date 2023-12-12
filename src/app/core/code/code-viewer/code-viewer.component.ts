import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { CodeFrame } from '../animation/code-animation';
import { WindowConfiguration } from '../window/window-configuration';
import { CodeTheme } from '../code-theme';

@Component({
    selector: 'app-code-viewer',
    standalone: true,
    imports: [CommonModule, WindowComponent],
    templateUrl: './code-viewer.component.html',
    styleUrl: './code-viewer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeViewerComponent {
    @Input({ required: true }) frame!: CodeFrame;
    @Input({ required: true }) dimension!: { row: number, column: number };
    @Input({ required: true }) theme!: CodeTheme;

    protected get code(): string {
        return this.frame.code;
    }

    protected get configuration(): WindowConfiguration {
        return {
            isEditable: false,
            numberRow: this.dimension.row,
            numberColumn: this.dimension.column,
            hideTextSelection: false,
        }
    }
}
