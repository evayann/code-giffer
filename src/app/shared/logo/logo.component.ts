import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: '../../../assets/logo.svg',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
    @HostBinding('style.--color') @Input() color?: string;
    @HostBinding('style.--background') @Input() background?: string;
}
