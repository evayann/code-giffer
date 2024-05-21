import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
    @HostBinding('style.--color')
    @Input({ required: true })
    color!: string;

    @HostBinding('style.--background-color')
    @Input({ required: true })
    backgroundColor!: string;

    @HostBinding('style.--percent')
    @Input({ required: true })
    percent!: number;
}
