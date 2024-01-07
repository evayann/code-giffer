import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type ThemeName = 'blue' | 'red';
export type ThemeVariant = 'light' | 'dark';
export const themeNameList: ThemeName[] = ['blue', 'red'];

export type Theme = { name: ThemeName, variant: ThemeVariant };


@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeInLocalStorageKey = 'previous-theme';

    private htmlTag: HTMLHtmlElement | null;
    private themeName!: ThemeName;
    private themeVariant!: ThemeVariant;

    get currentTheme(): Theme {
        return {
            name: this.themeName,
            variant: this.themeVariant
        };
    }

    constructor(@Inject(DOCUMENT) document: Document) {
        this.htmlTag = document.querySelector('html');
    }

    loadTheme(theme: Partial<Theme>): void {
        if (!theme.name || !theme.variant) return;

        if (theme.name) this.themeName = theme.name;
        if (theme.variant) this.themeVariant = theme.variant;

        this.saveCurrentTheme();
        this.reloadTheme();
    }

    loadDefaultTheme(): void {
        const previousTheme = this.getThemeInLocalStorage();
        this.themeName = previousTheme?.name ?? 'blue';
        this.themeVariant = previousTheme?.variant ?? 'dark';
        this.reloadTheme();
    }

    private saveCurrentTheme(): void {
        const currentTheme = { name: this.themeName, variant: this.themeVariant };
        const themeString = JSON.stringify(currentTheme);
        localStorage.setItem(this.themeInLocalStorageKey, themeString);
    }

    private getThemeInLocalStorage(): Theme | undefined {
        const themeString = localStorage.getItem(this.themeInLocalStorageKey);

        if (!themeString) return undefined;

        return JSON.parse(themeString);
    }

    private reloadTheme(): void {
        this.htmlTag?.setAttribute('theme', `${this.themeName}-${this.themeVariant}`);
    }
}
