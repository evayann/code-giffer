import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { languageList } from '../model/language';
import { MenuFormGroup } from './menu-form-group';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
    @Input({ required: true }) menuForm!: MenuFormGroup;
    @Input({ required: true }) themeNameList!: string[];
    @Output() themeChange = new EventEmitter<null>();

    protected languageList = languageList;

    protected onThemeChange(): void {
        this.themeChange.emit(null);
    }
}
