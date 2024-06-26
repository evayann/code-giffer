import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    Input as RouterInput,
} from '@angular/core';
import { compressToBase64, decompressFromBase64 } from 'lz-string';
import { HighlightLoader } from 'ngx-highlightjs';
import { Subscription } from 'rxjs';
import { MenuFormGroup } from '../../core/menu/menu-form-group';
import { MenuComponent } from '../../core/menu/menu.component';
import { CodeEditorThemeService } from '../../shared/services/code-editor-theme.service';
import { PlaceholderCodeService } from '../../shared/services/placeholder-code.service';
import { UrlService } from '../../shared/services/url.service';
import { AutoCodeEditorComponent } from './auto-code-editor/auto-code-editor.component';

@Component({
    selector: 'app-auto-code-to-gif-page',
    standalone: true,
    imports: [CommonModule, AutoCodeEditorComponent, MenuComponent],
    templateUrl: './auto-code-to-gif-page.component.html',
    styleUrl: './auto-code-to-gif-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCodeToGifPageComponent implements OnInit, OnDestroy {
    @RouterInput({
        transform: (base64: string) => decompressFromBase64(base64),
    })
    title!: string;
    @RouterInput({
        transform: (base64: string) => decompressFromBase64(base64),
    })
    code!: string;

    @Input({ required: true }) set menuForm(menuForm: MenuFormGroup) {
        this._menuForm = menuForm;

        this.subscriptions.add(
            menuForm?.valueChanges.subscribe(() => {
                this.updateEditorTheme();
                this.changeDetectorRef.detectChanges();
            }),
        );
    }

    protected _menuForm!: MenuFormGroup;
    private subscriptions = new Subscription();
    protected initialCode!: { title: string; code: string };

    constructor(
        private hljsLoader: HighlightLoader,
        private placeholderCodeService: PlaceholderCodeService,
        private changeDetectorRef: ChangeDetectorRef,
        private codeEditorThemeService: CodeEditorThemeService,
        private urlService: UrlService,
    ) {}

    ngOnInit(): void {
        this.updateEditorTheme();

        if (this.title === '' && this.code === '') {
            this.initialCode =
                this.placeholderCodeService.getRandomExample('auto');
            this.urlService.updateQuery({
                code: compressToBase64(this.initialCode.code),
                title: compressToBase64(this.initialCode.title),
            });
            return;
        }
        this.initialCode = { title: this.title, code: this.code };
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    protected updateCodeInUrl(code: string): void {
        this.urlService.updateQuery({ code: compressToBase64(code) });
    }

    protected updateTitleInUrl(title: string): void {
        this.urlService.updateQuery({ title: compressToBase64(title) });
    }

    private updateEditorTheme(): void {
        this.hljsLoader.setTheme(
            this.codeEditorThemeService.editorOf(
                this._menuForm.themeName,
                this._menuForm.variant,
            ),
        );
    }
}
