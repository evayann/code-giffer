import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { DialogService } from '../../../shared/services/dialog/dialog.service';

@Component({
    selector: 'app-can-deactivate',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './can-deactivate.component.html',
    styleUrl: './can-deactivate.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanDeactivateComponent {
    @Output() result = new EventEmitter<boolean>();

    constructor(private dialogSerivce: DialogService) {}

    onStay(): void {
        this.result.emit(false);
        this.dialogSerivce.closeCurrentDialog();
    }

    onQuit(): void {
        this.result.emit(true);
        this.dialogSerivce.closeCurrentDialog();
    }
}
