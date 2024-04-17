import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UrlService {
    private get currentQueries(): Record<string, string> {
        const path = this.location.path();
        const queryIndexStart = path.indexOf('?');

        if (queryIndexStart < 0) return {};

        const queriesString = path.substring(queryIndexStart + 1);
        const queries: Record<string, string> = queriesString.split('&').reduce((acc, query) => {
            const [key, value] = query.split('=');
            return { ...acc, [key]: value };
        }, {});

        return queries;
    }

    private get currentUrl(): string {
        const path = this.location.path();
        const queryIndexStart = path.indexOf('?');
        const url = path.substring(1, queryIndexStart > 0 ? queryIndexStart : path.length);
        return url;
    }

    constructor(private location: Location) { }

    updateQuery(key: string, value: string): void {
        const newQueries = { ...this.currentQueries, [key]: value };
        this.location.replaceState(this.currentUrl, this.queriesToString(newQueries));
    }

    private queriesToString(queries: Record<string, string>): string {
        return Object.entries(queries).map(([key, value]) => `${key}=${value}`).join('&');
    }
}
