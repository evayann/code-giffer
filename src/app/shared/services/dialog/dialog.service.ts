import {
    ApplicationRef,
    ComponentRef,
    EnvironmentInjector,
    Inject,
    Injectable,
    Injector,
    Type,
    createComponent,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DialogComponent } from './dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    private currentDialog?: ComponentRef<DialogComponent>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private applicationRef: ApplicationRef,
        private injector: Injector,
        private environmentInjector: EnvironmentInjector,
    ) {}

    openDialog<T>(componentType: Type<T>): ComponentRef<T> {
        const environmentInjector =
            this.injector.get(EnvironmentInjector, null) ??
            this.environmentInjector;

        const componentRef = createComponent(componentType, {
            environmentInjector,
        });
        const dialogRef = createComponent(DialogComponent, {
            environmentInjector,
            projectableNodes: [componentRef.location.nativeElement.childNodes],
        });

        this.currentDialog = dialogRef;
        this.applicationRef.attachView(dialogRef.hostView);
        this.document.body.appendChild(dialogRef.location.nativeElement);

        return componentRef;
    }

    closeCurrentDialog(): void {
        this.currentDialog?.instance.closeDialog();
    }
}
