import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    Input as RouterInput,
    OnDestroy,
    OnInit,
} from '@angular/core';

import { HighlightLoader } from 'ngx-highlightjs';
import { Subscription } from 'rxjs';
import { CodeFrame } from '../../core/code/animation/code-animation';
import { MenuFormGroup } from '../../core/menu/menu-form-group';
import { CodeAnimationVisualisationComponent } from './code-animation-visualisation/code-animation-visualisation.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { UrlService } from '../../shared/services/url.service';
import { compressToBase64, decompressFromBase64 } from 'lz-string';
import { PlaceholderCodeService } from '../../shared/services/placeholder-code.service';
import { CodeEditorThemeService } from '../../shared/services/code-editor-theme.service';

@Component({
    selector: 'app-frame-per-frame-code-to-gif-page',
    standalone: true,
    imports: [
        CommonModule,
        CodeEditorComponent,
        CodeAnimationVisualisationComponent,
    ],
    templateUrl: './frame-per-frame-code-to-gif-page.component.html',
    styleUrls: ['./frame-per-frame-code-to-gif-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FramePerFrameCodeToGifPageComponent implements OnInit, OnDestroy {
    @RouterInput({
        transform: (base64: string) => decompressFromBase64(base64),
    })
    title!: string;
    @RouterInput({
        transform: (base64: string) => decompressFromBase64(base64),
    })
    code!: string;

    @Input({ required: true }) set menuForm(menuForm: MenuFormGroup) {
        this.menuFormGroup = menuForm;
        this.subscriptions.add(
            menuForm?.valueChanges.subscribe(() => {
                this.updateEditorTheme();
                this.changeDetectorRef.detectChanges();
            }),
        );
    }

    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = {
        frameList: [],
        maxRow: 0,
    };

    protected menuFormGroup!: MenuFormGroup;
    protected initialCode!: { title: string; code: string };
    private subscriptions = new Subscription();

    get hasFrame(): boolean {
        return this.animation.frameList.length > 0;
    }

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

    protected loadAnimation(animation: {
        frameList: readonly CodeFrame[];
        maxRow: number;
    }): void {
        this.animation = {
            frameList: [...animation.frameList],
            maxRow: animation.maxRow,
        };
    }

    protected onDeleteAnimationKey(
        codeEditorComponent: CodeEditorComponent,
        indexToDelete: number,
    ): void {
        codeEditorComponent.deleteFrame(indexToDelete);
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
                this.menuFormGroup.themeName,
                this.menuFormGroup.variant,
            ),
        );
    }
}
