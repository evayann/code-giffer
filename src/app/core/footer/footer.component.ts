import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../shared/icons/logo.component';

@Component({
    selector: 'footer[app]',
    standalone: true,
    imports: [
        CommonModule, LogoComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
