import { CommonModule, DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import { Subscription, filter, fromEvent, skip, tap } from 'rxjs';

@Component({
    selector: 'dialog[app]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements AfterViewInit, OnDestroy {
    private subscription = new Subscription();
    get dialog(): HTMLDialogElement {
        return this.dialogElement.nativeElement;
    }

    constructor(
        private dialogElement: ElementRef<HTMLDialogElement>,
        @Inject(DOCUMENT) document: Document,
    ) {
        this.subscription.add(
            fromEvent(document, 'click')
                .pipe(
                    // skip(1),
                    filter((event: any) => {
                        const rect = event.target.getBoundingClientRect();
                        const clickedInDialog =
                            rect.top <= event.clientY &&
                            event.clientY <= rect.top + rect.height &&
                            rect.left <= event.clientX &&
                            event.clientX <= rect.left + rect.width;
                        return !clickedInDialog;
                    }),
                )
                .subscribe(() => this.closeDialog()),
        );
        this.subscription.add(
            fromEvent(document, 'keyup')
                .pipe(filter((e: any) => e.code === 'Escape'))
                .subscribe(() => this.closeDialog()),
        );
    }

    ngAfterViewInit(): void {
        this.dialog.showModal();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    closeDialog() {
        this.dialog.close();
        this.ngOnDestroy();
        this.dialog.parentElement?.removeChild(this.dialog);
    }
}
