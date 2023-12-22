import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Highlight } from 'ngx-highlightjs';
import { WindowConfiguration } from './window-configuration';
import { HasChangeDirective } from '../../directives/has-change.directive';
import { CommonModule, NgClass } from '@angular/common';
import { CodeTheme } from '../code-theme';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [TitleBarComponent, HasChangeDirective, Highlight, CommonModule],
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent {
    @Input({ required: true }) language!: string;
    @Input({ required: true }) code!: string;
    @Input({ required: true }) theme!: CodeTheme;
    @Input({ required: true }) windowConfiguration!: WindowConfiguration;

    @Output() domHasChange = new EventEmitter<void>();
    @Output() codeHasChange = new EventEmitter<{ value: string, position: number }>();

    protected codeTagHasChange(): void {
        this.domHasChange.next();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.codeHasChange.emit({ value: textArea.value, position: textArea.selectionEnd });
    }
}
