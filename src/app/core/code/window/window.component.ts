import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Highlight } from 'ngx-highlightjs';
import { WindowConfiguration } from './window-configuration';
import { HasChangeDirective } from '../../directives/has-change.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [TitleBarComponent, HasChangeDirective, Highlight, NgClass],
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent {
    @Input({ required: true }) code!: string;
    @Input() windowConfiguration: WindowConfiguration = { dimension: { row: 1, column: 64 }, hideTextSelected: false };

    @Output() updatedInDom = new EventEmitter<void>();
    @Output() hasChange = new EventEmitter<{ value: string, position: number }>();

    protected get nbRow(): number { return this.windowConfiguration.dimension.row; }
    protected get nbColumn(): number { return this.windowConfiguration.dimension.column; }
    protected get hideTextSelected(): boolean { return this.windowConfiguration.hideTextSelected; }

    protected codeHasChange(): void {
        this.updatedInDom.next();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.hasChange.emit({ value: textArea.value, position: textArea.selectionEnd });
    }
}
