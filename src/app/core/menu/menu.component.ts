import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuFormGroup } from './menu.model';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule, ReactiveFormsModule, CdkMenuTrigger, CdkMenu, CdkMenuItem
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
    @Input({ required: true }) menuForm!: MenuFormGroup;
    @Input({ required: true }) themeNameList!: string[];
    @Output() themeChanged = new EventEmitter<null>();

    protected onThemeChange(): void {
        this.themeChanged.emit(null);
    }
}
