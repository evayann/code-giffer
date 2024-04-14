import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Input as RouterInput } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { MenuComponent } from '../../core/menu/menu.component';
import { PlaceholderCodeService } from '../../shared/services/placeholder-code.service';
import { AutoCodeEditorComponent } from './auto-code-editor/auto-code-editor.component';
import { Hash } from '../../shared/hash';


@Component({
    selector: 'app-auto-code-to-gif-page',
    standalone: true,
    imports: [CommonModule, AutoCodeEditorComponent, MenuComponent],
    templateUrl: './auto-code-to-gif-page.component.html',
    styleUrl: './auto-code-to-gif-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCodeToGifPageComponent {
    @RouterInput() set title(title: string) {
        this._codeTitle = title;
        this.loadUrlCode();
    }

    @RouterInput() set code(code: string) {
        this._codeContent = Hash.uncrypt(code);
        this.loadUrlCode();
    }

    @Input({ required: true }) set menuForm(menuForm: FormGroup) {
        this._menuForm = menuForm;
        menuForm?.valueChanges.subscribe(() => this.changeDetectorRef.detectChanges())
    };

    private _codeTitle?: string;
    private _codeContent?: string;
    private _menuForm?: FormGroup;
    protected initialCode!: { title: string; code: string };

    protected get theme() {
        return {
            background: this.getMenuValue('hasBackground')
                ? 'var(--gradient)'
                : 'transparent',
            padding: this.getMenuValue('hasPadding') ? 'var(--padding-5)' : '0',
            codeSyntaxThemeName: 'androidstudio',
            titleColor: 'white',
            caretColor: 'white',
        };
    }

    protected get delayInMs(): number {
        return this.getMenuValue('intervalBetweenFrameInMs');
    }

    constructor(
        hljsLoader: HighlightLoader,
        placeholderCodeService: PlaceholderCodeService,
        route: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        hljsLoader.setTheme(
            `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`,
        );
        this.initialCode = placeholderCodeService.getRandomExample('auto');
    }

    private loadUrlCode(): void {
        if (!this._codeTitle || !this._codeContent) return;
        this.initialCode = { title: this._codeTitle, code: this._codeContent };
    }

    protected onUpdateUrl(code: string): void {
        console.log(code)
        window.history.replaceState({}, '', `/auto?title=test&code=${Hash.crypt(code)}`);
    }

    private getMenuValue<T = unknown>(key: any): T {
        return this._menuForm?.get(key)?.value;
    }
}
