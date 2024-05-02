import { FormControl, FormGroup, Validators, ɵElement } from '@angular/forms';
import { MenuForm } from './menu-form';
import { Theme } from '../../shared/services/theme.service';

export class MenuFormGroup extends FormGroup<{
    [K in keyof MenuForm]: ɵElement<MenuForm[K], null>;
}> {
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
            titleColor: 'white',
            caretColor: 'white',
        };
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

    constructor(currentTheme: Theme) {
        super({
            intervalBetweenFrameInMs: new FormControl(100, [
                Validators.min(1),
                Validators.max(100_000),
            ]),
            theme: new FormControl(currentTheme.name),
            loopIteration: new FormControl(0, [Validators.min(0)]),
            hasBackground: new FormControl(true),
            roundCorner: new FormControl('medium'),
            padding: new FormControl('medium'),
            isDarkMode: new FormControl(currentTheme.variant === 'dark'),
        });
    }

    private getMenuValue<Key extends keyof MenuForm>(key: Key): MenuForm[Key] {
        return this.get(key)?.value as MenuForm[Key];
    }
}
