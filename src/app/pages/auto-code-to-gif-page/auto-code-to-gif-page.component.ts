import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Input as RouterInput } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HighlightLoader } from 'ngx-highlightjs';
import { MenuComponent } from '../../core/menu/menu.component';
import { PlaceholderCodeService } from '../../shared/services/placeholder-code.service';
import { AutoCodeEditorComponent } from './auto-code-editor/auto-code-editor.component';
import { compressToBase64, decompressFromBase64 } from 'lz-string';
import { UrlService } from '../../shared/services/url.service';

@Component({
    selector: 'app-auto-code-to-gif-page',
    standalone: true,
    imports: [CommonModule, AutoCodeEditorComponent, MenuComponent],
    templateUrl: './auto-code-to-gif-page.component.html',
    styleUrl: './auto-code-to-gif-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCodeToGifPageComponent implements OnInit {
    @RouterInput({ transform: (base64: string) => decompressFromBase64(base64) }) title!: string;
    @RouterInput({ transform: (base64: string) => decompressFromBase64(base64) }) code!: string;

    @Input({ required: true }) set menuForm(menuForm: FormGroup) {
        this._menuForm = menuForm;
        menuForm?.valueChanges.subscribe(() => this.changeDetectorRef.detectChanges());
    };

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
        private placeholderCodeService: PlaceholderCodeService,
        private changeDetectorRef: ChangeDetectorRef,
        private urlService: UrlService
    ) {
        hljsLoader.setTheme(
            `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`,
        );
    }

    ngOnInit(): void {
        if (!this.title || !this.code) {
            this.initialCode = this.placeholderCodeService.getRandomExample('auto');
            return
        };
        this.initialCode = { title: this.title, code: this.code };
    }

    protected updateCodeInUrl(code: string): void {
        this.urlService.updateQuery('code', compressToBase64(code));
    }

    protected updateTitleInUrl(title: string): void {
        this.urlService.updateQuery('title', compressToBase64(title));
    }

    private getMenuValue<T = unknown>(key: any): T {
        return this._menuForm?.get(key)?.value;
    }
}
