import { inject } from '@angular/core';
import { CanActivateFn, Routes } from '@angular/router';
import { Observable, map, timer } from 'rxjs';
import { askUserConfirmationBeforeLeaveFramePerFrame } from './pages/frame-per-frame-code-to-gif-page/can-deactivate/can-deactivate';
import { LoadingStateService } from './shared/services/loading-state.service';

export const loadGuard: CanActivateFn = (): Observable<boolean> | boolean => {
    const loadingStateService = inject(LoadingStateService);
    if (loadingStateService.isFirstLoad) {
        loadingStateService.startLoading();
        return timer(2000).pipe(
            map(() => {
                loadingStateService.endLoading();
                return true;
            }),
        );
    }
    return true;
};

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auto',
        pathMatch: 'full',
    },
    {
        path: '',
        canActivateChild: [loadGuard],
        children: [
            {
                path: 'auto',
                loadComponent: () =>
                    import(
                        './pages/auto-code-to-gif-page/auto-code-to-gif-page.component'
                    ).then((module) => module.AutoCodeToGifPageComponent),
            },
            {
                path: 'frame-per-frame',
                canDeactivate: [askUserConfirmationBeforeLeaveFramePerFrame()],
                loadComponent: () =>
                    import(
                        './pages/frame-per-frame-code-to-gif-page/frame-per-frame-code-to-gif-page.component'
                    ).then(
                        (module) => module.FramePerFrameCodeToGifPageComponent,
                    ),
            },
        ],
    },
];
