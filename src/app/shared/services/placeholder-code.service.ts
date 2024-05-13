import { Injectable } from '@angular/core';

import htmlExampleList from '../../../assets/code-examples/html.json';
import jsExampleList from '../../../assets/code-examples/js.json';
import { Language, languageList } from '../models/languages';

export type CodeExample = { title: string; code: string };

const examples: Record<Language, CodeExample[]> = {
    html: htmlExampleList,
    javascript: jsExampleList,
};

@Injectable({
    providedIn: 'root',
})
export class PlaceholderCodeService {
    getRandomExample(languageName: Language | 'auto'): CodeExample {
        const language =
            languageName === 'auto'
                ? this.randomIn(languageList)
                : languageName;
        const codeAnimation = this.randomIn(examples[language]);
        return { ...codeAnimation };
    }

    private randomIn<T>(list: T[]): T {
        const randomPosition = Math.floor(Math.random() * list.length);
        return list.at(randomPosition) as T;
    }
}
