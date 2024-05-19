import { FormControl, FormGroup, Validators, ɵElement } from '@angular/forms';
import { Theme } from '../../shared/services/theme.service';
import { MenuForm } from './menu-form';
import { Language } from '../model/language';

export class MenuFormGroup extends FormGroup<{
    [K in keyof MenuForm]: ɵElement<MenuForm[K], null>;
}> {
    static readonly MIN_FRAME = 1;
    static readonly MAX_FRAME = 100_000;
    static readonly MIN_TAB_SIZE = 2;
    static readonly MIN_LOOP_ITERATION = 0;

    private paddings: Record<MenuForm['padding'], string> = {
        no: '0',
        small: 'var(--padding-4)',
        medium: 'var(--padding-5)',
        large: 'calc(var(--padding-5) * 2)',
    };

    private borderRadius: Record<MenuForm['roundCorner'], string> = {
        no: '0',
        medium: 'var(--border-radius-3)',
        large: 'var(--border-radius-4)',
    };

    get theme() {
        return {
            background: this.getMenuValue('hasBackground')
                ? 'var(--gradient)'
                : 'transparent',
            padding: this.paddings[this.getMenuValue('padding')],
            borderRadius: this.borderRadius[this.getMenuValue('roundCorner')],
            codeSyntaxThemeName: 'androidstudio',
            tabSize: this.getMenuValue('tabSize'),
            titleColor: 'white',
            caretColor: 'white',
        };
    }

    get language(): Language | undefined {
        const selectedLanguage = this.getMenuValue('language');
        return selectedLanguage === 'auto' ? undefined : selectedLanguage;
    }

    get themeName(): MenuForm['theme'] {
        return this.getMenuValue('theme');
    }

    get variant(): 'dark' | 'light' {
        return this.getMenuValue('isDarkMode') ? 'dark' : 'light';
    }

    get delayInMs(): number {
        return this.getMenuValue('intervalBetweenFrameInMs');
    }

    get minFrame(): number {
        return MenuFormGroup.MIN_FRAME;
    }
    get maxFrame(): number {
        return MenuFormGroup.MAX_FRAME;
    }
    get minTabSize(): number {
        return MenuFormGroup.MIN_TAB_SIZE;
    }
    get minLoopIteration(): number {
        return MenuFormGroup.MIN_LOOP_ITERATION;
    }

    constructor(currentTheme: Theme) {
        super({
            intervalBetweenFrameInMs: new FormControl(100, [
                Validators.min(MenuFormGroup.MIN_FRAME),
                Validators.max(MenuFormGroup.MAX_FRAME),
            ]),
            theme: new FormControl(currentTheme.name),
            loopIteration: new FormControl(0, [
                Validators.min(MenuFormGroup.MIN_LOOP_ITERATION),
            ]),
            language: new FormControl('auto'),
            hasBackground: new FormControl(true),
            roundCorner: new FormControl('medium'),
            padding: new FormControl('medium'),
            tabSize: new FormControl(4, [
                Validators.min(MenuFormGroup.MIN_TAB_SIZE),
            ]),
            isDarkMode: new FormControl(currentTheme.variant === 'dark'),
        });
    }

    private getMenuValue<Key extends keyof MenuForm>(key: Key): MenuForm[Key] {
        return this.get(key)?.value as MenuForm[Key];
    }
}
