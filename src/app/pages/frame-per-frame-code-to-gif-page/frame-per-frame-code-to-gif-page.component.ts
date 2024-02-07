import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HighlightLoader } from 'ngx-highlightjs';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { MenuComponent } from '../../core/menu/menu.component';
import { ThemeService } from '../../shared/services/theme.service';
import { CodeAnimationVisualisationComponent } from './code-animation-visualisation/code-animation-visualisation.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MenuForm } from '../../core/menu/menu.model';


@Component({
    selector: 'app-frame-per-frame-code-to-gif-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CodeEditorComponent, CodeAnimationVisualisationComponent, MenuComponent],
    templateUrl: './frame-per-frame-code-to-gif-page.component.html',
    styleUrls: ['./frame-per-frame-code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FramePerFrameCodeToGifPageComponent {
    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = { frameList: [], maxRow: 0 };

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

    protected get delayInMs(): number {
        return this.getMenuValue('intervalBetweenFrameInMs');
    }

    protected get isExportable(): boolean {
        return this.animation.frameList.length !== 0;
    }

    constructor(hljsLoader: HighlightLoader, formBuilder: FormBuilder, private themeService: ThemeService) {
        hljsLoader.setTheme(`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`);

        this.themeNameList = themeService.themeNameList;
        const currentTheme = themeService.currentTheme;
        this.menuFormGroup = formBuilder.group<MenuForm>({
            intervalBetweenFrameInMs: 100,
            theme: currentTheme.name,
            loopIteration: 0,
            hasBackground: true,
            hasPadding: true,
            isDarkMode: currentTheme.variant === "dark",
        })
    }

    protected loadAnimation(animation: { frameList: readonly CodeFrame[]; maxRow: number }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow
        };
    }

    protected onDeleteAnimationKey(indexToDelete: number): void {
        this.animation.frameList
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
