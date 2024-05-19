import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CodeEditorThemeService {
    private editorThemeByTheme: Record<string, string> = {
        'blue-light': 'androidstudio',
        'blue-dark': 'androidstudio',
        'green-light': 'atom-one-light',
        'green-dark': 'atom-one-dark',
        'red-light': 'intellij-light',
        'red-dark': 'devibeans',
        'rainbow-light': 'gradient-light',
        'rainbow-dark': 'gradient-dark',
    };

    editorOf(themeName: string, variant: 'dark' | 'light'): string {
        const name = this.editorThemeByTheme[`${themeName}-${variant}`];
        return `highlight.js/${name}.css`;
    }
}
