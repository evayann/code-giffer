import { ThemeName } from '../../shared/services/theme.service';

export type MenuForm = {
    intervalBetweenFrameInMs: number;
    theme: ThemeName;
    loopIteration: number;
    hasBackground: boolean;
    roundCorner: 'no' | 'medium' | 'large';
    padding: 'no' | 'small' | 'medium' | 'large';
    isDarkMode: boolean;
};
