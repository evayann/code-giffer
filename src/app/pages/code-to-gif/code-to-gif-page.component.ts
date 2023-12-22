import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { CodeViewerComponent } from '../../core/code/code-viewer/code-viewer.component';
import { CodeEditorComponent } from '../../core/code/code-editor/code-editor.component';
import { HighlightLoader } from 'ngx-highlightjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { languageList } from './languages';
import { ToolsBarOptions } from './tools-bar';

@Component({
    selector: 'app-code-to-gif',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CodeEditorComponent, CodeViewerComponent],
    templateUrl: './code-to-gif-page.component.html',
    styleUrls: ['./code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeToGifComponent {
    protected showExportType = false;
    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = { frameList: [], maxRow: 0 };
    protected languagesList = ['auto'].concat(languageList);
    protected toolsForm: FormGroup;

    protected get theme(): any {
        return {
            background: this.getToolsValue('hasBackground') ? 'linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237))' : 'transparent',
            padding: this.getToolsValue('hasPadding') ? 'var(--padding-5)' : '0',
            codeSyntaxThemeName: 'androidstudio',
            titleColor: 'white',
            caretColor: 'white'
        };
    }

    protected get language(): string {
        return this.getToolsValue('language');
    }

    constructor(private hljsLoader: HighlightLoader, formBuilder: FormBuilder) {
        this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`);
        // this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${this.theme.codeSyntaxThemeName}.min.css`);
        this.toolsForm = formBuilder.group<ToolsBarOptions>({
            language: 'auto',
            frameInterval: 100,
            loopIteration: 0,
            hasBackground: true,
            hasPadding: true,
            isDarkMode: true,
        });
    }

    protected loadAnimation(animation: { frameList: readonly CodeFrame[]; maxRow: number }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow
        }
    }

    protected saveAsGif(): void {
        this.showExportType = false;
    }

    protected saveAsVideo(): void {
        this.showExportType = false;
    }

    private getToolsValue<T = unknown>(key: keyof ToolsBarOptions): T {
        return this.toolsForm.get(key)?.value;
    }
}
