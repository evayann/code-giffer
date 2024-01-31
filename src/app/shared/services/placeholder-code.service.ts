import { Injectable } from '@angular/core';

import htmlExampleList from "../../../assets/code-examples/html.json";
import jsExampleList from "../../../assets/code-examples/js.json";
import { Language, languageList } from '../models/languages';

export type CodeAnimationExample = { title: string, frameList: string[] };
export type CodeExample = { title: string, code: string };

const examples: Record<Language, CodeAnimationExample[]> = {
    html: htmlExampleList,
    javascript: jsExampleList,
};

@Injectable({
    providedIn: 'root'
})
export class PlaceholderCodeService {
    getRandomExample(language: Language | 'auto'): CodeExample {
        const codeAnimation = this.getRandomExampleAnimation(language);
        return {
            title: codeAnimation.title,
            code: codeAnimation.frameList.at(-1) as string
        };
    }

    getRandomExampleAnimation(language: Language | 'auto'): CodeAnimationExample {
        if (language === 'auto') language = this.randomIn(languageList);
        return this.randomIn(examples[language]);
    }

    private randomIn<T>(list: T[]): T {
        const randomPosition = Math.floor(Math.random() * list.length);
        return list.at(randomPosition) as T;
    }
}
