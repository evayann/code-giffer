import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { WindowComponent } from '../../../core/code/window/window.component';
import { CodeRecorderComponent } from '../../../core/code/code-recorder/code-recorder.component';
import { CodeAnimation } from '../../../core/code/animation/code-animation';

@Component({
    selector: 'app-auto-code-editor',
    standalone: true,
    imports: [CommonModule, WindowComponent, CodeRecorderComponent],
    templateUrl: './auto-code-editor.component.html',
    styleUrl: './auto-code-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCodeEditorComponent {
    @Output() codeHasChange = new EventEmitter<string>();
    @Output() titleHasChange = new EventEmitter<string>();
    @Input({ required: true }) delayInMs!: number;
    @Input({ required: true }) theme!: any;
    @Input() set initialCode(value: { title: string; code: string }) {
        this.title = value.title;
        this.code = value.code;
    }

    protected title = 'Snippet title';
    protected code = '';
    protected codeAnimation!: CodeAnimation;

    protected isRecording = false;

    codeConfiguration = {
        numberColumn: 64,
        isEditable: true,
        hideTextSelection: false,
    };

    protected updateCode(code: string): void {
        this.code = code;
        this.codeHasChange.emit(code);
    }

    protected updateTitle(title: string): void {
        this.titleHasChange.emit(title);
    }

    protected startRecord(): void {
        this.codeAnimation = CodeAnimation.fromCode(this.title, this.code);
        this.isRecording = true;
    }

    protected finishRecord(): void {
        this.isRecording = false;
    }
}
