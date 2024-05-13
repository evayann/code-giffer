import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { DialogService } from '../../../shared/services/dialog/dialog.service';
import { CanDeactivateComponent } from './can-deactivate.component';

export const askUserConfirmationBeforeLeaveFramePerFrame: <
    T extends any,
>() => CanDeactivateFn<T> = () => {
    return (): Observable<boolean> => {
        const dialogService = inject(DialogService);
        const canDeactivateComponent = dialogService.openDialog(
            CanDeactivateComponent,
        );
        return canDeactivateComponent.instance.result;
    };
};
