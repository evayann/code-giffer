import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UrlService {
    constructor(private router: Router) {}

    updateQuery(queryParams: Record<string, string>): void {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
        });
    }
}
