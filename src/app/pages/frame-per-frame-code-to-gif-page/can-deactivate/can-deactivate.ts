import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '../../../shared/services/dialog/dialog.service';
import { CanDeactivateComponent } from './can-deactivate.component';
import { FramePerFrameCodeToGifPageComponent } from '../frame-per-frame-code-to-gif-page.component';

export const askUserConfirmationBeforeLeaveFramePerFrame: () => CanDeactivateFn<FramePerFrameCodeToGifPageComponent> =
    () => {
        return (
            framePerFrameCodeToGifPageComponent: FramePerFrameCodeToGifPageComponent,
        ): Observable<boolean> | boolean => {
            if (!framePerFrameCodeToGifPageComponent.hasFrame) {
                return true;
            }
            const dialogService = inject(DialogService);
            const canDeactivateComponent = dialogService.openDialog(
                CanDeactivateComponent,
            );
            return canDeactivateComponent.instance.result;
        };
    };
