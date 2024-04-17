import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-initial-loading',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './initial-loading.component.html',
    styleUrl: './initial-loading.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialLoadingComponent {}
