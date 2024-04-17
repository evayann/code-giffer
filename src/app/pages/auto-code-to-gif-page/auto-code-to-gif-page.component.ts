import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Input as RouterInput } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HighlightLoader } from 'ngx-highlightjs';
import { MenuComponent } from '../../core/menu/menu.component';
import { PlaceholderCodeService } from '../../shared/services/placeholder-code.service';
import { AutoCodeEditorComponent } from './auto-code-editor/auto-code-editor.component';
import { compressToBase64, decompressFromBase64 } from 'lz-string';

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
        this._codeContent = decompressFromBase64(code);
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

    private paddings: Record<string, string> = {
        no: '0',
        small: 'var(--padding-4)',
        medium: 'var(--padding-5)',
        large: 'calc(var(--padding-5) * 2)',
    };

    private borderRadius: Record<string, string> = {
        no: '0',
        medium: 'var(--border-radius-3)',
        large: 'var(--border-radius-4)',
    };

    protected get theme() {
        return {
            background: this.getMenuValue('hasBackground')
                ? 'var(--gradient)'
                : 'transparent',
            padding: this.paddings[this.getMenuValue<string>('padding')],
            borderRadius: this.borderRadius[this.getMenuValue<string>('roundCorner')],
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
        private changeDetectorRef: ChangeDetectorRef,
        private location: Location
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
        // window.history.replaceState({}, '', `/auto?title=test&code=${Hash.crypt(code)}`);
        // this.location.replaceState('/auto', )
        const path = this.location.path();
        const queriesString = path.substring(path.indexOf('?') + 1);
        const queries: Record<string, string> = queriesString.split('&').reduce((acc, query) => {
            const [key, value] = query.split('=');
            return { ...acc, [key]: value };
        }, {});
        this.location.replaceState('auto', `title=${queries['title']}&code=${compressToBase64(code)}`)
        // console.log(this.location.path(), this.location.replaceState('test'));
    }

    private getMenuValue<T = unknown>(key: any): T {
        return this._menuForm?.get(key)?.value;
    }
}
