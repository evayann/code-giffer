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
import { InitialLoadingComponent } from '../../../core/initial-loading/initial-loading.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private applicationRef: ApplicationRef,
        private injector: Injector,
        private environmentInjector: EnvironmentInjector,
    ) {}

    test(): void {
        this.openModal(InitialLoadingComponent);
    }

    openModal<T>(componentType: Type<T>): void {
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
        this.applicationRef.attachView(dialogRef.hostView);
        this.document.body.appendChild(dialogRef.location.nativeElement);
    }
}
