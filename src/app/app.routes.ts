import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auto', pathMatch: 'full' },
    { path: 'auto', loadComponent: () => import('./pages/auto-code-to-gif-page/auto-code-to-gif-page.component').then(module => module.AutoCodeToGifPageComponent) },
    { path: 'frame-per-frame', loadComponent: () => import('./pages/frame-per-frame-code-to-gif-page/frame-per-frame-code-to-gif-page.component').then(module => module.FramePerFrameCodeToGifPageComponent) }
];
