import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingStateService {
    isFirstLoad = true;

    get isLoading$(): Observable<boolean> {
        return this.isLoadingSubject$.asObservable();
    }

    private isLoadingSubject$ = new BehaviorSubject(false);

    startLoading(): void {
        this.isLoadingSubject$.next(true);
        this.isFirstLoad = false;
    }

    endLoading(): void {
        this.isLoadingSubject$.next(false);
    }
}
