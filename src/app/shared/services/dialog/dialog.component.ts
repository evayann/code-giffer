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
import { Subscription, fromEvent } from 'rxjs';

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
    private subscription: Subscription;
    get dialog(): HTMLDialogElement {
        return this.dialogElement.nativeElement;
    }

    constructor(
        private dialogElement: ElementRef<HTMLDialogElement>,
        @Inject(DOCUMENT) document: Document,
    ) {
        this.subscription = fromEvent(document, 'click').subscribe((event) =>
            this.closeDialog(event),
        );
    }

    ngAfterViewInit(): void {
        this.dialog.showModal();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    closeDialog(event: Event) {
        if (event.target !== this.dialog) return;
        this.dialog.close();
        this.dialog.parentElement?.removeChild(this.dialog);
        this.ngOnDestroy();
    }
}
