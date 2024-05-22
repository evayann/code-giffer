import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { CodeTheme } from '../../code-theme';
import { CommonModule } from '@angular/common';
import { HasChangeDirective } from '../../../../shared/directives/has-change.directive';

@Component({
    selector: 'app-title-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './title-bar.component.html',
    styleUrls: ['./title-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBarComponent {
    @Input({ required: true }) theme!: CodeTheme;
    @Input({ required: true }) barTitle!: string;
    @Input() editable = true;

    @Output() titleChange = new EventEmitter<string>();

    protected onInputChange(title: string): void {
        this.titleChange.emit(title);
    }
}
