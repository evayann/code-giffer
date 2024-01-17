import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HighlightLoader } from 'ngx-highlightjs';
import { MenuComponent } from '../../core/menu/menu.component';
import { ThemeService } from '../../shared/services/theme.service';
import { AutoCodeEditorComponent } from './auto-code-editor/auto-code-editor.component';

@Component({
    selector: 'app-auto-code-to-gif-page',
    standalone: true,
    imports: [
        CommonModule, AutoCodeEditorComponent, MenuComponent
    ],
    templateUrl: './auto-code-to-gif-page.component.html',
    styleUrl: './auto-code-to-gif-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCodeToGifPageComponent {
    protected menuFormGroup: FormGroup;
    protected themeNameList: string[];

    protected get theme() {
        return {
            background: this.getMenuValue('hasBackground') ? 'var(--gradient)' : 'transparent',
            padding: this.getMenuValue('hasPadding') ? 'var(--padding-5)' : '0',
            codeSyntaxThemeName: 'androidstudio',
            titleColor: 'white',
            caretColor: 'white'
        };
    }

    constructor(hljsLoader: HighlightLoader, formBuilder: FormBuilder, private themeService: ThemeService) {
        hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`);

        this.themeNameList = themeService.themeNameList;
        const currentTheme = themeService.currentTheme;
        this.menuFormGroup = formBuilder.group<any>({
            language: 'auto',
            theme: currentTheme.name,
            loopIteration: 0,
            hasBackground: true,
            hasPadding: true,
            isDarkMode: currentTheme.variant === "dark",
        })
    }

    protected onThemeChanged(): void {
        this.themeService.loadTheme({
            name: this.getMenuValue('theme'),
            variant: this.getMenuValue('isDarkMode') ? 'dark' : 'light'
        })
    }

    private getMenuValue<T = unknown>(key: any): T {
        return this.menuFormGroup.get(key)?.value;
    }
}
