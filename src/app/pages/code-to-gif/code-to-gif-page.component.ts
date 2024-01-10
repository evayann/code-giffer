import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HighlightLoader } from 'ngx-highlightjs';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { CodeEditorComponent } from '../../core/code/code-editor/code-editor.component';
import { CodeViewerComponent } from '../../core/code/code-viewer/code-viewer.component';
import { languageList } from './languages';
import { ToolsBarOptions } from './tools-bar';
import { Observable, Subject } from 'rxjs';
import { ThemeName, ThemeService } from '../../shared/services/theme.service';

@Component({
    selector: 'app-code-to-gif',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CodeEditorComponent, CodeViewerComponent],
    templateUrl: './code-to-gif-page.component.html',
    styleUrls: ['./code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeToGifComponent {
    protected themeNameList: ThemeName[];
    protected showExportType = false;
    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = { frameList: [], maxRow: 0 };
    protected languagesList = ['auto'].concat(languageList);
    protected toolsForm: FormGroup;
    protected saveCurrentFrame$: Observable<void>;

    private saveCurrentFrameSubject$ = new Subject<void>();

    protected get theme(): any {
        return {
            background: this.getToolsValue('hasBackground') ? 'var(--gradient)' : 'transparent',
            padding: this.getToolsValue('hasPadding') ? 'var(--padding-5)' : '0',
            codeSyntaxThemeName: 'androidstudio',
            titleColor: 'white',
            caretColor: 'white'
        };
    }

    protected get language(): string {
        return this.getToolsValue('language');
    }

    protected get isExportable(): boolean {
        return this.animation.frameList.length !== 0;
    }

    constructor(private hljsLoader: HighlightLoader, private themeService: ThemeService, formBuilder: FormBuilder) {
        this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`);
        // this.hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${this.theme.codeSyntaxThemeName}.min.css`);

        this.themeNameList = themeService.themeNameList;
        const currentTheme = themeService.currentTheme;
        this.toolsForm = formBuilder.group<ToolsBarOptions>({
            language: 'auto',
            theme: currentTheme.name,
            loopIteration: 0,
            hasBackground: true,
            hasPadding: true,
            isDarkMode: currentTheme.variant === "dark",
        });
        this.saveCurrentFrame$ = this.saveCurrentFrameSubject$.asObservable();
    }

    protected updateTheme(): void {
        this.themeService.loadTheme({
            name: this.getToolsValue('theme'),
            variant: this.getToolsValue('isDarkMode') ? 'dark' : 'light'
        })
    }

    protected loadAnimation(animation: { frameList: readonly CodeFrame[]; maxRow: number }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow
        }
    }

    protected addCurrentFrame(): void {

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
