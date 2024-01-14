import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CodeViewerComponent } from '../../../core/code/code-viewer/code-viewer.component';
import { ArrowLeftComponent } from '../../../shared/icons/arrow-left.component';
import { ArrowRightComponent } from '../../../shared/icons/arrow-right.component';

@Component({
    selector: 'app-code-animation-visualisation',
    standalone: true,
    imports: [
        CommonModule, CodeViewerComponent, ArrowLeftComponent, ArrowRightComponent,
    ],
    templateUrl: './code-animation-visualisation.component.html',
    styleUrl: './code-animation-visualisation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeAnimationVisualisationComponent {
    @Input({ required: true }) animation!: any;
    @Input() language!: string;
    @Input() theme!: any;
    @Output() onDelete = new EventEmitter<number>();
    @Output() onMove = new EventEmitter<{ oldPosition: number; newPosition: number }>();

    protected onDeleteFrame(frameIndex: number): void {
        this.onDelete.emit(frameIndex);
    }
}
