import { Injectable } from '@angular/core';

import htmlExampleList from "../../../assets/code-examples/html.json";

@Injectable({
    providedIn: 'root'
})
export class PlaceholderCodeService {
    getExample(mode: 'auto' | 'frame-per-frame'): any {
        const example = htmlExampleList[0];

        if (mode === 'frame-per-frame') {
            return example;
        }

        return {
            title: example.title,
            code: example.frameList.at(-1)
        }
    }
}
