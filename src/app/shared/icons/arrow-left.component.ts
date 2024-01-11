import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-arrow-left',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: '../../../assets/arrow-left.svg',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowLeftComponent { }