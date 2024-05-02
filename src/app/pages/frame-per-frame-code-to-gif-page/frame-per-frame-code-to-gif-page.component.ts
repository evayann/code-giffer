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
            menuForm?.valueChanges.subscribe(() =>
                this.changeDetectorRef.detectChanges(),
            ),
        );
    }

    protected animation: { frameList: readonly CodeFrame[]; maxRow: number } = {
        frameList: [],
        maxRow: 0,
    };

    protected menuFormGroup!: MenuFormGroup;
    protected initialCode!: { title: string; code: string };
    private subscriptions = new Subscription();

    protected get isExportable(): boolean {
        return this.animation.frameList.length !== 0;
    }

    constructor(
        hljsLoader: HighlightLoader,
        private changeDetectorRef: ChangeDetectorRef,
        private urlService: UrlService,
    ) {
        hljsLoader.setTheme(
            `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css`,
        );
    }

    ngOnInit(): void {
        if (!this.title || !this.code) {
            this.initialCode = { code: '', title: 'Title' };
            //     this.placeholderCodeService.getRandomExample('auto');
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

    protected onDeleteAnimationKey(indexToDelete: number): void {
        this.animation.frameList;
    }

    protected updateCodeInUrl(code: string): void {
        this.urlService.updateQuery('code', compressToBase64(code));
    }

    protected updateTitleInUrl(title: string): void {
        this.urlService.updateQuery('title', compressToBase64(title));
    }
}
