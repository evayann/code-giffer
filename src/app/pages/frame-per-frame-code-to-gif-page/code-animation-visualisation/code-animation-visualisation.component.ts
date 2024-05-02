import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { WindowComponent } from '../../../core/code/window/window.component';

@Component({
    selector: 'app-code-animation-visualisation',
    standalone: true,
    imports: [CommonModule, WindowComponent],
    templateUrl: './code-animation-visualisation.component.html',
    styleUrl: './code-animation-visualisation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeAnimationVisualisationComponent {
    @Input({ required: true }) animation!: any;
    @Input({ required: true }) theme!: any;
    @Output() onDelete = new EventEmitter<number>();
    @Output() onMove = new EventEmitter<{
        oldPosition: number;
        newPosition: number;
    }>();

    protected onDeleteFrame(frameIndex: number): void {
        this.onDelete.emit(frameIndex);
    }
}
