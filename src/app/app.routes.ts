import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Routes } from '@angular/router';
import { Observable, map, timer } from 'rxjs';
import { LoadingStateService } from './shared/services/loading-state.service';
import { DialogService } from './shared/services/dialog/dialog.service';

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

export const askUserConfirmation: <T extends any>(
    message: string,
) => CanDeactivateFn<T> = () => {
    return (): Observable<boolean> | boolean => {
        const dialogService = inject(DialogService);
        console.log('test');
        dialogService.test();
        return false;
    };
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
                canDeactivate: [askUserConfirmation('')],
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
