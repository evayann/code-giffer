import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CodeTheme } from '../../code-theme';
import { CommonModule } from '@angular/common';

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
    @Input({ required: true }) title!: string;

    @Output() titleChange = new EventEmitter<string>();
    console = console;
}
