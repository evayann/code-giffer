import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HasChangeDirective } from '../../../shared/directives/has-change.directive';
import { CodeTheme } from '../code-theme';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { WindowConfiguration } from './window-configuration';

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
    @Input({ required: true }) windowConfiguration!: WindowConfiguration;
    @Input({ required: true }) set theme(theme: CodeTheme) {
        this._theme = theme;
        this.padding = theme.padding;
        this.background = theme.background;
    }

    @Output() domHasChange = new EventEmitter<void>();
    @Output() codeHasChange = new EventEmitter<{ value: string, position: number }>();

    @HostBinding('style.padding') padding!: string;
    @HostBinding('style.background') background!: string;

    protected _theme!: CodeTheme;

    protected codeTagHasChange(): void {
        this.domHasChange.next();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.codeHasChange.emit({ value: textArea.value, position: textArea.selectionEnd });
    }
}
