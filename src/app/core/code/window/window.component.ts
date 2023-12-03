import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Highlight } from 'ngx-highlightjs';
import { CodeConfiguration } from '../code-configuration';
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
    @Input({ required: true }) codeConfiguration!: CodeConfiguration;

    @Output() updatedInDom = new EventEmitter<void>();
    @Output() hasChange = new EventEmitter<{ value: string, position: number }>();

    protected codeHasChange(): void {
        this.updatedInDom.next();
    }

    protected codeModify(textArea: HTMLTextAreaElement): void {
        this.hasChange.emit({ value: textArea.value, position: textArea.selectionEnd });
    }
}
