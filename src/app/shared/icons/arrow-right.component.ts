import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-arrow-right',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: '../../../assets/arrow-right.svg',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowRightComponent { }