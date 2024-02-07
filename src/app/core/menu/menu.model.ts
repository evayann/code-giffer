import { FormGroup, ɵElement } from "@angular/forms";

export interface MenuForm {
    intervalBetweenFrameInMs: number;
    theme: string;
    loopIteration: number;
    hasBackground: boolean;
    hasPadding: boolean;
    isDarkMode: boolean;
}

export type MenuFormGroup = FormGroup<{
    [K in keyof MenuForm]: ɵElement<MenuForm[K], null>;
}>