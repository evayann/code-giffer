import { ThemeName } from '../../shared/services/theme.service';
import { Language } from './language';

export type MenuForm = {
    intervalBetweenFrameInMs: number;
    theme: ThemeName;
    language: Language;
    loopIteration: number;
    hasBackground: boolean;
    roundCorner: 'no' | 'medium' | 'large';
    padding: 'no' | 'small' | 'medium' | 'large';
    tabSize: number;
    isDarkMode: boolean;
};
